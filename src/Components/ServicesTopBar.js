import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import divider from "../assets/divider.png";
import logo from "../assets/logo.png";
import "../styles/ServicesStyles.css";
import bg from "../assets/services-top-bar.png";

function ServicesTopBar() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${bg})`,
      }}
    >
      <nav class="ser_top_bar navbar navbar-expand-lg  ">
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img
                  src={telephone}
                  alt="telephone"
                  className="ser_top_bar_icon"
                />{" "}
                <span className="ser_top_bar_phn_no">+1-323-566-7866</span>
              </p>
            </li>
            <li class="nav-item">
              <p className="ser_top_bar_divider">|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="ser_top_bar_icon" />{" "}
                <span className="ser_top_bar_email_text">
                  Example@gmail.com
                </span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="ser__bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className="ser_top_bar_linkedin_icon"
              />
            </li>
            <li class="nav-item">
              <img src={insta} alt="insta" className="ser__bar_insta_icon" />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className="ser_top_bar_twitter_icon"
              />
            </li>
          </ul>

          <button className="ser_top_bar_get_quota_btn">Get Quote</button>
        </div>
      </nav>
      <img src={divider} alt="divider" />

      <div className="d-flex">
        <img className="ser_logo" src={logo} alt="logo" />
        <div className="ser_menu-list">
          <p className="ser_home ">Home</p>
          <p className="ser_other-menues ">Services</p>
          <p className="ser_other-menues ">Products</p>
          <p className="ser_other-menues ">Training</p>
          <p className="ser_other-menues ">Our Partner</p>
          <p className="ser_other-menues ">Gallery</p>

          <p className="ser_other-menues ">About Us</p>

          <p className="ser_other-menues">Contact Us</p>
        </div>

        <button className="ser_signup-btn">signup</button>

        <button className="ser_login-btn">login</button>
      </div>
      <div className="ser_top_bar_text d-flex justify-content-center">
        What we offer?
      </div>
    </div>
  );
}

export default ServicesTopBar;
