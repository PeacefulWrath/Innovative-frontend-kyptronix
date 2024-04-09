import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import testi1 from "../assets/testi1.png";
// import testi2 from "../assets/testi2.png";
// import testi3 from "../assets/testi3.png";
import "../styles/HomeStyles.css";
import journey from "../assets/journey.png";

function OurJourney() {
  const buttonStyle = {
    borderRadius: "33px",
    background:
      "var(--blue-green-gradient, linear-gradient(92deg, #53B3FA 5.18%, #ABD021 99.12%))",
    color: "#202020",
    fontFamily: "Exo 2",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Our Journey
        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-3 ">
        <div className="testi-para w-50 ">
          Embark on a Seamless Learning Journey with INNOVATIVE Quality Tech
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center m-3 ">
        <img style={{ width: "90%" }} src={journey} alt="journey" />
      </div>
    </div>
  );
}

export default OurJourney;
