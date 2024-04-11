import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";
import "../styles/HomeStyles.css";
import prev from "../assets/prev.png";
import next from "../assets/next.png";
import gsap from "gsap";

function Testimonials() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  const timeline = useRef(gsap.timeline());

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
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  const handleClick = () => {
    let html1 = img1Ref.current.outerHTML.split(" ");
    let img1Width = "";
    let img1Height = "";

    let html2 = img2Ref.current.outerHTML.split(" ");
    let img2Width = "";
    let img2Height = "";

    let html3 = img3Ref.current.outerHTML.split(" ");
    let img3Width = "";
    let img3Height = "";

    for (let i = 0; i < html1.length; i++) {
      if (html1[i].includes("width")) {
        img1Width = html1[i + 1].substring(0, 3);
        i++;
        // console.log("1", img1Width);
      }
      if (html1[i].includes("height")) {
        img1Height = html1[i + 1].substring(0, 3);
        i++;
        // console.log("1h", img1Height);
      }
    }

    for (let i = 0; i < html2.length; i++) {
      if (html2[i].includes("width")) {
        img2Width = html2[i + 1].substring(0, 3);
        i++;

        // console.log(img2Width);
      }
      if (html2[i].includes("height")) {
        img2Height = html2[i + 1].substring(0, 3);
        i++;
        // console.log(img2Height);
      }
    }

    for (let i = 0; i < html3.length; i++) {
      if (html3[i].includes("width")) {
        img3Width = html3[i + 1].substring(0, 3);
        i++;

        // console.log(img3Width);
      }
      if (html3[i].includes("height")) {
        img3Height = html3[i + 1].substring(0, 3);
        i++;

        // console.log(img3Height);
      }
    }

    if (img3Width === "200" && img3Height === "300") {
      timeline.current.to(img3Ref.current, {
        width: 100,
        height: 100,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
        // duration: 1,
      });

      timeline.current.play();

      timeline.current.to(img1Ref.current, {
        width: 100,
        height: 100,
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img2Ref.current, {
        width: 200,
        height: 300,
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("tmon-para")[0].innerHTML =
        "The platform has completely transformed my exam preparation. It offers a comprehensive range of study materials and practice tests that helped me ace my exams with confidence.";
    } else if (img2Width === "200" && img2Height === "300") {
      timeline.current.to(img2Ref.current, {
        width: "100",
        height: "100",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img3Ref.current, {
        width: "100",
        height: "100",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img1Ref.current, {
        width: "200",
        height: "300",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("tmon-para")[0].innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula sollicitudin dolor, sed hendrerit libero. Nam viverra lorem ac urna tristique scelerisque. Curabitur cursus ligula nisi, sed mattis ante sagittis ut.";
    } else if (img1Width === "200" && img1Height === "300") {
      timeline.current.to(img1Ref.current, {
        width: "100",
        height: "100",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img2Ref.current, {
        width: "100",
        height: "100",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img3Ref.current, {
        width: "200",
        height: "300",
        // ease: "linear",
        // duration: 1,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("tmon-para")[0].innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula sollicitudin dolor, sed hendrerit libero. Nam viverra lorem ac urna tristique scelerisque. Curabitur cursus ligula nisi, sed mattis ante sagittis ut.";
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Testimonials
        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-3 ">
        <div className="testi-para">What our learners have to say?</div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          className="w-50 me-5"
        >
          <img
            ref={img1Ref}
            src={testi1}
            alt="testi1"
            style={{
              width: 100,
              height: 100,
            }}
          />
          <img
            ref={img2Ref}
            src={testi2}
            alt="testi2"
            style={{
              width: 100,
              height: 100,
            }}
            className="ms-2"
          />
          <img
            ref={img3Ref}
            src={testi3}
            alt="testi3"
            style={{
              width: 200,
              height: 300,
            }}
            className="ms-2"
          />
        </div>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            width: "35%",
            marginRight: "20%",
          }}
        >
          <p className="tmon-para">
            The platform has completely transformed my exam preparation. It
            offers a comprehensive range of study materials and practice tests
            that helped me ace my exams with confidence.
          </p>
          <p className="tmon-name">Jasmine Tuker</p>
          <p className="tmon-proff">Student</p>
          <div className="mt-3 d-flex">
            <img
              src={prev}
              alt="prev"
              style={{ cursor: "pointer" }}
              // onClick={() => {
              //   if (testi3Width === 200 && testi3Height === 300) {
              //     setTesti3Height(100);
              //     setTesti3Width(100);
              //     setTesti2Height(300);
              //     setTesti2Width(200);
              //   }
              //   if (testi2Width === 200 && testi2Height === 300) {
              //     setTesti2Height(100);
              //     setTesti2Width(100);
              //     setTesti1Height(300);
              //     setTesti1Width(200);
              //   }
              //   if (testi1Width === 200 && testi1Height === 300) {
              //     setTesti1Height(100);
              //     setTesti1Width(100);
              //     setTesti3Height(300);
              //     setTesti3Width(200);
              //   }
              // }}
              onClick={handleClick}
            />
            <img
              className="ms-5"
              // onClick={() => {
              //   if (testi3Width === 200 && testi3Height === 300) {
              //     setTesti3Height(100);
              //     setTesti3Width(100);
              //     setTesti2Height(300);
              //     setTesti2Width(200);
              //   }
              //   if (testi2Width === 200 && testi2Height === 300) {
              //     setTesti2Height(100);
              //     setTesti2Width(100);
              //     setTesti1Height(300);
              //     setTesti1Width(200);
              //   }
              //   if (testi1Width === 200 && testi1Height === 300) {
              //     setTesti1Height(100);
              //     setTesti1Width(100);
              //     setTesti3Height(300);
              //     setTesti3Width(200);
              //   }
              // }}

              onClick={handleClick}
              src={next}
              alt="next"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
