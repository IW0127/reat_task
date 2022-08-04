import React, { useContext } from "react";
import cartContext from "./Context";
const SingleProduct = (props) => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="card col-3 m-2" style={{ width: "18rem" }}>
      <img src={props.productsData.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title"> {props.productsData.name} </h5>
        <div className="card-text">
          Price : ₹<span>{props.productsData.price}</span>
        </div>
        <br />
        {cart.includes(props.productsData) ? (
          <button
            className="btn btn-danger Price"
            onClick={() =>
              setCart(cart.filter((c) => c.id !== props.productsData.id))
            }
          >
            remove
          </button>
        ) : (
          <button
            className="btn btn-primary Price"
            onClick={() => {
              setCart([...cart, props.productsData]);
            }}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
