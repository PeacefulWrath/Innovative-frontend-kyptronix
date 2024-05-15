import React from "react";
import AboutUsPrepare from "../Components/AboutUsComponents/AboutUsPrepare";
import stats from "../assets/stats.png";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import aboutusBg from "../assets/aboutus-topbar-bg.png";
import TopBar from "../Components/TopBar/TopBar";
import styles from '../styles/AboutUsStyles.module.css';

function AboutUs() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar page={"aboutus"} bg={aboutusBg} />
      <AboutUsPrepare />

      <div
        style={{
          width: "85%",
          margin: "50px auto",
        }}
        className={styles.Aboutus__quotesWrapper}
      >
        <h1 style={{ color: "white", textAlign: "center", fontSize: "45px" }}>
          {" "}
          &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
          sit amet, consectetur &rdquo;
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <img
          src={stats}
          alt="stats"
          style={{
            width: "100%",
          }}
        />
      </div>

      <div className="mt-5">
        <ServiceFooter />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img
          alt="copyright"
          src={copyright}
          style={{
            width: "70%",
          }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
