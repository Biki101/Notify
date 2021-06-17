import React from "react";
import "./admin-dashboard.styles.scss";
import { AiFillFileAdd } from "react-icons/ai";

const AdminDashboard = () => {
  return (
    <div className="home">
      <div className="add-notification">
        <div className="add-notification-text">Add Notification</div>
        <AiFillFileAdd
          className="add-notificatio-icon"
          style={{ fontSize: 50, color: "green" }}
        />
      </div>
      <div className="notifications">
        <h4>Published Notifications</h4>
        <div className="notification-block">
          <div className="header">
            <div className="header-block">
              <label className="header-title">SN</label>
            </div>
            <div className="header-block">
              <label className="header-title">Date</label>
            </div>
            <div className="header-block">
              <label className="header-title">Notifications</label>
            </div>
            <div className="header-block">
              <label className="header-title">Remove</label>
            </div>
          </div>
          <div className="notification-list">list</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
