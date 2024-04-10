import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iso from "../assets/iso.png";
import auto from "../assets/auto.png";
import gear from "../assets/gear.png";
import "../styles/HomeStyles.css";

function TrainingModules() {
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
