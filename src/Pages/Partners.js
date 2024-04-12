import React from "react";
import PartnersTopBar from "../Components/PartnersTopBar";
import OurPartners from "../Components/OurPartners";
import ServiceFooter from "../Components/ServiceFooter";
import copyright from "../assets/copyright.png";

function Partners() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
      <PartnersTopBar />
      <OurPartners />
      <div className="mt-5">
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

export default Partners;
