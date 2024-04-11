import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import telescope from "../assets/telescope.png";
import teleShad from "../assets/tele-shad-1.png";
import "../styles/HomeStyles.css";
import gsap from "gsap";

function OurVision() {
  const buttonRef2 = useRef(null);
  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const handleSecondLMMouseEnter = () => {
    timeline.current.to(buttonRef2.current, {
      width: "25%",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef2.current, {
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleSecondLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };
  return (
    <>
      <div className="our-vision-btn">
        <p className="our-vision-text">Our Vision</p>
      </div>

      <div className="our-vision-div">
        <div className="our-vision-heading mt-3">
          Pioneering Seamless Learning Excellence
        </div>
        <div className="our-vision-main">
          At INNOVATIVE Quality Tech Limited, we envision a future where
          education seamlessly integrates with technology, fostering inclusivity
          and empowering individuals worldwide to unlock their full potential.
          Our commitment to innovation and excellence drives us to redefine
          educational standards, inspiring lifelong learners prepared to shape a
          brighter tomorrow.
        </div>
        <div
          className="our-vision-learn-more-btn"
          ref={buttonRef2}
          onMouseEnter={handleSecondLMMouseEnter}
          onMouseLeave={handleSecondLMMouseLeave}
        >
          <p className="our-vision-learn-more-text">learn more</p>
        </div>
      </div>

      <div style={{ marginTop: "544px" }}>
        <div className="our-vision-img">
          <div className="our-vision-main-image-bg"> </div>
          {/* <div style={{ marginTop: "-415px" }}> */}
          <img className="our-vision-main-image" src={telescope} alt="tele" />

          {/* </div> */}
        </div>

        <img className="tele-shad-1" src={teleShad} alt="shad1" />
        <img className="tele-shad-2" src={teleShad} alt="shad2" />
        <img className="tele-shad-3" src={teleShad} alt="shad3" />
      </div>
    </>
  );
}

export default OurVision;
