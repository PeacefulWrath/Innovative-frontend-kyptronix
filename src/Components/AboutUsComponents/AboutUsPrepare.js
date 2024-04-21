import React, { useRef } from "react";
import aboutUsGroup from "../../assets/aboutUsGroup.png";
import about from "../../assets/about.png";
import text from "../../assets/text.png";
import gsap from "gsap";
import styles from "../../styles/AboutUsStyles.module.css";

function AboutUsPrepare() {
  const buttonRef = useRef(null);

  // const buttonRef4 = useRef(null);

  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());

  const handleFirstLMMouseEnter = () => {
    timeline.current.to(buttonRef.current, {
      width: "30%",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef.current, {
      width: "30%",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleFirstLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };
  return (
    <div className="d-flex mt-5 justify-content-center">
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          marginTop: "8%",
        }}
      >
        <img src={about} alt="about" style={{ width: "25%" }} />
        <img src={text} alt="text" className="mt-5" />
        <div
          className={styles.Aboutus_learn_more_btn}
          ref={buttonRef}
          onMouseEnter={handleFirstLMMouseEnter}
          onMouseLeave={handleFirstLMMouseLeave}
        >
          <p className={styles.Aboutus_learn_more_text}>
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
      <img
        src={aboutUsGroup}
        alt="aboutUsGroup"
        className=" ms-2"
        style={{ width: "45%" }}
      />
    </div>
  );
}

export default AboutUsPrepare;
