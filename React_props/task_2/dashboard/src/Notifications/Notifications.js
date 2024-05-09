import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem.js";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.jpg";

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
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
