import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GalleryTopBar from "../Components/GalleryTopBar";
import ServiceFooter from "../Components/ServiceFooter";
import copyright from "../assets/copyright.png";
import GalleryMain from "../Components/GalleryMain";

function Gallery() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <GalleryTopBar />
      <GalleryMain />
      <div style={{ marginTop: "10%" }}>
        <ServiceFooter />
      </div>
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "5%" }}
      >
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

export default Gallery;
