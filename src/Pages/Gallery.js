import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import GalleryMain from "../Components/GalleryComponents/GalleryMain";
import galleryBg from "../assets/gallery-topbar-bg.png";
import TopBar from "../Components/TopBar/TopBar";

function Gallery() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
       <TopBar  page={"gallery"} bg={galleryBg}/>
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
