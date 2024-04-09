import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";
import "../styles/HomeStyles.css";

function Testimonials() {
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
  const [testi1Height, setTesti1Height] = useState(100);
  const [testi2Height, setTesti2Height] = useState(200);
  const [testi3Height, setTesti3Height] = useState(300);

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Testimonials
        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-3 ">
        <div className="testi-para">What our learners have to say?</div>
      </div>
      <div className="d-flex">
        <img height={testi1Height} src={testi1} />
        <img height={testi2Height} src={testi2} />
        <img height={testi3Height} src={testi3} />
        <button className="ms-5 btn h-50 btn-primary">prev</button>
        <button
          className="ms-5 btn h-50 btn-primary"
          onClick={() => {
            setTesti1Height(300);
            setTesti2Height(100);
            setTesti3Height(100);
          }}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Testimonials;
