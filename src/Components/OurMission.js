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
import "../styles/HomeStyles.css";

function OurMission() {
  return (
    <>
      <nav class="top_bar navbar navbar-expand-lg  ">
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img src={telephone} alt="telephone" className="top_bar_icon" />{" "}
                <span className="top_bar_phn_no">+1-323-566-7866</span>
              </p>
            </li>
            <li class="nav-item">
              <p className="top_bar_divider">|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="top_bar_icon" />{" "}
                <span className="top_bar_email_text">Example@gmail.com</span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="top_bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className="top_bar_linkedin_icon"
              />
            </li>
            <li class="nav-item">
              <img src={insta} alt="insta" className="top_bar_insta_icon" />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className="top_bar_twitter_icon"
              />
            </li>
          </ul>

          <button className="btn top_bar_get_quota_btn pb-2">get quota</button>
        </div>
      </nav>
      <img style={{ marginTop: "0.3%" }} src={divider} alt="divider" />
    </>
  );
}

export default OurMission;
