import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iso from "../assets/iso.png";
import gear from "../assets/gear.png";
import "../styles/HomeStyles.css";
// import auto from "../assets/auto.png";
// import vernier from "../assets/vernier.png";
// import analyzing from "../assets/analyzing.png";
import gsap from "gsap";
import view from "../assets/view.png";

function TrainingModules() {
  const mainDivRef1 = useRef(null)
  const divRef1a = useRef(null);
  const divRef1b = useRef(null);
  const viewBtnRef1b = useRef(null)
  const mainViewBtnRef1b = useRef(null)


  const mainDivRef2 = useRef(null)
  const divRef2a = useRef(null);
  const divRef2b = useRef(null);
  const viewBtnRef2b = useRef(null)
  const mainViewBtnRef2b = useRef(null)



  const mainDivRef3 = useRef(null)
  const divRef3a = useRef(null);
  const divRef3b = useRef(null);
  const viewBtnRef3b = useRef(null)
  const mainViewBtnRef3b = useRef(null)


  const mainDivRef4 = useRef(null)
  const divRef4a = useRef(null);
  const divRef4b = useRef(null);
  const viewBtnRef4b = useRef(null)
  const mainViewBtnRef4b = useRef(null)




  const mainDivRef5 = useRef(null)
  const divRef5a = useRef(null);
  const divRef5b = useRef(null);
  const viewBtnRef5b = useRef(null)
  const mainViewBtnRef5b = useRef(null)


  const mainDivRef6 = useRef(null)
  const divRef6a = useRef(null);
  const divRef6b = useRef(null);
  const viewBtnRef6b = useRef(null)
  const mainViewBtnRef6b = useRef(null)


  const mainDivRef7 = useRef(null)
  const divRef7a = useRef(null);
  const divRef7b = useRef(null);
  const viewBtnRef7b = useRef(null)
  const mainViewBtnRef7b = useRef(null)



  const mainDivRef8 = useRef(null)
  const divRef8a = useRef(null);
  const divRef8b = useRef(null);
  const viewBtnRef8b = useRef(null)
  const mainViewBtnRef8b = useRef(null)

  const timeline1 = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const timeline3 = useRef(gsap.timeline());
  const timeline4 = useRef(gsap.timeline());
  const timeline5 = useRef(gsap.timeline());
  const timeline6 = useRef(gsap.timeline());
  const timeline7 = useRef(gsap.timeline());
  const timeline8 = useRef(gsap.timeline());

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

  const handle1stMouseEnter = () => {


    timeline1.current.to(divRef1a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline1.current.play();


    timeline1.current.to(mainDivRef1.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline1.current.play();


    timeline1.current.to(divRef1b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline1.current.play();

    timeline1.current.to(viewBtnRef1b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline1.current.play();


    timeline1.current.to(mainViewBtnRef1b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline1.current.play();
  };

  const handle1stMouseLeave = () => {
    timeline1.current.reverse();
  };



  const handle2ndMouseEnter = () => {


    timeline2.current.to(divRef2a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline2.current.play();


    timeline2.current.to(mainDivRef2.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline2.current.play();


    timeline2.current.to(divRef2b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline2.current.play();

    timeline2.current.to(viewBtnRef2b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline2.current.play();


    timeline2.current.to(mainViewBtnRef2b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline2.current.play();
  };

  const handle2ndMouseLeave = () => {
    timeline2.current.reverse();
  };


  const handle3rdMouseEnter = () => {


    timeline3.current.to(divRef3a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline3.current.play();


    timeline3.current.to(mainDivRef3.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline3.current.play();


    timeline3.current.to(divRef3b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline3.current.play();

    timeline3.current.to(viewBtnRef3b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline3.current.play();


    timeline3.current.to(mainViewBtnRef3b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline3.current.play();
  };

  const handle3rdMouseLeave = () => {
    timeline3.current.reverse();
  };


  const handle4thMouseEnter = () => {


    timeline4.current.to(divRef4a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline4.current.play();


    timeline4.current.to(mainDivRef4.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline4.current.play();


    timeline4.current.to(divRef4b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline4.current.play();

    timeline4.current.to(viewBtnRef4b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline4.current.play();


    timeline4.current.to(mainViewBtnRef4b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline4.current.play();
  };

  const handle4thMouseLeave = () => {
    timeline4.current.reverse();
  };


  const handle5thMouseEnter = () => {


    timeline5.current.to(divRef5a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline5.current.play();


    timeline5.current.to(mainDivRef5.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline5.current.play();


    timeline5.current.to(divRef5b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline5.current.play();

    timeline5.current.to(viewBtnRef5b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline5.current.play();


    timeline5.current.to(mainViewBtnRef5b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline5.current.play();
  };

  const handle5thMouseLeave = () => {
    timeline5.current.reverse();
  };



  const handle6thMouseEnter = () => {


    timeline6.current.to(divRef6a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline6.current.play();


    timeline6.current.to(mainDivRef6.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline6.current.play();


    timeline6.current.to(divRef6b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline6.current.play();

    timeline6.current.to(viewBtnRef6b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline6.current.play();


    timeline6.current.to(mainViewBtnRef6b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline6.current.play();
  };

  const handle6thMouseLeave = () => {
    timeline6.current.reverse();
  };






  const handle7thMouseEnter = () => {


    timeline7.current.to(divRef7a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline7.current.play();


    timeline7.current.to(mainDivRef7.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline7.current.play();


    timeline7.current.to(divRef7b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline7.current.play();

    timeline7.current.to(viewBtnRef7b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline7.current.play();


    timeline7.current.to(mainViewBtnRef7b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline7.current.play();
  };

  const handle7thMouseLeave = () => {
    timeline7.current.reverse();
  };






  const handle8thMouseEnter = () => {


    timeline8.current.to(divRef8a.current, {
      ease: "expo.out",
      display: 'none',
      duration: 1

    });

    timeline8.current.play();


    timeline8.current.to(mainDivRef8.current, {

      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)',
      ease: "expo.out",

      duration: 0.1
    })
    timeline8.current.play();


    timeline8.current.to(divRef8b.current, {
      ease: "expo.out",
      display: 'unset',
      duration: 0.1

    });

    timeline8.current.play();

    timeline8.current.to(viewBtnRef8b.current, {
      ease: "linear",
      display: 'flex',
      duration: 0.1

    });

    timeline8.current.play();


    timeline8.current.to(mainViewBtnRef8b.current, {
      justifyContent: "center",
      duration: 0.1
    });

    timeline8.current.play();
  };

  const handle8thMouseLeave = () => {
    timeline8.current.reverse();
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
            ref={mainDivRef1}
            onMouseEnter={() => { handle1stMouseEnter() }}
            onMouseLeave={() => { handle1stMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef1a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef1b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef1b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef1b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>

          <div className="tmod_card_main ms-2"
            ref={mainDivRef2}
            onMouseEnter={() => { handle2ndMouseEnter() }}
            onMouseLeave={() => { handle2ndMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef2a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef2b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef2b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef2b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>

          <div className="tmod_card_main ms-2"
            ref={mainDivRef3}
            onMouseEnter={() => { handle3rdMouseEnter() }}
            onMouseLeave={() => { handle3rdMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef3a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef3b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef3b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef3b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>

          <div className="tmod_card_main ms-2"
            ref={mainDivRef4}
            onMouseEnter={() => { handle4thMouseEnter() }}
            onMouseLeave={() => { handle4thMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef4a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef4b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef4b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef4b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>








        </div>
        <div className="d-flex justify-content-center mt-5">

          <div className="tmod_card_main ms-2"
            ref={mainDivRef5}
            onMouseEnter={() => { handle5thMouseEnter() }}
            onMouseLeave={() => { handle5thMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef5a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef5b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef5b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef5b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>


          <div className="tmod_card_main ms-2"
            ref={mainDivRef6}
            onMouseEnter={() => { handle6thMouseEnter() }}
            onMouseLeave={() => { handle6thMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef6a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef6b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef6b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef6b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>


          <div className="tmod_card_main ms-2"
            ref={mainDivRef7}
            onMouseEnter={() => { handle7thMouseEnter() }}
            onMouseLeave={() => { handle7thMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef7a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef7b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef7b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef7b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>


          <div className="tmod_card_main ms-2"
            ref={mainDivRef8}
            onMouseEnter={() => { handle8thMouseEnter() }}
            onMouseLeave={() => { handle8thMouseLeave() }}
          >

            <div className="p-4">

              <div style={{ display: 'unset' }} ref={divRef8a}>
                <img

                  className="tmod_card_logo"
                  src={iso}
                  alt="iso"
                />
                <div

                  className="tmod_card_title mt-5">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>
              </div>





              <div style={{ display: 'none' }} ref={divRef8b}>
                <div

                  className="tmod_card_title_anime mt-3">
                  Lorem ipsum
                </div>
                <div

                  className="tmod_card_desc_anime mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae elementum dui. Praesent tincidunt pretium urna.
                </div>

                <div className="tmod_view_btn mt-3" ref={mainViewBtnRef8b}>
                  <div style={{ display: 'none' }} ref={viewBtnRef8b} className="tmod_view_btn_2nd_div ">
                    <div className="tmod_view_btn_text">
                      View
                    </div>
                    <img src={view} alt="view" className="tmod_view_btn_vector" />
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingModules;
