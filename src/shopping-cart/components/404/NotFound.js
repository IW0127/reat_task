import React from "react";
import notFound from "../img/notFound.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const imgStyle = {
    width: "100vh",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  };
  return (
    <Link to="/">
      <img src={notFound} style={imgStyle} alt="not found" />
    </Link>
  );
};

export default PageNotFound;
