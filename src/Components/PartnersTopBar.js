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
import styles from "../styles/PartnersStyles.module.css";
import bg from "../assets/partners-top-bar.png";

function PartnersTopBar() {
  return (
    <>
      <nav class={`${styles.Partner_top_bar} navbar navbar-expand-lg`}>
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img
                  src={telephone}
                  alt="telephone"
                  className={styles.Partner_top_bar_icon}
                />{" "}
                <span className={styles.Partner_top_bar_phn_no}>
                  +1-323-566-7866
                </span>
              </p>
            </li>
            <li class="nav-item">
              <p className={styles.Partner_top_bar_divider}>|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="Partner_top_bar_icon" />{" "}
                <span className={styles.Partner_top_bar_email_text}>
                  Example@gmail.com
                </span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="Partner__bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className={styles.Partner_top_bar_linkedin_icon}
              />
            </li>
            <li class="nav-item">
              <img
                src={insta}
                alt="insta"
                className="Partner__bar_insta_icon"
              />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className={styles.Partner_top_bar_twitter_icon}
              />
            </li>
          </ul>

          <button className={styles.Partner_top_bar_get_quota_btn}>
            Get Quote
          </button>
        </div>
      </nav>
      <img
        src={divider}
        alt="divider"
        style={{
          marginTop: "0.9%",

          marginBottom: "0px",
        }}
      />

      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: "80%",
        }}
      >
        <div className="d-flex">
          <img className={styles.Partner_logo} src={logo} alt="logo" />
          <div className={styles.Partner_menu_list}>
            <p className={styles.Partner_home}>Home</p>
            <p className={styles.Partner_other_menues}>Services</p>
            <p className={styles.Partner_other_menues}>Products</p>
            <p className={styles.Partner_other_menues}>Partnering</p>
            <p className={`${styles.Partner_other_menues}`}>Our Partner</p>
            <p className={styles.Partner_other_menues}>Gallery</p>

            <p className={styles.Partner_other_menues}>About Us</p>

            <p className={styles.Partner_other_menues}>Contact Us</p>
          </div>

          <button className={styles.Partner_signup_btn}>signup</button>

          <button className={styles.Partner_login_btn}>login</button>
        </div>
        <div
          className={`${styles.Partner_top_bar_text} d-flex justify-content-center`}
        >
          our partners
        </div>
      </div>
    </>
  );
}

export default PartnersTopBar;
