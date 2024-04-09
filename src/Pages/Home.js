import React from "react";
import OurMission from "../Components/OurMission";
import OurVision from "../Components/OurVision";
import TrainingModules from "../Components/TrainingModules";
import Testimonials from "../Components/Testimonials";
import OurJourney from "../Components/OurJourney";
import ChooseUs from "../Components/ChooseUs";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <div>
        <OurMission />
      </div>
      <div style={{ marginTop: "3%" }}>
        <OurVision />
      </div>
      <div style={{ marginTop: "10%" }}>
        <TrainingModules />
      </div>
      <div style={{ marginTop: "10%" }}>
        <Testimonials />
      </div>
      <div style={{ marginTop: "10%" }}>
        <OurJourney />
      </div>
      <div style={{ marginTop: "10%" }}>
        <ChooseUs />
      </div>
      <div style={{ marginTop: "10%" }}>
        <Faqs />
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
