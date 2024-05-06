import React, { useState } from "react";
import Styles from "../styles/RegisterStyles.module.css";
import { Link } from "react-router-dom";

import SingUpBg from "../assets/SignUpBg.png";
import Logo from "../assets/logo-white.png";
import GoogleIcon from "../assets/googleIcon.png";
import FacebookIcon from "../assets/facebookIcon.png";
import LinkedinIcon from "../assets/linkedinIcon.png";
import EyeIcon from "../assets/EyeIcon.png";
import { signUp } from "../api-calls/apiCalls";

export const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordIsNotMatched, setPasswordIsNotMatched] = useState(false)

  const [hideAndShowPass, setHideAndShowPass] = useState(false);
  const [hideAndShowPasswordCom, sethideAndShowPasswordCom] = useState(false);

  const handleClick = (ID) => {


    if (ID === "Password") {
      setHideAndShowPass(!hideAndShowPass);
      setTimeout(() => {
        setHideAndShowPass(false);
      }, 10000);
    } else if (ID === 'PasswordConfirm') {
      sethideAndShowPasswordCom(!hideAndShowPasswordCom);
      setTimeout(() => {
        sethideAndShowPasswordCom(false);
      }, 10000);
    }
  };

  const handleSignUp = async () => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      phone_no: phone,
      email: email,
      role: document.getElementById("role_select").value,
      password: password
    }
    await signUp(userData)
  }

  return (
    <div className={`${Styles.Register__main__div}`}>
      <div
        style={{
          background: `url(${SingUpBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${Styles.Register__rgt__Wrapper}`}
      >
        <div className={`${Styles.Register__rgt__LogoAndTitle__Wrapper}`}>
          <img className="" src={Logo} alt="logo-icon" />
          <h1>Welcome to Innovative tech solution limited</h1>
        </div>
      </div>
      <div className={`${Styles.Register__lft__Wrapper}`}>
        <div className={`${Styles.Register__lft__content__wrapper}`}>
          <h2 className={`${Styles.Register__lft__contentTitle}`}>Sign up</h2>
          <p className={`${Styles.Register__lft__cotentPara}`}>
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <div className={`${Styles.Register__lft__form__wrapper}`}>
            <div className={`${Styles.Register__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} />
              </div>
            </div>

            <div className={`${Styles.Register__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Phone Number" onChange={(e) => { setPhone(e.target.value) }} />
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Email ID" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
            </div>

            <div className={`${Styles.Register__lft__selection__Wrapper}`}>
              <div className={`${Styles.Register__lft__select__Wrapper}`}>
                <select id="role_select">
                  <option defaultValue="select role">Select Role</option>
                  <option>User 1</option>
                  <option>User 2</option>
                  <option>User 3</option>
                </select>
              </div>
            </div>

            <div className={`${Styles.Register__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input
                  type={`${hideAndShowPass ? "text" : "password"}`}
                  placeholder="Password"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
                <span
                  onClick={() => handleClick('Password')}
                  className={`${Styles.Login__lft__EyeIcon}`}
                >
                  <img src={EyeIcon} alt="eye-icon" />
                </span>
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input
                  type={`${hideAndShowPasswordCom ? "text" : "password"}`}
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    if (e.target.value !== password) {
                      setPasswordIsNotMatched(true)
                    } else {
                      setPasswordIsNotMatched(false)
                    }
                  }}
                />

                <span
                  onClick={() => handleClick('PasswordConfirm')}
                  className={`${Styles.Login__lft__EyeIcon}`}
                >
                  <img src={EyeIcon} alt="eye-icon" />
                </span>
              </div>

            </div>

            {passwordIsNotMatched == true && <div className="d-flex justify-content-end"><p className={`${Styles.Register__password_is_not_matched}`}>password is not matched</p></div>}

            <button className={`${Styles.Register__lft__SignIn__BTN}`} onClick={() => { handleSignUp() }}>
              Sign up
            </button>
          </div>

          <p className={`${Styles.Register__lft__LoginPara}`}>
            Already have a Account?
            <Link className={`${Styles.Register__lft__Link}`} to="/login">
              Login
            </Link>
          </p>

          <div className={`${Styles.Register__lft__SocialloginOp__wrapper}`}>
            <div className={`${Styles.Register__lft__SoptionPara__wrapper}`}>
              <p className={`${Styles.Register__lft__SoptionPara}`}>
                Or subscribe with
              </p>
            </div>
            <div className={`${Styles.Register__lft__optionIcon__wrapper}`}>
              <span className={`${Styles.Register__lft__IconWrapper}`}>
                <img src={GoogleIcon} alt="social-login-option-Icon" />
              </span>
              <span className={`${Styles.Register__lft__IconWrapper}`}>
                <img src={FacebookIcon} alt="social-login-option-Icon" />
              </span>
              <span className={`${Styles.Register__lft__IconWrapper}`}>
                <img src={LinkedinIcon} alt="social-login-option-Icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
