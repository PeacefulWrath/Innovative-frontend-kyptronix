import React from "react";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import ContactUsForm from "../Components/ContactUsComponents/ContactUsForm";
import TopBar from "../Components/TopBar/TopBar";
import contactusBg from "../assets/contactus-topbar-bg.png";

function ContactUs() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
  
       <TopBar  page={"contactus"} bg={contactusBg}/>
      <ContactUsForm />
      <div style={{ marginTop: "9%" }}>
        <ServiceFooter />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img
          alt="copyright"
          src={copyright}
          style={{
            width: "70%",
          }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
