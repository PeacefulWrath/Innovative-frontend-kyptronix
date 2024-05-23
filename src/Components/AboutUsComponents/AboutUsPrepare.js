import React, { useRef } from "react";
import aboutUsGroup from "../../assets/aboutUsGroup.png";
import about from "../../assets/about.png";
import text from "../../assets/text.png";
import gsap from "gsap";
import styles from "../../styles/AboutUsStyles.module.css";
import AboutusBg from "../../assets/AboutusBg.png";
import AboutusImg1 from "../../assets/AboutusImg1.png";
import AboutusImg2 from "../../assets/AboutusImg2.png";

function AboutUsPrepare({ dbData }) {
  // console.log(dbData)
  const buttonRef = useRef(null);

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
    <>
      <div
        className={`d-flex mt-5 justify-content-center ${styles.Aboutus__mainWrapper}`}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            marginTop: "8%",
          }}
        >
          {/* <img src={about} alt="about" style={{ width: "25%" }} />
          <img src={text} alt="text" className="mt-5" /> */}
           <h2  style={{color:"white"}}>
              {dbData[0]?.title}
            </h2>
            <p  style={{color:"white"}}>
              {dbData[0]?.description}
            </p>
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

      <AboutUsPrepareTab tDbData={dbData[0]} />
    </>
  );
}

export default AboutUsPrepare;

const AboutUsPrepareTab = ({ tDbData }) => {
  // console.log("91", tDbData)
  const buttonRef = useRef(null);

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

  if (tDbData) {
    return (
      <>
        <div className={styles.AboutUsPrepare__mainWrapperTab}>
          <div className={styles.AboutUsPrepare__contentMainWrapperTab}>
            <div className={styles.AboutUsPrepare__contentSubTitleWrapper}>
              <p>About Us</p>
            </div>
            <h2 className={styles.AboutUsPrepare__contentTitle} style={{color:"white"}}>
              {tDbData?.title}
            </h2>
            <p className={styles.AboutUsPrepare__contentPara} style={{color:"white"}}>
              {tDbData?.description}
            </p>
            <button
              onMouseEnter={handleFirstLMMouseEnter}
              onMouseLeave={handleFirstLMMouseLeave}
              ref={buttonRef}
              className={styles.AboutUsPrepare__learnMoreBTN}
            >
              Learn More
            </button>
          </div>
          <div className={styles.AboutUsPrepare__imageWrapper}>
            <img
              className={styles.AboutUsPrepare__BgImage}
              src={AboutusBg}
              alt="aboutus-bg"
            />
            <div className={styles.AboutUsPrepare__twoImageWrapper}>
              <img
                className={styles.AboutUsPrepare__imageOne}
                alt="imageOne"
                src={AboutusImg1}
              />
              <img
                className={styles.AboutUsPrepare__imageTwo}
                alt="imageTwo"
                src={AboutusImg2}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
};
