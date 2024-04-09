import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iso from "../assets/iso.png";
import auto from "../assets/auto.png";
import gear from "../assets/gear.png";
import "../styles/HomeStyles.css";

function TrainingModules() {
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
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  const divStyle = {
    backgroundImage: `url(${gear})`, // Use the imported image as the background
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    // height: "400px", // Set the height as needed
  };
  // const items = Array.from({ length: 8 }, (_, index) => index + 1); // Generating 16 items for the grid
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Centered Button
        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center">
        <div style={{ width: "50%", textAlign: "center" }} className="mt-5">
          <div className="tm-heading">
            Elevate Your Skills with INNOVATIVE Quality Tech Training Modules
          </div>
        </div>
      </div>

      <div
        style={{
          width: "56%",
          textAlign: "center",
          marginTop: "3%",
          marginLeft: "23%",
          marginBottom: "5%",
        }}
      >
        <div className="unlock">
          Unlock Your Potential with Expertly Crafted Training Modules.
        </div>
      </div>
      <div style={divStyle}>
        <div className="mt-5">
          <div className="row ms-5">
            <div className="col-md-3">
              <img width={250} src={iso} alt="iso" />
            </div>
            <div className="col-md-3">
              <img width={250} src={auto} alt="auto" />
            </div>
            <div className="col-md-3 ">
              <img width={250} src={auto} alt="auto2" />
            </div>
            <div className="col-md-3">
              <img width={250} src={auto} alt="auto3" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row ms-5">
            <div className="col-md-3">
              <img width={250} src={iso} alt="iso" />
            </div>
            <div className="col-md-3">
              <img width={250} src={auto} alt="auto" />
            </div>
            <div className="col-md-3 ">
              <img width={250} src={auto} alt="auto2" />
            </div>
            <div className="col-md-3 ">
              <img width={250} src={auto} alt="auto3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingModules;
