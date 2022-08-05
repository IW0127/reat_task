import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import cartContext from "../context/Context";
function Rating(props) {
  const { filterDispatch } = useContext(cartContext);

  return (
    <ReactStars
      count={5}
      edit={props?.edit ? true : false}
      value={props?.value >= 0 ? props.value : 0}
      onChange={(newRatingValue) => {
        filterDispatch({
          type: "FILTER_BY_RATING",
          payload: newRatingValue,
        });
      }}
      size={21}
      emptyIcon={<i className="far fa-star"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
