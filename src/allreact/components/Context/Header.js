import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "./Context";
function Header() {
  const { cart } = useContext(cartContext);
  return (
    <>
      <ul className="nav justify-content-center border-bottom sticky-top  bg-light">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/context">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/context/cart">
            Cart({cart.length})
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
