import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/GalleryStyles.module.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import gsap from "gsap";

function GalleryMain() {

  const imgRef1 = useRef(null);

  const divRef1 = useRef(null);

  const timeline1 = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());


  const handle1stMouseEnter = () => {
    timeline1.current.to(imgRef1.current, {
      scale: 1.2,
      ease: "expo.out",
      duration: 1
    });

    timeline1.current.play();

    timeline2.current.to(divRef1.current, {

      display: "unset",

      ease: "expo.out",
      duration: 1
    });

    timeline2.current.play();


  };

  const handle1stMouseLeave = () => {
    timeline2.current.to(divRef1.current, {

      display: "none",


      duration: 1
    });

    timeline2.current.play();

    timeline1.current.reverse()


  };

  const [clicked, setClicked] = useState("Engineering");
  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10%" }}
      >
        <div
          className={`${clicked === "Engineering"
            ? `${styles.Gallery_main_btns_active} `
            : `${styles.Gallery_main_btns}`
            }`}
          onClick={() => {
            handleClick("Engineering");
          }}
        >
          <div
            className={`${clicked === "Engineering"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Engineering
          </div>
        </div>
        <div
          className={`${clicked === "Automations1"
            ? `${styles.Gallery_main_btns_active} `
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations1");
          }}
        >
          <div
            className={`${clicked === "Automations1"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations1
          </div>
        </div>
        <div
          className={`${clicked === "Automations2"
            ? `${styles.Gallery_main_btns_active}  `
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations2");
          }}
        >
          <div
            className={`${clicked === "Automations2"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations2
          </div>
        </div>
        <div
          className={`${clicked === "Automations3"
            ? `${styles.Gallery_main_btns_active}`
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations3");
          }}
        >
          <div
            className={`${clicked === "Automations3"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations3
          </div>
        </div>
      </div>
      {clicked === "Engineering" && (
        <>
          <div
            className={`d-flex justify-content-center ${styles.Gallery__mainWrapperOne}`}
            style={{ marginTop: "10%" }}
          >
            <div className="d-flex">


              <div style={{ display: "inline-flex", flexDirection: "column" }}>
                <div
                  style={{
                    margin: "10px",
                    overflow: 'hidden',
                    flexGrow: 1,
                    borderRadius: '32px'
                  }}
                >
                  <img
                    ref={imgRef1}
                    onMouseEnter={handle1stMouseEnter}
                    onMouseLeave={handle1stMouseLeave}
                    className={`${styles.Gallery_img} `}
                    src={gallery1}
                    alt="g1"
                  />
                </div>
                <div
                  ref={divRef1}
                  style={{
                    marginLeft: "10px",
                    display: "none",
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.53) 42.71%, #000 80.63%)',
                    width: '300px',
                    height: '143px',
                    marginTop: '-47%',
                    borderRadius: "36px",
                    zIndex: 1000
                  }}
                >
                  <div className={`${styles.Gallery_li} ms-3`}>
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery2}
                alt="g2"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery3}
                alt="g3"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery4}
                alt="g4"
              />
            </div>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.Gallery__mainWrapperOne}`}
            style={{ marginTop: "1.5rem" }}
          >
            <div className="d-flex">
              <img
                className={`${styles.Gallery_img} `}
                src={gallery1}
                alt="g1"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery2}
                alt="g2"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery3}
                alt="g3"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery4}
                alt="g4"
              />
            </div>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.Gallery__mainWrapperOne}`}
            style={{ marginTop: "1.5rem" }}
          >
            <div className="d-flex">
              <img
                className={`${styles.Gallery_img} `}
                src={gallery1}
                alt="g1"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery2}
                alt="g2"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery3}
                alt="g3"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery4}
                alt="g4"
              />
            </div>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.Gallery__mainWrapperOne}`}
            style={{ marginTop: "1.5rem" }}
          >
            <div className="d-flex">
              <img
                className={`${styles.Gallery_img} `}
                src={gallery1}
                alt="g1"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery2}
                alt="g2"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery3}
                alt="g3"
              />
              <img
                className={`${styles.Gallery_img}`}
                style={{ marginLeft: "1.5rem" }}
                src={gallery4}
                alt="g4"
              />
            </div>
          </div>

          <GalleryMainTab />
        </>
      )}
    </>
  );
}

export default GalleryMain;

const GalleryMainTab = () => {
  return (
    <>
      <div className={styles.Gallery__mainWrapperTab}>

        {
          ['1', '2', '3', '4', '5', '6', '7', '8'].map((cur, id) => (

            <div className={styles.Gallery__imageWrapper}>
              <img src={gallery1} alt="gallery-pics" />
            </div>
          ))
        }

      </div>
    </>
  )
}
