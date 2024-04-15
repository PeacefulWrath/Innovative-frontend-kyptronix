import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../styles/GalleryStyles.module.css";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";

function GalleryMain() {
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
          className={`${
            clicked === "Engineering"
              ? `${styles.Gallery_main_btns_active} `
              : `${styles.Gallery_main_btns}`
          }`}
          onClick={() => {
            handleClick("Engineering");
          }}
        >
          <div
            className={`${
              clicked === "Engineering"
                ? `${styles.Gallery_main_btns_text_active} `
                : `${styles.Gallery_main_btns_text}`
            }`}
          >
            Engineering
          </div>
        </div>
        <div
          className={`${
            clicked === "Automations1"
              ? `${styles.Gallery_main_btns_active} `
              : `${styles.Gallery_main_btns}`
          } ms-5`}
          onClick={() => {
            handleClick("Automations1");
          }}
        >
          <div
            className={`${
              clicked === "Automations1"
                ? `${styles.Gallery_main_btns_text_active} `
                : `${styles.Gallery_main_btns_text}`
            }`}
          >
            Automations1
          </div>
        </div>
        <div
          className={`${
            clicked === "Automations2"
              ? `${styles.Gallery_main_btns_active}  `
              : `${styles.Gallery_main_btns}`
          } ms-5`}
          onClick={() => {
            handleClick("Automations2");
          }}
        >
          <div
            className={`${
              clicked === "Automations2"
                ? `${styles.Gallery_main_btns_text_active} `
                : `${styles.Gallery_main_btns_text}`
            }`}
          >
            Automations2
          </div>
        </div>
        <div
          className={`${
            clicked === "Automations3"
              ? `${styles.Gallery_main_btns_active}`
              : `${styles.Gallery_main_btns}`
          } ms-5`}
          onClick={() => {
            handleClick("Automations3");
          }}
        >
          <div
            className={`${
              clicked === "Automations3"
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
            className="d-flex justify-content-center"
            style={{ marginTop: "10%" }}
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
            className="d-flex justify-content-center"
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
            className="d-flex justify-content-center"
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
            className="d-flex justify-content-center"
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
        </>
      )}
    </>
  );
}

export default GalleryMain;
