import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoWhite from "../assets/logo-white.png";
import "../styles/HomeStyles.css";
import fb from "../assets/fb.png";
import glow from "../assets/glow2.png";

function Footer() {
  return (
    <div className="d-flex ">
      <div style={{ marginLeft: "9%" }} className="footer-logo-section">
        <img className="logo-white" src={logoWhite} alt="logo-white" />
        <div className="footer-main-para mt-3">
          <div className="footer-logo-white-para ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            condimentum ex. Ut semper ornare quam, non auctor lacus sodales
            eget.
          </div>
        </div>
        <div className="d-flex mt-3">
          <img src={fb} alt="fb" />
          <img className="ms-2" src={fb} alt="fb" />
          <img className="ms-2" src={fb} alt="fb" />
          <img className="ms-2" src={fb} alt="fb" />
        </div>
      </div>

      <div style={{ marginLeft: "9%" }} className="footer-menues">
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
      </div>

      <div style={{ marginLeft: "9%" }} className="footer-menues">
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
      </div>

      <div style={{ marginLeft: "9%" }} className="footer-menues">
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
      </div>

      <div style={{ marginLeft: "9%" }}>
        <div className="footer-quote">click now on quota</div>
        <img src={glow} alt="glow" />
      </div>
    </div>
  );
}

export default Footer;
