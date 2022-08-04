import React, { useContext } from "react";
import cartContext from "./Context";
import SingleProduct from "./SingleProduct";

function Cart() {
  const { cart } = useContext(cartContext);
  return (
    <div className="row justify-content-between" id="Product">
      {cart.map((productsData) => (
        <SingleProduct key={productsData.id} productsData={productsData} />
      ))}
    </div>
  );
}

export default Cart;
