import React from "react";
import right from "../../assets/contactus-right.png";
import divider from "../../assets/contactus-divider.png";
import contactus from "../../assets/contactus-btn.png";
import styles from "../../styles/ContactUsStyles.module.css";
import dropdown from "../../assets/dropdown.png";
import PhoneIcon from "../../assets/phoneIcon.png";
import EmailIcon from "../../assets/emailIcon.png";

function ContactUsForm() {
  return (
    <>
      <div
        className={`d-flex mt-5 justify-content-center ${styles.ContactusForm__mainWrapper}`}
      >
        <div className={styles.Contact_us_form_left_part}>
          <div className="d-flex " style={{ justifyContent: "flex-start" }}>
            {" "}
            <img src={contactus} className="contactus" alt="contactus" />
          </div>
          <p className={styles.Contact_us_left_part_para}>
            Let’s gvet in touch
          </p>
          <div style={{ width: "80%" }}>
            <div className={styles.Contact_us_left_part_desc}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done
            </div>
          </div>

          <div className={styles.Contact_us_form}>
            <div className="d-flex">
              <div
                className={styles.Contact_us_attr_main}
                contentEditable="true"
              >
                {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="First Name"
                ></div>
              </div>
              <div
                className={`${styles.Contact_us_attr_main} ms-3`}
                contentEditable="true"
              >
                {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Last Name"
                ></div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <div
                className={styles.Contact_us_attr_main}
                contentEditable="true"
              >
                {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Phone Number"
                ></div>
              </div>
              <div
                className={`${styles.Contact_us_attr_main} ms-3`}
                contentEditable="true"
              >
                {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Email ID"
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <div className={styles.Contact_us_sub_main}>
                <div
                  className={styles.Contact_us_sub_container}
                  data-placeholder="Subject"
                ></div>
                <img
                  src={dropdown}
                  alt="dropdown"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="mt-4">
              <div
                className={styles.Contact_us_msg_main}
                contentEditable="true"
              >
                {" "}
                <div
                  className={styles.Contact_us_msg_container}
                  data-placeholder="Message"
                ></div>
              </div>
            </div>
            <div></div>
            <div className={styles.Contact_us_submit_div_main}>
              <div className={styles.Contact_us_submit_text}>Submit</div>
            </div>
          </div>
        </div>
        <img
          src={divider}
          className="divider"
          style={{ height: "20%" }}
          alt="divider"
        />
        <img
          src={right}
          alt="right"
          className="right ms-5"
          style={{ width: "30%", height: "70%" }}
        />
      </div>
      <ContactUsFormTab />
    </>
  );
}

export default ContactUsForm;

const ContactUsFormTab = () => {
  return (
    <>
      <div className={styles.ContactUsForm__mainWrapperTab}>
        <div className={styles.ContactUsForm__smallHeadingWrapper}>
          <h2>Contact Us</h2>
        </div>

        <div className={styles.ContactUsForm__topContainerWrapper}>
          <div className={styles.ContactUsForm__topContainerMainContentWrapper}>
            <h2 className={styles.CallUsText}>Call Us</h2>
            <p className={styles.callus__para}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done
            </p>
            <div className={styles.callus__iconAndNumberWrapper}>
              <span>
                <img src={PhoneIcon} alt="phone-icon" />
              </span>
              <a
                className={styles.CallUs__NumberLink}
                href="tel:+1-323-453-5817"
              >
                +1-323-453-5817
              </a>
            </div>
          </div>
          <div className={styles.ContactUsForm__topContainerMainContentWrapper}>
            <h2 className={styles.CallUsText}>Email</h2>
            <p className={styles.callus__para}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done
            </p>
            <div className={styles.callus__iconAndNumberWrapper}>
              <span>
                <img src={EmailIcon} alt="email-icon" />
              </span>
              <a
                className={styles.CallUs__NumberLink}
                href="mailto:Example@gmail.com"
              >
                Example@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.ContactUsForm__mainFormWrapper}>
            <h2 className={styles.FormWrapper__heading}>Let’s get in touch</h2>
            <p className={styles.FormWrapper__para}>
              Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Done .
            </p>
          </div>
          <div>
            <div className={styles.Form__firstAndLastInputWrapper}>
              <div className={styles.Form__inputWrapper}>
                <input type="text" placeholder="Frist Name..." />
              </div>
              <div className={styles.Form__inputWrapper}>
                <input type="text" placeholder="Last Name..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
