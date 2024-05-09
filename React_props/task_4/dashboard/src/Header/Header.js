import React from "react";
import holberton from "../assets/holberton.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={holberton} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
