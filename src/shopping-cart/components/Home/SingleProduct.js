import React, { useContext } from "react";
import cartContext from "../context/Context";
import Rating from "./Rating";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(cartContext);
  return (
    <>
      <div className="card col-3 m-2" style={{ width: "18rem" }}>
        <img
          src={prod.img}
          className="card-img-top"
          alt="Chicago Skyscrapers"
        />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">Price : ₹ {prod.price}</p>
          <h6 className="card-subtitle my-1 text-muted">
            {prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}
          </h6>
          <div className="card-subtitle mx-0 my-2 text-muted">
            <Rating value={prod.ratings} />
          </div>
        </div>
        <ul className="list-group list-group-light list-group-small m-3">
          {cart.some((products) => products.id === prod.id) ? (
            <button
              className="btn btn-danger Price "
              onClick={() => {
                dispatch({
                  type: "REMOVE_TO_CART",
                  payload: prod,
                });
              }}
            >
              remove to cart
            </button>
          ) : (
            <button
              className="btn btn-primary Price "
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of stock" : "Add to cart"}
            </button>
          )}
        </ul>
      </div>
    </>
  );
}

export default SingleProduct;
