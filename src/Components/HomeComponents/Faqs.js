import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/HomeStyles.module.css";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import gsap from "gsap";

function Faqs({ items, tempFaqs }) {
  const buttonRef4 = useRef(null);
  const faqMainDivRef1 = useRef();
  const [clickedFaqs, setClickedFaqs] = useState(tempFaqs);

  const tls = useRef([]);
  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());


  const handlePlusClick = (ind) => {

    let tempFaqs=clickedFaqs

    tempFaqs[ind].sign="minus"

    setClickedFaqs([...tempFaqs])

    tls.current[ind].play();
  };

  const handleMinusClick = (ind) => {
    let tempFaqs=clickedFaqs

    tempFaqs[ind].sign="plus"

    setClickedFaqs([...tempFaqs])
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
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  const handleLearnMoreMouseEnter = () => {
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

  const handleLearnMoreMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".faqParaDiv1");
      links.forEach((link) => {
        const q = gsap.utils.selector(link);
        const tl = gsap
          .timeline({ paused: true })
          .to(q(".faqParaDiv1"), {
            ease: "expo.out",
            display: "inline-flex",
            flexDirection: "column",
            height: "5%",
            duration: 0.1,
          })
          .to(q(".faqParaDiv1Incr"), {
            ease: "expo.out",
            display: "unset",
            duration: 0.1,
          });

        tls.current.push(tl);
      });
    }, faqMainDivRef1);

    return () => {
      tls.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <div
      className={`d-flex ${styles.Home_faq_mainWrapper}`}
      style={{
        justifyContent: "space-between",
        marginLeft: "7%",
        marginRight: "7%",
      }}
    >
      <div className={styles.Home_faq_mainContentWrapper}>
        <button className="btn" style={buttonStyle}>
          Faqs
        </button>
        <div style={{ width: "80%" }} className="mt-3">
          <div className={styles.Home_faq_para}>What people have to ask?</div>
        </div>
        <div
          className={styles.Home_faq_lm_btn}
          ref={buttonRef4}
          onMouseEnter={handleLearnMoreMouseEnter}
          onMouseLeave={handleLearnMoreMouseLeave}
        >
          <p className={styles.Home_faq_text}>learn more</p>
        </div>
      </div>

      <div className={styles.Home_faq_all_ques} ref={faqMainDivRef1}>
        {items.map((item, ind) => (
          <div style={{ height: "unset" }} className="faqParaDiv1">
            <div className={styles.Home_faq_question}>
              <p className={styles.Home_faq_text}>{item?.question}</p>
              {console.log(clickedFaqs)}
              {clickedFaqs[ind]?.sign== "plus" ? (
                <img
                  onClick={() => {
                    
                    handlePlusClick(ind);
                  }}
                  src={plus}
                  className={`${styles.Home_faq_plus}`}
                  alt="plus"
                />
              ):(
                <img
                  onClick={() => {
                    handleMinusClick(ind);
                  }}
                  src={minus}
                  className={`${styles.Home_faq_plus}`}
                  alt="minus"
                />
              )}

            </div>
            <div
              className={`${styles.Home_faq_height_incr_div_text} faqParaDiv1Incr`}
              style={{ display: "none" }}
            >
              {item?.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
