import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iso from "../assets/iso.png";
import gear from "../assets/gear.png";
import "../styles/HomeStyles.css";
import auto from "../assets/auto.png";
import vernier from "../assets/vernier.png";
import analyzing from "../assets/analyzing.png";
import gsap from "gsap";


function TrainingModules() {

  const divRef1a = useRef(null);
  const imgRef1a = useRef(null);
  const titleRef1a = useRef(null);
  const descRef1a = useRef(null);

  const divRef1b = useRef(null);
  const timeline = useRef(gsap.timeline());
  const timeline1 = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const timeline3 = useRef(gsap.timeline());

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

  const divStyle = {
    backgroundImage: `url(${gear})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  const handleSecondLMMouseEnter = () => {
  

    timeline1.current.to(imgRef1a.current, {
      ease: "expo.out",
      display:'none',
      duration: 1

    });

    timeline1.current.play();

    timeline2.current.to(titleRef1a.current, {
      ease: "expo.out",
      display:'none',
      duration: 2

    });

    timeline2.current.play();
    
    timeline3.current.to(descRef1a.current, {
      ease: "expo.out",
     display:'none',
      duration: 3

    });

    timeline3.current.play();

divRef1a.current.style.color='white'

  };

  const handleSecondLMMouseLeave = () => {
    timeline1.current.reverse();
    timeline2.current.reverse();
    timeline3.current.reverse();
  };

  return (
    <>
      <div style={divStyle}>
        <div className=" d-flex justify-content-center align-items-center ">
          <button className="btn" style={buttonStyle}>
            Training Modules
          </button>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-3 ">
          <div className="tmod_para_main">
            <div className="tmod_para">Elevate Your Skills with INNOVATIVE Quality Tech Training Modules</div>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-3 ">
          <div className="tmod_semi_para_main">
            <div className="tmod_semi_para">Unlock Your Potential with Expertly Crafted Training Modules.</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">

          <div className="tmod_card_main ms-2"
  ref={divRef1a}
            onMouseEnter={handleSecondLMMouseEnter}
            onMouseLeave={handleSecondLMMouseLeave}

          >

            <div  className="p-4"  style={{
                  

                  border: "2px solid red"
            }}>
              <img
              ref={imgRef1a}
                className="tmod_card_logo"
                src={iso}
                alt="iso"
              />
              <div 
              ref={titleRef1a} className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div 
              ref={descRef1a} className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>

            {/* 
          <div  ref={divRef1b} className="p-4">
            <img
              className="tmod_card_logo"
              src={iso}
              alt="iso"
            />
            <div className="tmod_card_title mt-5">
              Lorem ipsum
            </div>
            <div className="tmod_card_desc mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
            </div>
          </div> */}





          </div>





          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={auto}
                alt="auto"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={analyzing}
                alt="analyzing"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={vernier}
                alt="vernier"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">

          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={iso}
                alt="partner2"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={auto}
                alt="auto"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={analyzing}
                alt="analyzing"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
          <div className="tmod_card_main ms-2">
            {" "}
            <div className="p-4">
              <img
                className="tmod_card_logo"
                src={vernier}
                alt="vernier"
              />
              <div className="tmod_card_title mt-5">
                Lorem ipsum
              </div>
              <div className="tmod_card_desc mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingModules;
