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
import "../styles/ProductsStyles.css";
import bg from "../assets/products-top-bar.png";

function ProductsTopBar() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${bg})`,
        height: "80%",
      }}
    >
      <nav class="Prod_top_bar navbar navbar-expand-lg  ">
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img
                  src={telephone}
                  alt="telephone"
                  className="Prod_top_bar_icon"
                />{" "}
                <span className="Prod_top_bar_phn_no">+1-323-566-7866</span>
              </p>
            </li>
            <li class="nav-item">
              <p className="Prod_top_bar_divider">|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="Prod_top_bar_icon" />{" "}
                <span className="Prod_top_bar_email_text">
                  Example@gmail.com
                </span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="Prod__bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className="Prod_top_bar_linkedin_icon"
              />
            </li>
            <li class="nav-item">
              <img src={insta} alt="insta" className="Prod__bar_insta_icon" />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className="Prod_top_bar_twitter_icon"
              />
            </li>
          </ul>

          <button className="Prod_top_bar_get_quota_btn">Get Quote</button>
        </div>
      </nav>
      <img
        src={divider}
        alt="divider"
        style={{ marginTop: "0.9%", marginBottom: "0px" }}
      />

      <div className="d-flex">
        <img className="Prod_logo" src={logo} alt="logo" />
        <div className="Prod_menu-list">
          <p className="Prod_home ">Home</p>
          <p className="Prod_other-menues ">Services</p>
          <p className="Prod_other-menues ">Products</p>
          <p className="Prod_other-menues ">Training</p>
          <p className="Prod_other-menues ">OurPartner</p>
          <p className="Prod_other-menues ">Gallery</p>

          <p className="Prod_other-menues ">AboutUs</p>

          <p className="Prod_other-menues">ContactUs</p>
        </div>

        <button className="Prod_signup-btn">signup</button>

        <button className="Prod_login-btn">login</button>
      </div>
      <div className="Prod_top_bar_text d-flex justify-content-center">
        Our Products
      </div>
    </div>
  );
}

export default ProductsTopBar;
