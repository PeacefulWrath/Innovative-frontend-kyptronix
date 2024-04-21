import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoWhite from "../../assets/logo-white.png";
import styles from "../../styles/HomeStyles.module.css";
import fb from "../../assets/fb.png";
import glow from "../../assets/glow2.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

function Footer() {
  return (
    <div className="d-flex justify-content-center ">
      <div className={styles.Home_footer_logo_section}>
        <img className={styles.Home_footer_logo_white} src={logoWhite} alt="logo-white" />
        <div className={`${styles.Home_footer_main_para} mt-3`}>
          <div className={styles.Home_footer_logo_white_para}>
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

      <div className={styles.Home_footer_menues}>
        <div className={styles.Home_footer_menu_main}>Menu</div>
        <div className={styles.Home_footer_menu}>Home</div>
        <div className={styles.Home_footer_menu}>Service</div>
        <div className={styles.Home_footer_menu}>Products</div>
        <div className={styles.Home_footer_menu}>Training</div>
        <div className={styles.Home_footer_menu}>Our partner</div>
      </div>

      <div
        style={{
          marginTop: "1.5%",
        }}
        className={styles.Home_footer_menues}
      >
        <div className={styles.Home_footer_menu}>Gallery</div>
        <div className={styles.Home_footer_menu}>Contact us</div>
        <div className={styles.Home_footer_menu}>About Us</div>
      </div>

      <div className={styles.Home_footer_menues}>
        <div className={styles.Home_footer_menu_main}>Help</div>
        <div className={styles.Home_footer_menu_main}>Payment</div>
        <div className={styles.Home_footer_menu_main}>Returns</div>
        <div className={styles.Home_footer_menu_main}>Faqs</div>
      </div>

      <div>
        <div className={styles.Home_footer_quote}>click now on quota</div>
        <img src={glow} alt="glow" />
      </div>
    </div>
  );
}

export default Footer;
