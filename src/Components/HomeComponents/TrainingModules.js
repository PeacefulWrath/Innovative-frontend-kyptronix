import React, { useRef, useLayoutEffect, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import gear from "../../assets/gear.png";
import styles from "../../styles/HomeStyles.module.css";
import gsap from "gsap";
import view from "../../assets/view.png";

function TrainingModules({items}) {
  

  const mainDivRef1 = useRef();
  const tls = useRef([]);
  gsap.defaults({ duration: 0.3 });

  const handleMouseEnter = (ind) => {
    tls.current[ind].play();
  };

  const handleMouseLeave = (ind) => {
    tls.current[ind].reverse();
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".particular_column");
      links.forEach((link) => {
        const q = gsap.utils.selector(link);
        const tl = gsap
          .timeline({ paused: true })
          .to(q(".divRef1a"), {
            ease: "expo.out",
            display: "none",
          })
          .to(q(".mainDivRef1"), {
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.30) 2.79%, rgba(190, 190, 190, 0.30) 40.05%, rgba(255, 255, 255, 0.30) 99.21%)",
            ease: "expo.out",
          })

          .to(q(".divRef1b"), {
            ease: "expo.out",
            display: "unset",
          })

          .to(q(".viewBtnRef1b"), {
            ease: "linear",
            display: "flex",
          })

          .to(q(".mainViewBtnRef1b"), {
            justifyContent: "center",
          });
        tls.current.push(tl);
      });
    }, mainDivRef1);

    return () => {
      tls.current = [];
      ctx.revert();
    };
  }, []);



  return (
    <>
      <div style={divStyle}>
        <div className=" d-flex justify-content-center align-items-center ">
          <button className="btn" style={buttonStyle}>
            Training Modules
          </button>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-3 ">
          <div className={styles.Home_training_modules_para_main}>
            <div className={styles.Home_training_modules_para}>
              Elevate Your Skills with INNOVATIVE Quality Tech Training Modules
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-3 ">
          <div className={styles.Home_training_modules_semi_para_main}>
            <div className={styles.Home_training_modules_semi_para}>
              Unlock Your Potential with Expertly Crafted Training Modules.
            </div>
          </div>
        </div>
       { items&&items.length!==0&&<div className="row  justify-content-center mt-3" ref={mainDivRef1}>
          {items.map((item, index) => (
            <div
              className={`${styles.Home_training_modules_card_main} ms-5 mt-5 col-md-2 particular_column `}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave(index);
              }}
            >
              <div className="p-4">
                <div style={{ display: "unset" }} className="divRef1a">
                  <img
                    className={styles.Home_training_modules_card_logo}
                    src={item?.image}
                    alt="iso"
                  />
                  <div
                    className={`${styles.Home_training_modules_card_title} mt-5`}
                  >
                   {item?.title}
                  </div>
                  <div
                    className={`${styles.Home_training_modules_card_desc} mt-3`}
                  >
                    {item?.description}
                  </div>
                </div>

                <div style={{ display: "none" }} className="divRef1b">
                  <div
                    className={`${styles.Home_training_modules_card_title_anime} mt-3`}
                  >
                    {item?.hover_title}
                  </div>
                  <div
                    className={`${styles.Home_training_modules_card_desc_anime} mt-3`}
                  >
                   {item?.hover_description}
                  </div>

                  <div
                    className={`${styles.Home_training_modules_view_btn} mt-3 mainViewBtnRef1b`}
                  >
                    <div
                      style={{ display: "none" }}
                      className={`${styles.Home_training_modules_view_btn_2nd_div} viewBtnRef1b`}
                    >
                      <div
                        className={styles.Home_training_modules_view_btn_text}
                      >
                        View
                      </div>
                      <img
                        src={view}
                        alt="view"
                        className={styles.Home_training_modules_view_btn_vector}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </>
  );
}

export default TrainingModules;
