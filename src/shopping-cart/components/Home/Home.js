import React, { useContext } from "react";
import cartContext from "../context/Context";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
function Home() {
  const {
    state: { product },
    filterProd: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useContext(cartContext);
  const filterProducts = () => {
    let sortedProducts = product;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <div className="container-fluid h-100">
      <div className="row mainBox">
        <div className="col-2 p-0 h-100">
          <Sidebar />
        </div>
        <div className="col-10 mainBox">
          <div className="row justify-content-between" id="Product">
            {filterProducts().map((prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
