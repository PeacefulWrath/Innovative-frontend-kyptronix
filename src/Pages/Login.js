import React, { useState } from "react";
import Styles from "../styles/LoginStyles.module.css";
import { Link } from "react-router-dom";

import SingUpBg from "../assets/SignUpBg.png";
import Logo from "../assets/logo-white.png";
import GoogleIcon from "../assets/googleIcon.png";
import FacebookIcon from "../assets/facebookIcon.png";
import LinkedinIcon from "../assets/linkedinIcon.png";
import EyeIcon from "../assets/EyeIcon.png";

export const Login = () => {
  const [hideAndShowPass, setHideAndShowPass] = useState(false);

  const handleClick = () => {
    setHideAndShowPass(!hideAndShowPass);

    setTimeout(() => {
      setHideAndShowPass(false);
    }, 10000);
  };

  return (
    <div className={`${Styles.Login__main__div}`}>
      <div
        style={{
          background: `url(${SingUpBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${Styles.Login__rgt__Wrapper}`}
      >
        <div className={`${Styles.Login__rgt__LogoAndTitle__Wrapper}`}>
          <img className="" src={Logo} alt="logo-icon" />
          <h1>Welcome to Innovative tech solution limited</h1>
        </div>
      </div>
      <div className={`${Styles.Login__lft__Wrapper}`}>
        <div className={`${Styles.Login__lft__content__wrapper}`}>
          <h2 className={`${Styles.Login__lft__contentTitle}`}>Login</h2>
          <p className={`${Styles.Login__lft__cotentPara}`}>
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <div className={`${Styles.Login__lft__form__wrapper}`}>
            <div className={`${Styles.Login__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Login__lft__input_wrapper}`}>
                <input type="text" placeholder="Email ID" />
              </div>
            </div>

            <div className={`${Styles.Login__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Login__lft__input_wrapper}`}>
                <input
                  type={`${hideAndShowPass ? "text" : "password"}`}
                  placeholder="Password"
                />
                <span
                  onClick={handleClick}
                  className={`${Styles.Login__lft__EyeIcon}`}
                >
                  <img src={EyeIcon} alt="eye-icon" />
                </span>
              </div>
            </div>

            <button className={`${Styles.Login__lft__SignIn__BTN}`}>
              Log in
            </button>
          </div>

          <p className={`${Styles.Login__lft__LoginPara}`}>
          Don’t have an account? 
            <Link className={`${Styles.Login__lft__Link}`} to="/register">
            Sign up
            </Link>
          </p>

          <div className={`${Styles.Login__lft__SocialloginOp__wrapper}`}>
            <div className={`${Styles.Login__lft__SoptionPara__wrapper}`}>
              <p className={`${Styles.Login__lft__SoptionPara}`}>
                Or subscribe with
              </p>
            </div>
            <div className={`${Styles.Login__lft__optionIcon__wrapper}`}>
              <span className={`${Styles.Login__lft__IconWrapper}`}>
                <img src={GoogleIcon} alt="social-login-option-Icon" />
              </span>
              <span className={`${Styles.Login__lft__IconWrapper}`}>
                <img src={FacebookIcon} alt="social-login-option-Icon" />
              </span>
              <span className={`${Styles.Login__lft__IconWrapper}`}>
                <img src={LinkedinIcon} alt="social-login-option-Icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
