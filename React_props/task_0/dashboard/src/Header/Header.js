import React from "react";
import holberton from "../assets";
import "./Header.css";

function header() {
  return (
    <div className="header">
      <img src={holberton} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default header;
