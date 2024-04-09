import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cr from "../assets/cr.png";
import arrow from "../assets/arrow.png";
import question from "../assets/question.png";

function ChooseUs() {
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
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  return (
    <div className="d-flex">
      <div style={{ marginLeft: "100px" }}>
        <button className="btn" style={buttonStyle}>
          why Choose Us?
        </button>
        <div className="mt-3" style={{ width: "70%" }}>
          <div className="cus-para">
            Explore the Advantages of Choosing Our Exam Preparation Portal
          </div>
        </div>

        <div className="cus-cards-btns mt-3">
          <div className="d-flex cus-para-div ">
            <img src={cr} className="w-10 ms-2" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="d-flex cus-para-div ">
            <img src={cr} className="w-10 ms-2" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="d-flex cus-para-div ">
            <img src={cr} className="w-10 ms-2" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="mt-3 lm-div">
          <button
            className="lm-btn"
            style={{
              borderRadius: "32px",
              background: "unset",
              borderColor: "white",
            }}
          >
            lear more
          </button>
        </div>
      </div>
      <div className="question-img">
        <img src={question} />
      </div>
    </div>
  );
}

export default ChooseUs;
