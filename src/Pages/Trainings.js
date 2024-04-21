import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import TrainingsProgram from "../Components/TrainingsComponents/TrainingsProgram";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import trainingsBg from "../assets/trainings-top-bar.png";

function Trainings() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
     <TopBar  page={"trainings"} bg={trainingsBg}/>
      <TrainingsProgram />
      <ServiceFooter />
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

export default Trainings;
