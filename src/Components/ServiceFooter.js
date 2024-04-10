import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo-white.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

function ServiceFooter() {
  return (
    <div className="ser_footer-main">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="logo-white" />
      </div>

      <div
        className="mt-3"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="ser_footer-menues">
          <p className="ser_footer-menu">Home</p>
          <p className="ser_footer-menu-active">Services</p>
          <p className="ser_footer-menu">Products</p>
          <p className="ser_footer-menu">Training</p>
          <p className="ser_footer-menu">Our Partner</p>
          <p className="ser_footer-menu">Gallery</p>
          <p className="ser_footer-menu">About Us</p>
          <p className="ser_footer-menu">Contact Us</p>
        </div>
      </div>

      <div
        className="mt-3"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img alt="fb" src={fb} />
        <img className="ms-2" alt="insta" src={insta} />
        <img className="ms-2" alt="twitter" src={twitter} />
        <img className="ms-2" alt="linkedin" src={linkedin} />
      </div>
    </div>
  );
}

export default ServiceFooter;
