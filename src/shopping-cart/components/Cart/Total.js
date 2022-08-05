import React, { useContext, useEffect, useState } from "react";
import cartContext from "../context/Context";

function Total() {
  const {
    state: { cart },
  } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (tot, current) => tot + Number(current.price) * current.qty,
        0
      )
    );
  }, [cart]);
  const sidebarStyle = {
    color: "#fff",
    background: "rgb(56, 56, 56)",
  };
  return (
    <>
      <div className=" p-4 h-100 " style={sidebarStyle}>
        <h4>Subtotal ({cart.length}) items</h4>
        <h5>Total : ₹{total}.00</h5>
        <div>
          {/*   <button type="button" className="btn btn-light w-100 mt-4">
            Clear filter
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Total;
