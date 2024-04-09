import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoWhite from "../assets/logo-white.png";
import "../styles/HomeStyles.css";
import fb from "../assets/fb.png";
import glow from "../assets/glow2.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

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
          <img className="ms-2" src={insta} alt="fb" />
          <img className="ms-2" src={linkedin} alt="fb" />
          <img className="ms-2" src={twitter} alt="fb" />
        </div>
      </div>

      <div style={{ marginLeft: "9%" }} className="footer-menues">
        <div className="footer-menu-main">Menu</div>
        <div className="footer-menu">Home</div>
        <div className="footer-menu">Service</div>
        <div className="footer-menu">Products</div>
        <div className="footer-menu">Training</div>
        <div className="footer-menu">Our partner</div>
      </div>

      <div style={{ marginLeft: "9%", marginTop:"1.5%" }} className="footer-menues">
        <div className="footer-menu">Gallery</div>
        <div className="footer-menu">Contact us</div>
        <div className="footer-menu">About Us</div>
        {/* <div className="footer-menu">home</div>
        <div className="footer-menu">home</div>
        <div className="footer-menu">home</div> */}
      </div>

      <div style={{ marginLeft: "9%" }} className="footer-menues">
        <div className="footer-menu-main">Help</div>
        <div className="footer-menu-main">Payment</div>
        <div className="footer-menu-main">Returns</div>
        <div className="footer-menu-main">Faqs</div>
     
      </div>

      <div style={{ marginLeft: "9%" }}>
        <div className="footer-quote">click now on quota</div>
        <img src={glow} alt="glow" />
      </div>
    </div>
  );
}

export default Footer;
