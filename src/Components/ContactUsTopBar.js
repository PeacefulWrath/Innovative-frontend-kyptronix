import React,{useState} from "react";
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
import styles from "../styles/AboutUsStyles.module.css";
import bg from "../assets/contactus-topbar-bg.png";
import { useNavigate  } from 'react-router-dom';
function ContactUsTopBar() {
  const [clicked, setClicked] = useState("Home");
  const navigate = useNavigate ();
  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
    navigate(`/${clickedItem}`);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bg})`,
      }}
    >
      <nav
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%) ",
        }}
        class={`${styles.Aboutus_top_bar} navbar navbar-expand-lg `}
      >
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img
                  src={telephone}
                  alt="telephone"
                  className={styles.Aboutus_top_bar_icon}
                />{" "}
                <span className={styles.Aboutus_top_bar_phn_no}>
                  +1-323-566-7866
                </span>
              </p>
            </li>
            <li class="nav-item">
              <p className={styles.Aboutus_top_bar_divider}>|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="Aboutus_top_bar_icon" />{" "}
                <span className={styles.Aboutus_top_bar_email_text}>
                  Example@gmail.com
                </span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className={styles.Aboutus__bar_fb_icon} />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className={styles.Aboutus_top_bar_linkedin_icon}
              />
            </li>
            <li class="nav-item">
              <img
                src={insta}
                alt="insta"
                className={styles.Aboutus__bar_insta_icon}
              />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className={styles.Aboutus_top_bar_twitter_icon}
              />
            </li>
          </ul>

          <button className={styles.Aboutus_top_bar_get_quota_btn}>
            Get Quote
          </button>
        </div>
      </nav>
      <img
        src={divider}
        alt="divider"
        style={{ marginTop: "0.9%", marginBottom: "0px" }}
      />

      <div className="d-flex">
        <img className={styles.Aboutus_logo} src={logo} alt="logo" />
        {/* <div className={styles.Aboutus_menu_list}>
          <p className={styles.Aboutus_home}>Home</p>
          <p className={styles.Aboutus_other_menues}>Services</p>
          <p className={styles.Aboutus_other_menues}>Products</p>
          <p className={styles.Aboutus_other_menues}>Training</p>
          <p className={styles.Aboutus_other_menues}>Our Partner</p>
          <p className={styles.Aboutus_other_menues}>Gallery</p>

          <p className={styles.Aboutus_other_menues}>About Us</p>

          <p className={styles.Aboutus_other_menues}>Contact Us</p>
        </div> */}
<div className="menu-list">
          <p className={`${clicked === "home"
              ? "home-menue-active"
              : "home-menue"
            }`}
            onClick={() => {
              handleClick("home");
              
            }}>Home</p>

          <p className={`${clicked === "services"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("services");
            }}>Services</p>
          <p className={`${clicked === "products"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("products");
            }}>Products</p>
          <p className={`${clicked === "trainings"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("trainings");
            }}>Trainings</p>
          <p className={`${clicked === "partners"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("partners");
            }}>Our Partners</p>
          <p className={`${clicked === "gallery"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("gallery");
            }}>Gallery</p>
          <p className={`${clicked === "aboutus"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("aboutus");
            }}>About Us</p>
          <p className={`${clicked === "contactus"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("contactus");
            }}>Contact Us</p>
        </div>
        <button className={styles.Aboutus_signup_btn}>
          {" "}
          <p className={styles.Aboutus_signup_text}>signup</p>
        </button>

        <button className={styles.Aboutus_login_btn}>
          <p className={styles.Aboutus_login_text}>login</p>
        </button>
      </div>
      <div
        className={`${styles.Aboutus_top_bar_text} d-flex justify-content-center`}
      >
        Contact us
      </div>
    </div>
  );
}

export default ContactUsTopBar;
