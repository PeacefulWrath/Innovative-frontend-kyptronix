import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/logo-white.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import styles from "../../styles/ServicesStyles.module.css";

function ServiceFooter() {
  return (
    <div className={styles.Services_footer_main}>
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
        <div className={styles.Services_footer_menues}>
          <p className={styles.Services_footer_menu}>Home</p>
          <p className={styles.Services_footer_menu_active}>Services</p>
          <p className={styles.Services_footer_menu}>Products</p>
          <p className={styles.Services_footer_menu}>Training</p>
          <p className={styles.Services_footer_menu}>Our Partner</p>
          <p className={styles.Services_footer_menu}>Gallery</p>
          <p className={styles.Services_footer_menu}>About Us</p>
          <p className={styles.Services_footer_menu}>Contact Us</p>
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
