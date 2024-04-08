import React from "react";
import OurMission from "../Components/OurMission";
import OurVision from "../Components/OurVision";
import TrainingModules from "../Components/TrainingModules";

function Home() {
  return (
    <div
      style={{
        height: "1000px",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <div style={{ marginBottom: "144px" }}>
        <OurMission />
      </div>
      <div style={{ marginBottom: "144px" }}>
        <OurVision />
      </div>
      <TrainingModules />
    </div>
  );
}

export default Home;
