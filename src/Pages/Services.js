import React from "react";
import ServicesTopBar from "../Components/ServicesTopBar";
import OurServices from "../Components/OurServices";
import TrainingModules from "../Components/TrainingModules";
import NewSletter from "../Components/NewSletter";
import ServiceFooter from "../Components/ServiceFooter";

function Services() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <ServicesTopBar />
      <OurServices />
      <div style={{ marginTop: "10%" }}>
        <TrainingModules />
      </div>
      <div style={{ marginTop: "3%" }}>
        <NewSletter />
      </div>
      <div style={{ marginTop: "3%" }}>
        <ServiceFooter />
      </div>
    </div>
  );
}

export default Services;
