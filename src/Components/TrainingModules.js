import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iso from "../assets/iso.png";
import auto from "../assets/auto.png";

function TrainingModules() {
  const buttonStyle = {
    borderRadius: "33px",
    background:
      "var(--blue-green-gradient, linear-gradient(92deg, #53B3FA 5.18%, #ABD021 99.12%))",
    color: "#202020",
    fontFamily: "Exo 2",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  const cardStyle = {
    borderRadius: "16px",
    border: "1.5px solid #FFF",
    backdropFilter: "blur(5px)",
  };
  const items = Array.from({ length: 8 }, (_, index) => index + 1); // Generating 16 items for the grid
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Centered Button
        </button>
      </div>
      <div className="mt-5 container">
        <div className="row justify-content-center">
          {/* {items.map((item, index) => ( */}
          <div className="col-md-2 mb-3">
            <img width={200} src={iso} />
          </div>
          <div className="col-md-3 mb-3">
            <img width={200} src={auto} />
          </div>
          <div className="col-sm-3 mb-3">
            <img width={200} src={auto} />
          </div>
          <div className="col-sm-3 mb-3">
            <img width={200} src={auto} />
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className="mt-5 container">
        <div className="row justify-content-center">
          {/* {items.map((item, index) => ( */}
          <div className="col-sm-3 mb-3">
            <img width={200} src={iso} />
          </div>
          <div className="col-sm-3 mb-3">
            <img width={200} src={auto} />
          </div>
          <div className="col-sm-3 mb-3">
            <img width={200} src={auto} />
          </div>
          <div className="col-sm-3 mb-3">
            <img width={200} src={auto} />
          </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
}

export default TrainingModules;
