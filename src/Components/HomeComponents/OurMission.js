import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/HomeStyles.module.css";
import mission from "../../assets/mission.png";
import shadow from "../../assets/shadow.png";
import gsap from "gsap";
import { useNavigate  } from 'react-router-dom';


function OurMission() {
  const navigate = useNavigate ();
  const buttonRef = useRef(null);

  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());

  const handleFirstLMMouseEnter = () => {
    timeline.current.to(buttonRef.current, {
      width: "160px",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef.current, {
      width: "160px",
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
    <>

      <div className={styles.Home_our_mission_btn}>
        <p className={styles.Home_our_mission_text}>Our Mission</p>
      </div>

      <div className="d-flex">
        <div className={styles.Home_our_mission_div}>
          <div className={`${styles.Home_our_mission_heading} mt-3`}>
            Empower Your Learning Journey with INNOVATIVE Quality Tech Limited
          </div>
          <div className={styles.Home_our_mission_main}>
            Step into a world where exam preparation meets innovation. Our
            cutting-edge platform redefines the learning experience, offering
            comprehensive resources and a user-friendly interface to help you
            achieve your goals effectively. Welcome to the future of education.
          </div>
          <div
            className={styles.Home_our_mission_learn_more_btn}
            ref={buttonRef}
            onMouseEnter={handleFirstLMMouseEnter}
            onMouseLeave={handleFirstLMMouseLeave}
          >
            <p className={styles.Home_our_mission_learn_more_text}>
              learn more
            </p>
          </div>
        </div>

        <div className={styles.Home_our_mission_img}>
          <div className={styles.Home_our_mission_main_image_bg}> </div>
          <div style={{ marginTop: "-415px" }}>
            <img
              className={styles.Home_our_mission_main_image}
              src={mission}
              alt="mission"
            />
            <img className={styles.Home_our_mission_shadow} src={shadow} alt="shadow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
