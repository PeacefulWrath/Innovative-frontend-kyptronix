import React, { useState } from "react";
import styles from "../../styles/ProductsStyles.module.css";
import OurProducts from "../../Components/ProductsComponents/OurProducts";

function ProductsByCategory({ categories, products }) {
  const [categoryId, setCategoryId] = useState(undefined)
  return (
    <>
      <div className="mt-0">
        <div className={styles.Products_ProductsByCategory_btn}>
          <p className={styles.Products_ProductsByCategory_text}>By Catagory</p>
        </div>
        <div
          className="d-flex mt-5"
          style={{
            marginLeft: "15rem",
          }}
        >
          {categories.map((item, index) => (

            <div
              style={{
                width: "15rem",
                height: "15rem",
                marginLeft: index !== 0 ? "5rem" : "0px",
                cursor: "pointer"
              }}
              className={styles.Products_ProductsByCategory__imgWrapper}
              onClick={() => { setCategoryId(item?._id) }}
            >
              <div className={styles.Products_ProductsByCategory__TextWrapperMain}>
                <div className={styles.Products_ProductsByCategory__TextWrapper}>
                  <h2>{item?.name}</h2>
                </div>
              </div>
              <div className={styles.Products_ProductsByCategory__topLayer} />
              <img alt="by1" src={item?.image} style={{ width: "100%", height: "100%", borderRadius: "1rem" }} />
            </div>

          ))}
        </div>
      </div>

      <div style={{ marginTop: "5%" }}>
        <OurProducts categoryId={categoryId} products={products} />
      </div>
    </>
  );
}

export default ProductsByCategory;
