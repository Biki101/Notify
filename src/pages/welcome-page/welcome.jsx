import React from "react";
import { Link } from "react-router-dom";
import admin from "../../assets/admin-card.png";
import notice from "../../assets/student-notice.png";
import "./welcome.styles.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <Link to="/login">
        <div className="admin-card">
          <img src={admin} alt="admin" />
          <label className="admin">Administartor</label>
        </div>
      </Link>
      <div className="student-card">
        <img src={notice} alt="admin" />
        <label className="student">Notices</label>
      </div>
    </div>
  );
};

export default Welcome;
