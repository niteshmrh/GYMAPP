import React from "react";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import logo from "../assets/logo.png";
import Instgram from "../assets/instagram.png";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
       <div className="social-links">
       <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instgram} alt="" />
       </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="footer-blur-1"></div>
      <div className="footer-blur-2"></div>
    </div>
  );
}

export default Footer;
