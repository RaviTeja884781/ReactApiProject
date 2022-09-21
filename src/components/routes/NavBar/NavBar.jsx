import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">CovidInfo</Link>
      <Link to="news">NewsInfo</Link>
      <Link to="gitusers">GitUsers</Link>
      <Link to="superheros">SuperHero</Link>
      <Link to="uni">Universityes</Link>
      <Link to="publicApi">PublicApis</Link>
      {/* <Link to="movies">Movies</Link> */}
    </nav>
  );
};

export default NavBar;
