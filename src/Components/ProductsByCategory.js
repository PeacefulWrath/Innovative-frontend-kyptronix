import React from "react";
import by1 from "../assets/by1.png";
import by2 from "../assets/by2.png";
import by3 from "../assets/by3.png";
import by4 from "../assets/by4.png";

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
        <img width={300} alt="by1" height={300} src={by1} />
        <img width={300} alt="by2" height={300} src={by2} className="ms-5" />
        <img width={300} alt="by3" height={300} src={by3} className="ms-5" />
        <img width={300} alt="by4" height={300} src={by4} className="ms-5" />
      </div>
    </div>
  );
}

export default ProductsByCategory;
