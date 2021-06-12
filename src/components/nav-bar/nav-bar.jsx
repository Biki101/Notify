import React from "react";
import "./nav-bar.styles.scss";
import { RiHome2Line } from "react-icons/ri";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-des">College Description</div>
      <div className="nav-bar">
        <div className="nav-home">
          <RiHome2Line
            size={25}
            style={{
              verticalAlign: "middle",
              alignSelf: "center",
              width: 50,
              marginLeft: 5,
            }}
          />
        </div>
        <div className="nav-options">
          <div className="nav-option">About Us</div>
          <div className="nav-option">Contacts</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
