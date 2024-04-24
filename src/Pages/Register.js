import React from "react";
import Styles from "../styles/RegisterStyles.module.css";
import SingUpBg from "../assets/SignUpBg.png";
import Logo from "../assets/logo-white.png";

export const Register = () => {
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
                <input type="text" placeholder="First Name" />
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className={`${Styles.Register__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Email ID" />
              </div>
            </div>

            <div className={`${Styles.Register__lft__selection__Wrapper}`}>
              <div className={`${Styles.Register__lft__select__Wrapper}`}>
                <select>
                <option defaultValue='select role'>Select Role</option>
                  <option >User 1</option>
                  <option>User 2</option>
                  <option>User 3</option>
                </select>
              </div>
            </div>

            <div className={`${Styles.Register__lft__inputs__Wrapper}`}>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Password" />
              </div>
              <div className={`${Styles.Register__lft__input_wrapper}`}>
                <input type="text" placeholder="Confirm Password" />
              </div>
            </div>

            <button className={`${Styles.Register__lft__SignIn__BTN}`}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
