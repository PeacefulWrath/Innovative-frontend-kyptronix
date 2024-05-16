import React, { useRef } from "react";
import right from "../../assets/contactus-right.png";
import divider from "../../assets/contactus-divider.png";
import contactus from "../../assets/contactus-btn.png";
import styles from "../../styles/ContactUsStyles.module.css";
import dropdown from "../../assets/dropdown.png";
import PhoneIcon from "../../assets/phoneIcon.png";
import EmailIcon from "../../assets/emailIcon.png";
import gsap from "gsap";

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
  const buttonRef = useRef(null);

  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());

  const handleFirstLMMouseEnter = () => {
    timeline.current.to(buttonRef.current, {
      width: "100%",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef.current, {
      width: "100%",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleFirstLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };
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
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Frist Name..."
                />
              </div>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Last Name..."
                />
              </div>
            </div>

            <div className={styles.Form__firstAndLastInputWrapper}>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Phone Number..."
                />
              </div>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Email ID..."
                />
              </div>
            </div>
            <div className={styles.Form__firstAndLastInputWrapper}>
              <div className={styles.Form__selectWrapper}>
                <select className={styles.Form__selectField}>
                  <option default>Subject</option>
                  <option>Subject</option>
                  <option>Subject</option>
                  <option>Subject</option>
                </select>
              </div>
            </div>
            <div className={styles.Form__textareaWrapper}>
              <textarea
                className={styles.Form__textarea}
                placeholder="Message.."
                rows="5"
              ></textarea>
            </div>

            <div className={styles.Form__BTNWrapper}>
              <button
                ref={buttonRef}
                onMouseEnter={handleFirstLMMouseEnter}
                onMouseLeave={handleFirstLMMouseLeave}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
