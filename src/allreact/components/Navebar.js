import React from "react";
export default function Navebar() {
  return (
    <nav className="navbar navbar-light bg-light border">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          All React Examples
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
