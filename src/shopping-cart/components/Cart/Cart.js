import React from "react";
import Preview from "./Preview";
import Total from "./Total";
import "../../App.css";
function Cart() {
  return (
    <div className="container-fluid h-100">
      <div className="row mainBox">
        <div className="col-10 mainBox">
          <Preview />
        </div>
        <div className="col-2 p-0 h-100">
          <Total />
        </div>
      </div>
    </div>
  );
}

export default Cart;
