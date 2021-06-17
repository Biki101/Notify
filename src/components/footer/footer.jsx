import React from "react";
import "./footer.styles.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="phone">
          <FaPhoneSquareAlt />
          <label>0674-2563835</label>
        </div>
        <div className="mail">
          <MdEmail />
          <label>nitbbsr_2007@yahoo.co.in</label>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2021 Nalanda Institute of Technology (NIT, BBSR)., All
        Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
