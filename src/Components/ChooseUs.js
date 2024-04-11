import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cr from "../assets/cr.png";
import arrow from "../assets/arrow.png";
import question from "../assets/question.png";
import gsap from "gsap";

function ChooseUs() {
  const buttonRef3 = useRef(null);
  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());

  const handleThirdLMMouseEnter = () => {
    timeline.current.to(buttonRef3.current, {
      width: "25%",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef3.current, {
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleThirdLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };
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
            <img src={cr} className="w-10 ms-2" alt="cr" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
              alt="arrow"
            />
          </div>

          <div className="d-flex cus-para-div ">
            <img src={cr} className="w-10 ms-2" alt="cr2" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
              alt="arrow2"
            />
          </div>

          <div className="d-flex cus-para-div ">
            <img src={cr} className="w-10 ms-2" alt="cr3" />
            <p className="ms-2 me-2 mt-3 cus-para-2">
              Extensive Study Resources
            </p>{" "}
            <img
              src={arrow}
              className=" w-10 me-2"
              style={{ cursor: "pointer" }}
              alt="arrow3"
            />
          </div>
        </div>

        <div
          className="cu-lm-btn"
          ref={buttonRef3}
          onMouseEnter={handleThirdLMMouseEnter}
          onMouseLeave={handleThirdLMMouseLeave}
        >
          <p className="cu-lm-text">
            learn more{" "}
            <span>
              {/* <img
                  alt="smarrow"
                  src={smallArrow}
                  style={{
                    width: "1px",
                    height: " 9px",
                    fill: "red",
                  }}
                /> */}
            </span>
          </p>
        </div>
      </div>
      <div className="question-img">
        <img alt="questiion" src={question} />
      </div>
    </div>
  );
}

export default ChooseUs;
