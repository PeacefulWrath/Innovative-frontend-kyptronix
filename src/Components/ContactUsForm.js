import React from "react";
import right from "../assets/contactus-right.png";
import divider from "../assets/contactus-divider.png";
import contactus from "../assets/contactus-btn.png";
import styles from "../styles/ContactUsStyles.module.css";
import dropdown from "../assets/dropdown.png";

function ContactUsForm() {
  return (
    <div className="d-flex mt-5 justify-content-center">
      <div className={styles.Contact_us_form_left_part}>
        <div className="d-flex " style={{ justifyContent: "flex-start" }}>
          {" "}
          <img src={contactus} className="contactus" alt="contactus" />
        </div>
        <p className={styles.Contact_us_left_part_para}>Let’s gvet in touch</p>
        <div style={{ width: "80%" }}>
          <div className={styles.Contact_us_left_part_desc}>
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </div>
        </div>

        <div className={styles.Contact_us_form}>
          <div className="d-flex">
            <div className={styles.Contact_us_attr_main} contentEditable="true">
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
            <div className={styles.Contact_us_attr_main} contentEditable="true">
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
            <div className={styles.Contact_us_msg_main} contentEditable="true">
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
  );
}

export default ContactUsForm;
