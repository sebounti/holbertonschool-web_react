import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
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
