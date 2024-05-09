import React from "react";
import { getFullYear, getFullYear } from "../utils/utils";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default footer;
