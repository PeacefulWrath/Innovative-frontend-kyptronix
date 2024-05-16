import React, { useRef } from "react";
import aboutUsGroup from "../../assets/aboutUsGroup.png";
import about from "../../assets/about.png";
import text from "../../assets/text.png";
import gsap from "gsap";
import styles from "../../styles/AboutUsStyles.module.css";
import AboutusBg from "../../assets/AboutusBg.png";
import AboutusImg1 from "../../assets/AboutusImg1.png";
import AboutusImg2 from "../../assets/AboutusImg2.png";
function AboutUsPrepare() {
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

      {/* <AboutUsPrepareTab /> */}
    </>
  );
}

export default AboutUsPrepare;

// const AboutUsPrepareTab = () => {
//   const buttonRef = useRef(null);

//   const timeline = useRef(gsap.timeline());
//   const timeline2 = useRef(gsap.timeline());

//   const handleFirstLMMouseEnter = () => {
//     timeline.current.to(buttonRef.current, {
//       width: "30%",
//       ease: "linear",
//       duration: 1,
//     });

//     timeline.current.play();

//     timeline2.current.to(buttonRef.current, {
//       width: "30%",
//       background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
//       duration: 1,
//     });
//     timeline2.current.play();
//   };

//   const handleFirstLMMouseLeave = () => {
//     timeline.current.reverse();
//     timeline2.current.reverse();
//   };
//   return (
//     <>
//       <div className={styles.AboutUsPrepare__mainWrapperTab}>
//         <div className={styles.AboutUsPrepare__contentMainWrapperTab}>
//           <div className={styles.AboutUsPrepare__contentSubTitleWrapper}>
//             <p>About Us</p>
//           </div>
//           <h2 className={styles.AboutUsPrepare__contentTitle}>
//             Prepare for Exams with Us on your side!
//           </h2>
//           <p className={styles.AboutUsPrepare__contentPara}>
//             At INNOVATIVE Quality Tech Limited, we understand the challenges
//             students face when preparing for exams. That's why our platform
//             combines cutting-edge technology with expertly crafted content to
//             provide tailored study solutions for each individual. Whether you're
//             a high school student tackling standardized tests or a professional
//             seeking certification, our platform adapts to your needs, offering
//             interactive lessons, practice exams, and personalized feedback to
//             maximize your learning potential. Join the thousands of satisfied
//             users who have experienced the difference with our innovative
//             approach to exam preparation. With us, success is not just a goal,
//             but a guarantee.
//           </p>
//           <button
//             onMouseEnter={handleFirstLMMouseEnter}
//             onMouseLeave={handleFirstLMMouseLeave}
//             ref={buttonRef}
//             className={styles.AboutUsPrepare__learnMoreBTN}
//           >
//             Learn More
//           </button>
//         </div>
//         <div className={styles.AboutUsPrepare__imageWrapper}>
//           <img
//             className={styles.AboutUsPrepare__BgImage}
//             src={AboutusBg}
//             alt="aboutus-bg"
//           />
//           <div className={styles.AboutUsPrepare__twoImageWrapper}>
//             <img
//               className={styles.AboutUsPrepare__imageOne}
//               alt="imageOne"
//               src={AboutusImg1}
//             />
//             <img
//               className={styles.AboutUsPrepare__imageTwo}
//               alt="imageTwo"
//               src={AboutusImg2}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
