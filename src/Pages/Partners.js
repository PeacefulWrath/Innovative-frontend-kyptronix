import React from "react";
import OurPartners from "../Components/OurPartnersComponents/OurPartners";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import partnerssBg from "../assets/partners-top-bar.png";
import TopBar from "../Components/TopBar/TopBar";

function Partners() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
       <TopBar  page={"partners"} bg={partnerssBg}/>
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
