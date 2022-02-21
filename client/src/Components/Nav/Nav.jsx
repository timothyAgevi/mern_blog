import React from "react";
import { Link } from "react-router-dom";
// import styles from " ./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav className= "nav">
        <Link to={"/"}> Homepage</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
    </div>
  );
};

export default Nav;
