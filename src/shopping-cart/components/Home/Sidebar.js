import React, { useContext } from "react";
import cartContext from "../context/Context";
import Rating from "./Rating";
export default function Sidebar() {
  const {
    filterProd: { sort, byStock, byFastDelivery, byRating, searchQuery },
    filterDispatch,
  } = useContext(cartContext);
  console.log(byRating);
  const sidebarStyle = {
    color: "#fff",
    background: "rgb(56, 56, 56)",
  };
  return (
    <div className=" p-4 h-100 " style={sidebarStyle}>
      <h4>Filter Product</h4>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Ascending
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Descending
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Include Out of stock
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Fast Delivery Only
        </label>
      </div>
      <div className="d-flex align-items-center my-3">
        <span className="me-2">Rating:</span>
        <Rating edit={true} />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-light w-100 mt-4"
          onClick={() =>
            filterDispatch({
              type: "CLEAR_ALL_FILTER",
            })
          }
        >
          Clear filter
        </button>
      </div>
    </div>
  );
}
