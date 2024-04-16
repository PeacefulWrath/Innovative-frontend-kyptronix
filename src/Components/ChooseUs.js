import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cr from "../assets/cr.png";
import downArrow from "../assets/down-arrow.png";
import upArrowPNG from "../assets/up-arrow.png";
import question from "../assets/question.png";
import gsap from "gsap";

function ChooseUs() {
  const buttonRef3 = useRef(null);
  const cusParaDiv1 = useRef(null)
  const cusParaDiv1Incr = useRef(null)
  const cusParaDiv2 = useRef(null)
  const cusParaDiv2Incr = useRef(null)
  const cusParaDiv3 = useRef(null)
  const cusParaDiv3Incr = useRef(null)


  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const timeline3 = useRef(gsap.timeline());
  const timeline4 = useRef(gsap.timeline());
  const timeline5 = useRef(gsap.timeline());
  const timeline6 = useRef(gsap.timeline());
  const timeline7 = useRef(gsap.timeline());
  const timeline8 = useRef(gsap.timeline());


  const [upArrow1, setUpArrow1] = useState(false)
  const [upArrow2, setUpArrow2] = useState(false)
  const [upArrow3, setUpArrow3] = useState(false)

  const handleThirdLMMouseEnter = () => {
    timeline.current.to(buttonRef3.current, {
      width: "160px",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef3.current, {
      width: "160px",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleThirdLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };

  const handleCusParaMouseEnter = () => {
   

    timeline3.current.to(cusParaDiv1.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '220px',
      duration: 1

    });
    timeline3.current.play();


    timeline4.current.to(cusParaDiv1Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline4.current.play();
  }

  const handleCusParaMouseLeave = () => {

    timeline4.current.reverse();
    timeline3.current.reverse();
    
  };

  const handle2ndCusParaMouseEnter = () => {
   

    timeline5.current.to(cusParaDiv2.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '220px',
      duration: 1

    });
    timeline5.current.play();


    timeline6.current.to(cusParaDiv2Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline6.current.play();
  }

  const handle2ndCusParaMouseLeave = () => {

    timeline6.current.reverse();
    timeline5.current.reverse();
    
  };

  const handle3rdCusParaMouseEnter = () => {
   

    timeline7.current.to(cusParaDiv3.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '220px',
      duration: 1

    });
    timeline7.current.play();


    timeline8.current.to(cusParaDiv3Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline8.current.play();
  }

  const handle3rdCusParaMouseLeave = () => {

    timeline8.current.reverse();
    timeline7.current.reverse();
    
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

          <div
            ref={cusParaDiv1}
            className="cus-para-div">

            <div className="d-flex ms-2 me-2" >
              <img src={cr}  alt="cr" style={{
                    width: '32px',
                    height: '32px',
                    marginTop: '12px'
                
                
              }} />
              <p className="ms-2 me-2 mt-3 cus-para-2">
                Extensive Study Resources
              </p>
              {upArrow1 === false ? <img
                onClick={() => {
                  setUpArrow1(!upArrow1);
                  handleCusParaMouseEnter()
                }}
                src={downArrow}
                
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px', cursor: "pointer" }}
                alt="downArrow"
              /> : <img
                onClick={() => {
                  setUpArrow1(!upArrow1);
                  handleCusParaMouseLeave()

                }}
                src={upArrowPNG}
              
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px',cursor: "pointer" }}
                alt="upArrow"
              />}

            </div>
            <div ref={cusParaDiv1Incr} className="ms-2 cus_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
          </div>


          <div
            ref={cusParaDiv2}
            className="cus-para-div">

            <div className="d-flex ms-2 me-2" >
              <img src={cr}  alt="cr" style={{
                    width: '32px',
                    height: '32px',
                    marginTop: '12px'
                
                
              }} />
              <p className="ms-2 me-2 mt-3 cus-para-2">
                Extensive Study Resources
              </p>
              {upArrow2 === false ? <img
                onClick={() => {
                  setUpArrow2(!upArrow2);
                  handle2ndCusParaMouseEnter()
                }}
                src={downArrow}
                
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px', cursor: "pointer" }}
                alt="downArrow"
              /> : <img
                onClick={() => {
                  setUpArrow2(!upArrow2);
                  handle2ndCusParaMouseLeave()

                }}
                src={upArrowPNG}
              
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px',cursor: "pointer" }}
                alt="upArrow"
              />}

            </div>
            <div ref={cusParaDiv2Incr} className="ms-2 cus_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
          </div>
         
          <div
            ref={cusParaDiv3}
            className="cus-para-div">

            <div className="d-flex ms-2 me-2" >
              <img src={cr}  alt="cr" style={{
                    width: '32px',
                    height: '32px',
                    marginTop: '12px'
                
                
              }} />
              <p className="ms-2 me-2 mt-3 cus-para-2">
                Extensive Study Resources
              </p>
              {upArrow3 === false ? <img
                onClick={() => {
                  setUpArrow3(!upArrow3);
                  handle3rdCusParaMouseEnter()
                }}
                src={downArrow}
                
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px', cursor: "pointer" }}
                alt="downArrow"
              /> : <img
                onClick={() => {
                  setUpArrow3(!upArrow3);
                  handle3rdCusParaMouseLeave()

                }}
                src={upArrowPNG}
              
                style={{ width: '16px',
                height: '16px',
                marginTop: '20px',cursor: "pointer" }}
                alt="upArrow"
              />}

            </div>
            <div ref={cusParaDiv3Incr} className="ms-2 cus_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
          </div>
        </div>

        <div
          className="cu-lm-btn"
          ref={buttonRef3}
          onMouseEnter={handleThirdLMMouseEnter}
          onMouseLeave={handleThirdLMMouseLeave}
        >
          <div className="cu-lm-text">
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
          </div>
        </div>
      </div>
      <div className="question-img">
        <img alt="questiion" src={question} />
      </div>
    </div>
  );
}

export default ChooseUs;
