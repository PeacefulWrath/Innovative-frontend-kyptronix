import React from "react";
import by1 from "../assets/by1.png";
// import by2 from "../assets/by2.png";
// import by3 from "../assets/by3.png";
// import by4 from "../assets/by4.png";

import ProductImg2 from "../assets/productImg2.png";
import ProductImg3 from "../assets/ProductImg3.png";
import ProductImg4 from "../assets/ProductImg4.png";

function ProductsByCategory() {
  return (
    <div className="mt-2">
      <div className="Prod_bcat-btn">
        <p className="Prod_bcat-text">By Catagory</p>
      </div>
      <div
        className="d-flex justify-content-center mt-5"
        style={{
          marginLeft: "1rem",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "24px",
          }}
          className="ProductsByCategory__imgWrapper"
        >
          <div className="ProductsByCategory__TextWrapperMain">
            <div className="ProductsByCategory__TextWrapper">
              <h2>Text Here...</h2>
            </div>
          </div>
          <div className="ProductsByCategory__topLayer" />
          <img alt="by1" src={by1} style={{ width: "100%", height: "100%" }} />
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "24px",
          }}
          className="ProductsByCategory__imgWrapper ms-5"
        >
        <div className="ProductsByCategory__TextWrapperMain">
            <div className="ProductsByCategory__TextWrapper">
              <h2>Text Here...</h2>
            </div>
          </div>
          <div className="ProductsByCategory__topLayer" />

          <img
            alt="by2"
            style={{ height: "100%", width: "100%" }}
            src={ProductImg2}
            className=""
          />
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "24px",
          }}
          className="ProductsByCategory__imgWrapper ms-5"
        >
        <div className="ProductsByCategory__TextWrapperMain">
            <div className="ProductsByCategory__TextWrapper">
              <h2>Text Here...</h2>
            </div>
          </div>
          <div className="ProductsByCategory__topLayer" />

          <img
            style={{ height: "100%", width: "100%" }}
            alt="by3"
            src={ProductImg3}
            className=""
          />
        </div>

        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "24px",
          }}
          className="ProductsByCategory__imgWrapper ms-5"
        >
        <div className="ProductsByCategory__TextWrapperMain">
            <div className="ProductsByCategory__TextWrapper">
              <h2>Text Here...</h2>
            </div>
          </div>
          <div className="ProductsByCategory__topLayer" />

          <img
            style={{ height: "100%", width: "100%" }}
            alt="by3"
            src={ProductImg4}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsByCategory;
