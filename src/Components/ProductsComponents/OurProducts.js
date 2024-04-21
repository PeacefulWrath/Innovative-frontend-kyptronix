import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import rating from "../../assets/rating.png";
import styles from "../../styles/ProductsStyles.module.css";

function OurProducts() {
  return (
    <>
      <div
        className="d-flex justify-content-center mt-2"
        style={{ textAlign: "center" }}
      >
        <div className={styles.Products_our_products_btn}>
          <div className={styles.Products_our_products_btn_text}>Our Products</div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            width: "320px",
            height: "450px",
            border: "2px solid grey",
          }}
          className={`ps-2 pe-2 pt-2 ${styles.Products_our_products_Product__hoverEffect}`}
        >
          <img width={300} alt="p1" height={300} src={p1} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",              
            }}
          >
            <img alt="rating" className={styles.Products_our_products_rating } src={rating} />
            <p className={styles.Products_our_products_name}>name</p>
            <p className={styles.Products_our_products_price}>
              $20 <span className={`${styles.Products_our_products_base_price} ms-2`}>$30</span>
            </p>
          </div>
        </div>

       
      </div>

    
    </>
  );
}

export default OurProducts;
