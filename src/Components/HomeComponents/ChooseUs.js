import React, { useRef, useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cr from "../../assets/cr.png";
import downArrow from "../../assets/down-arrow.png";
import upArrowPNG from "../../assets/up-arrow.png";
import question from "../../assets/question.png";
import gsap from "gsap";
import styles from "../../styles/HomeStyles.module.css";

function ChooseUs({ items }) {
  const [reverse, setReverse] = useState(false);

  const buttonRef3 = useRef(null);
  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  const cusMainDivRef1 = useRef();

  const tls = useRef([]);

  const handleClick = ( ind) => {
    if (reverse==true) {
      tls.current[ind].reverse();
      setReverse(false)
     
    } else {
      tls.current[ind].play();
      setReverse(true)
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".cusParaDiv1");
      links.forEach((link) => {
        const q = gsap.utils.selector(link);
        const tl = gsap
          .timeline({ paused: true })
          .to(q(".cusArrowImgRef"), {
            rotation: 180,
            duration: 0.1,
          })
          .to(q(".cusParaDiv1"), {
            ease: "expo.out",
            display: "inline-flex",
            flexDirection: "column",
            height: "220px",
            duration: 0.1,
          })

          .to(q(".cusParaDiv1Incr"), {
            ease: "expo.out",
            display: "unset",
            duration: 0.1,
          });

        tls.current.push(tl);
      });
    }, cusMainDivRef1);

    return () => {
      tls.current = [];
      ctx.revert();
    };
  }, []);

  const handleLearnMoreMouseEnter = () => {
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

  const handleLearnMoreMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
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
    <div className={`d-flex ${styles.Home_choose_us_mainWrapper}`}>
      <div style={{ marginLeft: "8%" }} className={`${styles.Home_choose_us_contentWrapper}`}>
        <button className="btn" style={buttonStyle}>
          why Choose Us?
        </button>
        <div className={`${styles.Home_choose_us_headingWrapper} mt-3`} style={{ width: "70%" }}>
          <div className={styles.Home_choose_us_para}>
            Explore the Advantages of Choosing Our Exam Preparation Portal
          </div>
        </div>

        <div
          className={`${styles.Home_choose_us_cards_btns} mt-3`}
          ref={cusMainDivRef1}
        >
          {items.map((item, index) => (
            <div
              // ref={cusParaDiv1}
              className={`${styles.Home_choose_us_para_div} cusParaDiv1`}
            >
              <div className={`d-flex ms-2 me-2 ${styles.Home_choose_us_dropDownWrapper}`}>
                <img src={cr} alt="cr" className={styles.Home_choose_us_cr} />
                <p
                  className={`${styles.Home_choose_us_para_2} ms-2 me-2 mt-3 `}
                >
                  {item?.question}
                </p>
                <img
                  onClick={() => {
                    handleClick(index);
                  }}
                  src={downArrow}
                  className={`${styles.Home_choose_us_arrow} cusArrowImgRef`}
                  alt="downArrow"
                />
              </div>

              <div
                // ref={cusParaDiv1Incr}
                className={`ms-2 cusParaDiv1Incr ${styles.Home_choose_us_height_incr_div_text} `}
                style={{ display: "none" }}
              >
                {item?.answer}
              </div>
            </div>
          ))}
        </div>

        <div
          className={styles.Home_choose_us_lm_btn}
          ref={buttonRef3}
          onMouseEnter={handleLearnMoreMouseEnter}
          onMouseLeave={handleLearnMoreMouseLeave}
        >
          <div className={styles.Home_choose_us_lm_text}>learn more</div>
        </div>
      </div>
      <div className={styles.Home_choose_us_question_img}>
        <img alt="questiion" src={question} />
      </div>
    </div>
  );
}

export default ChooseUs;
