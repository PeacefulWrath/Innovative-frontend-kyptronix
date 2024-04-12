import React from "react";
import AboutUsTopBar from "../Components/AboutUsTopBar";
import AboutUsPrepare from "../Components/AboutUsPrepare";
import stats from "../assets/stats.png";
import ServiceFooter from "../Components/ServiceFooter";
import copyright from "../assets/copyright.png";
function AboutUs() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <AboutUsTopBar />
      <AboutUsPrepare />
      <div className="d-flex justify-content-center mt-5">
        <img
          src={stats}
          alt="stats"
          style={{
            width: "100%",
          }}
        />
      </div>

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

export default AboutUs;
