import React from "react";
import by1 from "../../assets/by1.png";
import ProductImg2 from "../../assets/productImg2.png";
import ProductImg3 from "../../assets/ProductImg3.png";
import ProductImg4 from "../../assets/ProductImg4.png";
import styles from "../../styles/ProductsStyles.module.css";

function ProductsByCategory() {
  return (
    <div className="mt-2">
      <div className={styles.Products_ProductsByCategory_btn}>
        <p className={styles.Products_ProductsByCategory_text }>By Catagory</p>
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
          className={styles.Products_ProductsByCategory__imgWrapper }
        >
          <div className={styles.Products_ProductsByCategory__TextWrapperMain}>
            <div className={styles.Products_ProductsByCategory__TextWrapper }>
              <h2>Text Here...</h2>
            </div>
          </div>
          <div className={styles.Products_ProductsByCategory__topLayer }/>
          <img alt="by1" src={by1} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductsByCategory;
