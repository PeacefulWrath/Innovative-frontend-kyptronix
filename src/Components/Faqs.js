import React, { useRef,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/HomeStyles.css";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import gsap from "gsap";

function Faqs() {
  const buttonRef4 = useRef(null);
  const faqsParaDiv1 = useRef(null)
  const faqsParaDiv1Incr = useRef(null)
  const faqsParaDiv2 = useRef(null)
  const faqsParaDiv2Incr = useRef(null)
  const faqsParaDiv3 = useRef(null)
  const faqsParaDiv3Incr = useRef(null)


  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const timeline3 = useRef(gsap.timeline());
  const timeline4 = useRef(gsap.timeline());
  const timeline5 = useRef(gsap.timeline());
  const timeline6 = useRef(gsap.timeline());
  const timeline7 = useRef(gsap.timeline());
  const timeline8 = useRef(gsap.timeline());


  const [minus1, setMinus1] = useState(false)

  const [minus2, setMinus2] = useState(false)

  const [minus3, setMinus3] = useState(false)




  const handle1stMouseEnter = () => {
   

    timeline3.current.to(faqsParaDiv1.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '100px',
      duration: 1

    });
    timeline3.current.play();


    timeline4.current.to(faqsParaDiv1Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline4.current.play();
  }

  const handle1stMouseLeave = () => {

    timeline4.current.reverse();
    timeline3.current.reverse();
    
  };


  const handle2ndMouseEnter = () => {
   

    timeline5.current.to(faqsParaDiv2.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '100px',
      duration: 1

    });
    timeline5.current.play();


    timeline6.current.to(faqsParaDiv2Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline6.current.play();
  }

  const handle2ndMouseLeave = () => {

    timeline6.current.reverse();
    timeline5.current.reverse();
    
  };

  const handle3rdMouseEnter = () => {
   

    timeline7.current.to(faqsParaDiv3.current, {
      ease: "expo.out",
      display: 'inline-flex',
      flexDirection: 'column',
      height: '100px',
      duration: 1

    });
    timeline7.current.play();


    timeline8.current.to(faqsParaDiv3Incr.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 1

    });
    timeline8.current.play();
  }

  const handle3rdMouseLeave = () => {

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

  const handleFourthLMMouseEnter = () => {
    timeline.current.to(buttonRef4.current, {
      width: "160px",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef4.current, {
      width: "160px",
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




        <div  style={{ height:"unset"}}ref={faqsParaDiv1}>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          {minus1 === false ? <img
                onClick={() => {
                  setMinus1(!minus1);
                  handle1stMouseEnter()
                }}
                src={plus}
                
                className="faq-plus"
                alt="plus"
              /> : <img
                onClick={() => {
                  setMinus1(!minus1);
                  handle1stMouseLeave()

                }}
                src={minus}
              
                className="faq-plus"
                alt="minus"
              />}
        </div>
        <div ref={faqsParaDiv1Incr} className="faqs_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
        </div>
        
        


        <div  style={{ height:"unset"}}ref={faqsParaDiv2}>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          {minus2 === false ? <img
                onClick={() => {
                  setMinus2(!minus2);
                  handle2ndMouseEnter()
                }}
                src={plus}
                
                className="faq-plus"
                alt="plus"
              /> : <img
                onClick={() => {
                  setMinus2(!minus2);
                  handle2ndMouseLeave()

                }}
                src={minus}
              
                className="faq-plus"
                alt="minus"
              />}
        </div>
        <div ref={faqsParaDiv2Incr} className="faqs_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
        </div>


        <div  style={{ height:"unset"}}ref={faqsParaDiv3}>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          {minus3 === false ? <img
                onClick={() => {
                  setMinus3(!minus3);
                  handle3rdMouseEnter()
                }}
                src={plus}
                
                className="faq-plus"
                alt="plus"
              /> : <img
                onClick={() => {
                  setMinus3(!minus3);
                  handle3rdMouseLeave()

                }}
                src={minus}
              
                className="faq-plus"
                alt="minus"
              />}
        </div>
        <div ref={faqsParaDiv3Incr} className="faqs_height_incr_div_text" style={{display:'none'}} >Access a wide array of study materials including practice exams, guides, and interactive quizzes.</div>
        </div>







     
    


      </div>
    </div>
  );
}

export default Faqs;
