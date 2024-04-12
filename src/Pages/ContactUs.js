import React from "react";
import ContactUsTopBar from "../Components/ContactUsTopBar";
import ServiceFooter from "../Components/ServiceFooter";
import copyright from "../assets/copyright.png";
import ContactUsForm from "../Components/ContactUsForm";
function ContactUs() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <ContactUsTopBar />
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
