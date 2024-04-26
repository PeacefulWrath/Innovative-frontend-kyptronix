import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail from "../../assets/mail.png";
import telephone from "../../assets/telephone.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import divider from "../../assets/divider.png";
import logo from "../../assets/logo.png";
import styles from "../../styles/HomeStyles.module.css";
import serviceStyles from "../../styles/ServicesStyles.module.css";
import { useNavigate } from "react-router-dom";
import GetCloseIcon from "../../assets/GetCloneIcon.png";

function TopBar({ page, bg }) {
  const [clicked, setClicked] = useState("Home");
  const [isGetquotes, setIsGetquotes] = useState(false);
  const navigate = useNavigate();

  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
    navigate(`/${clickedItem}`);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80%",
          backgroundImage: `url(${bg})`,
        }}
      >
        <nav
          className={
            page === "home"
              ? `${styles.Home_top_bar} navbar navbar-expand-lg `
              : `${serviceStyles.Services_top_bar} navbar navbar-expand-lg `
          }
        >
          <div className="container">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <p className="me-2">
                  <img
                    src={telephone}
                    alt="telephone"
                    className={styles.top_bar_icon}
                  />
                  <span className={styles.Home_top_bar_phn_no}>
                    +1-323-566-7866
                  </span>
                </p>
              </li>
              <li className="nav-item">
                <p className={styles.top_bar_divider}>|</p>
              </li>
              <li class="nav-item">
                <p className="ms-2">
                  <img src={mail} alt="mail" className={styles.top_bar_icon} />
                  <span className={styles.Home_top_bar_email_text}>
                    Example@gmail.com
                  </span>
                </p>
              </li>
            </ul>

            <ul className="navbar-nav gap-1 me-auto ">
              <li className="nav-item">
                <img
                  src={fb}
                  alt="fb"
                  className={styles.Home_top_bar_fb_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={styles.Home_top_bar_linkedin_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={insta}
                  alt="insta"
                  className={styles.Home_top_bar_insta_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={twitter}
                  alt="twitter"
                  className={styles.Home_top_bar_twitter_icon}
                />
              </li>
            </ul>

            <button
              onClick={() => setIsGetquotes(true)}
              className={styles.Home_top_bar_get_quota_btn}
            >
              Get Quote
            </button>
          </div>
        </nav>
        <img
          style={{ marginTop: "0.3%", marginBottom: "0px" }}
          src={divider}
          alt="divider"
        />

        <div className="d-flex" style={{ marginTop: "-0.7%" }}>
          <img className={styles.Home_logo} src={logo} alt="logo" />
          <div className={styles.Home_menu_list}>
            <p
              className={`${
                clicked === "home"
                  ? `${styles.Home_menue_active}`
                  : `${styles.Home_menue}`
              }`}
              onClick={() => {
                handleClick("home");
              }}
            >
              Home
            </p>

            <p
              className={`${
                clicked === "services"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("services");
              }}
            >
              Services
            </p>
            <p
              className={`${
                clicked === "products"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("products");
              }}
            >
              Products
            </p>
            <p
              className={`${
                clicked === "trainings"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("trainings");
              }}
            >
              Trainings
            </p>
            <p
              className={`${
                clicked === "partners"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("partners");
              }}
            >
              Our Partners
            </p>
            <p
              className={`${
                clicked === "gallery"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("gallery");
              }}
            >
              Gallery
            </p>
            <p
              className={`${
                clicked === "aboutus"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("aboutus");
              }}
            >
              About Us
            </p>
            <p
              className={`${
                clicked === "contactus"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("contactus");
              }}
            >
              Contact Us
            </p>
          </div>

          <button onClick={()=> navigate('/register')} className={styles.Home_signup_btn}>Sign up</button>

          <button onClick={()=> navigate('/login')} className={styles.Home_login_btn}>Login</button>
        </div>

        {page === "services" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            What we offer?
          </div>
        )}
        {page === "products" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Our products
          </div>
        )}
        {page === "trainings" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Trainings
          </div>
        )}
        {page === "partners" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Our Partners
          </div>
        )}
        {page === "gallery" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Gallery
          </div>
        )}
        {page === "aboutus" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            About Us
          </div>
        )}
        {page === "contactus" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Contact Us
          </div>
        )}
      </div>

      {isGetquotes && <GetQuotes setIsGetquotes={setIsGetquotes} />}
    </>
  );
}

export default TopBar;

const GetQuotes = ({ setIsGetquotes }) => {
  return (
    <>
      <div className={styles.Get__Quotes}>
        <div className={styles.Get__Quotes_FormWrapper}>
          <div className={styles.Get__Quotes_headerWrapper}>
            <h2 style={{ color: "white" }}>Get a quote </h2>
            <span
              onClick={() => setIsGetquotes(false)}
              className={styles.Get__Quotes_ImgWrpper}
            >
              <img src={GetCloseIcon} alt="cross-icon" />
            </span>
          </div>
          <div className={styles.Get__Quotes_FormContainer}>
            <div className={styles.Get__Quotes_InputsWrapper}>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={styles.Get__Quotes_input}
                />
              </div>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={styles.Get__Quotes_input}
                />
              </div>
            </div>

            <div className={styles.Get__Quotes_InputsWrapper}>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Phone number"
                  className={styles.Get__Quotes_input}
                />
              </div>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Email ID"
                  className={styles.Get__Quotes_input}
                />
              </div>
            </div>

            <div className={styles.Get__Quotes_SubjectsWrapper}>
              <div className={styles.Get__Quotes_SubjectWrapper}>
                <select
                  type="text"
                  placeholder="Phone number"
                  className={styles.Get__Quotes_input}
                >
                  <option default value='hello'>Select subject</option>
                  <option value='hello'>hello</option>
                  <option value='hello'>hello</option>
                  <option value='hello'>hello</option>
                  <option value='hello'>hello</option>
                </select>
              </div>
            </div>


            <div className={styles.Get__Quotes_MessageWrapper}>
                <div className={styles.Get__Quotes_TextareaWrapper}>
                      <textarea
                        type="text"
                        placeholder="Message"
                        className={styles.Get__Quotes_input}
                        rows='5'
                      />
                </div>
            </div>
          </div>

          <div className={styles.Get__Quotes_SubmitBtnWrapper}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
