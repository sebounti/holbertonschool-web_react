import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "./close-icon.png";

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{ position: "absolute", right: "20px", top: "20px" }}
        aria-label="Close"
      >
        <img src={closeIcon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
