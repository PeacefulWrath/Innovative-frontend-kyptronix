import React, { useRef, useState, useEffect} from "react";
import right from "../../assets/contactus-right.png";
import divider from "../../assets/contactus-divider.png";
import contactus from "../../assets/contactus-btn.png";
import styles from "../../styles/ContactUsStyles.module.css";
import dropdown from "../../assets/dropdown.png";
import PhoneIcon from "../../assets/phoneIcon.png";
import EmailIcon from "../../assets/emailIcon.png";
import gsap from "gsap";
import emailjs from '@emailjs/browser';

function ContactUsForm() {
 
  useEffect(() => emailjs.init('7tEQNlrYa74GKcgSa'), []);

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")

  const handleSend = async () => {
    // console.log("email",email)
    const serviceId = 'service_twmn4of';
    const customerTemplateId = 'template_9u0ao4f';
    try {
      await emailjs.send(serviceId, customerTemplateId, {
        name: firstName+lastName,
        phone:phone,
        email: email,
        subject:subject,
        message: message
      });
    } catch (error) {
      console.log(error);
    } finally {
      alert('email send successfully');
      window.location.reload();
    }
  };

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
              <input
                className={styles.Contact_us_attr_main}
                // contentEditable="true"
                placeholder="first name"
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
              />
                {/* {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="First Name"
                ></div> */}
              {/* </div> */}
              <input
                className={`${styles.Contact_us_attr_main} ms-3`}
                // contentEditable="true"
                placeholder="last name"
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
              />
                {/* {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Last Name"
                ></div> */}
              {/* </input> */}
            </div>



            <div className="d-flex mt-4">
              <input
                className={styles.Contact_us_attr_main}
                // contentEditable="true"
                placeholder="phone number"
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
              />
                {/* {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Phone Number"
                ></div> */}
              {/* </input> */}
              <input
                className={`${styles.Contact_us_attr_main} ms-3`}
                // contentEditable="true"
                placeholder="email"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
                {/* {" "}
                <div
                  className={styles.Contact_us_attr_container}
                  data-placeholder="Email ID"
                ></div> */}
              {/* </input> */}
            </div>


            <div className="mt-4">
              <select className={styles.Contact_us_sub_main}
               onChange={(e)=>{
                // console.log("999",e.target.value)
                setSubject(e.target.value)
              }}
              
              >
                 <option default>Choose Subject</option>
                 <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                {/* <div
                  className={styles.Contact_us_sub_container}
                  data-placeholder="Subject"
                ></div>
                <img
                  src={dropdown}
                  alt="dropdown"
                  style={{ cursor: "pointer" }}
                /> */}
              </select>
            </div>


            <div className="mt-4">
              <textarea
                className={styles.Contact_us_msg_main}
                // contentEditable="true"
                placeholder="message"
                onChange={(e)=>{
                  setMessage(e.target.value)
                }}
              >
                {/* {" "}
                <div
                  className={styles.Contact_us_msg_container}
                  data-placeholder="Message"
                ></div> */}
              </textarea>
            </div>
            <div></div>
            <div className={styles.Contact_us_submit_div_main} onClick={()=>{handleSend()}}>
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
                  // onChange={(e)=>{
                  //   setFirstName(e.target.value)
                  // }}
                />
              </div>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Last Name..."
                  onChange={(e)=>{
                    // setLastName(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className={styles.Form__firstAndLastInputWrapper}>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Phone Number..."
                  onChange={(e)=>{
                    // setPhone(e.target.value)
                  }}
                />
              </div>
              <div className={styles.Form__inputWrapper}>
                <input
                  className={styles.Form__inputs}
                  type="text"
                  placeholder="Email ID..."
                  onChange={(e)=>{
                    // setEmail(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className={styles.Form__firstAndLastInputWrapper}>
              <div className={styles.Form__selectWrapper}>
                <select className={styles.Form__selectField} onChange={(e)=>{
                  // setSubject(e.target.value)
                }}>
                   <option default>Choose Subject</option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>
              </div>
            </div>
            <div className={styles.Form__textareaWrapper}>
              <textarea
                className={styles.Form__textarea}
                placeholder="Message.."
                rows="5"
                onChange={(e)=>{
                  // setMessage(e.target.value)
                }}
              ></textarea>
            </div>

            <div className={styles.Form__BTNWrapper}>
              <button
                ref={buttonRef}
                onMouseEnter={handleFirstLMMouseEnter}
                onMouseLeave={handleFirstLMMouseLeave}
                onClick={()=>{
                  // handleSend()
                }}
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
