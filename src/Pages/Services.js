import React from "react";
import OurServices from "../Components/ServicesComponents/OurServices";
import TrainingModules from "../Components/HomeComponents/TrainingModules";
import NewSletter from "../Components/ServicesComponents/NewSletter";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import TopBar from "../Components/TopBar/TopBar";
import servicesBg from "../assets/services-top-bar.png";
import iso from "../assets/iso.png";

function Services() {
  
  const traininingModulesItems = [
    {
      image: iso,
      title: "hi",
      description: "redddy",
      hoverTitle: "hello",
      hoverDesc: "go redddy",
    },

    {
      image: iso,
      title: "hi",
      description: "redddy",
      hoverTitle: "hello",
      hoverDesc: "go redddy",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar  page={"services"} bg={servicesBg}/>
      <div style={{ marginTop: "15%" }}>
      <OurServices />
      </div>
       <div style={{ marginTop: "10%" }}>
        <TrainingModules  items={traininingModulesItems} />
      </div>
     <div>
        <NewSletter />
      </div>
      <div>
        <ServiceFooter />
      </div> 
    </div>
  );
}

export default Services;
