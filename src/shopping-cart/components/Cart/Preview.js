import React, { useContext } from "react";
import cartContext from "../context/Context";
import Rating from "../Home/Rating";

function Preview() {
  const {
    state: { cart },
    dispatch,
  } = useContext(cartContext);
  return (
    <div className="my-4 container align-items-center d-md-flex flex-column">
      {cart.map((prod) => (
        <div
          className="card mb-3 shadow-1-strong"
          style={{ maxWidth: "700px" }}
          key={prod.id}
        >
          <div className="row g-0">
            <div className="col-md-5 d-flex align-items-center">
              <img
                src={prod.img}
                alt="Trendy Pants and Shoes"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h4 className="card-title">{prod.name}</h4>
                    <p className="card-text">Price : ₹ {prod.price}</p>
                    <div className="card-text">
                      <Rating value={prod.ratings} />
                    </div>
                  </div>
                  <div className="col-3 p-0 align-items-center">
                    <select
                      className="form-control select-input w-100 my-2 active focused"
                      aria-label="Default select example"
                      value={prod.qut}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: prod.id, qty: e.target.value },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({ type: "REMOVE_TO_CART", payload: prod })
                      }
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Preview;
