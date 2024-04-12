import React from "react";
import TrainingsTopBar from "../Components/TrainingsTopBar";
import TrainingsProgram from "../Components/TrainingsProgram";
import ServiceFooter from "../Components/ServiceFooter";
import copyright from "../assets/copyright.png";

function Trainings() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
      <TrainingsTopBar />
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
