import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/HomeStyles.css";
import plus from "../assets/plus.png";
import gsap from "gsap";

function Faqs() {
  const buttonRef4 = useRef(null);

  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
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

  const handleFourthLMMouseEnter = () => {
    timeline.current.to(buttonRef4.current, {
      width: "45%",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef4.current, {
      width: "45%",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleFourthLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };

  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "space-between",
        marginLeft: "7%",
        marginRight: "7%",
      }}
    >
      <div
      // style={{ marginLeft: "100px" }}
      >
        <button className="btn" style={buttonStyle}>
          Faqs
        </button>
        <div style={{ width: "80%" }} className="mt-3">
          <div className="faqs-para">What people have to ask?</div>
        </div>
        {/* <div className="mt-3 lm-div">
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
        </div> */}

        <div
          className="faq-lm-btn"
          ref={buttonRef4}
          onMouseEnter={handleFourthLMMouseEnter}
          onMouseLeave={handleFourthLMMouseLeave}
        >
          <p className="faq-lm-text">
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

      <div className="faqs-all-ques">
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus2" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus3" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
