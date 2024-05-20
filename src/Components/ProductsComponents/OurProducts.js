import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import rating from "../../assets/rating.png";
import styles from "../../styles/ProductsStyles.module.css";
import { useNavigate } from "react-router-dom";



function OurProducts({ categoryId, products }) {
  const navigate=useNavigate()
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
      {categoryId ?
        (<div className="d-flex mt-5"
          style={{
            marginLeft: "15rem",
          }}>
          {products.map((prod, index) => (
            <>
              {prod?.category?._id === categoryId &&
                <div
                  style={{
                    width: "320px",
                    height: "450px",
                    border: "2px solid grey",
                  }}
                  className={`ps-2 pe-2 pt-2 ${styles.Products_our_products_Product__hoverEffect}`}
                  onClick={()=>{navigate("/product-details",{state:prod})}}
                >
                  <img width={300} alt="p1" height={300} src={prod?.image} />
                  <div
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      marginTop: "4%",
                      marginLeft: "2%",
                    }}
                  >
                    <img alt="rating" className={styles.Products_our_products_rating} src={rating} />
                    <p className={styles.Products_our_products_name}>{prod?.name}</p>
                    <p className={styles.Products_our_products_price}>
                      {`$${prod?.discounted_price}`}<span className={`${styles.Products_our_products_base_price} ms-2`}>{`$${prod?.real_price}`}</span>
                    </p>
                  </div>
                </div>


              }
            </>
          ))}
        </div>) :
        <div className="d-flex mt-5"
          style={{
            marginLeft: "15rem",
          }}>
          {products.map((prod, index) => (
            <div
              style={{
                width: "320px",
                height: "450px",
                marginLeft: index !== 0 ? "5rem" : "0px",
                cursor: "pointer"
              }}
              className={`ps-2 pe-2 pt-2 ${styles.Products_our_products_Product__hoverEffect}`}
              onClick={()=>{navigate("/product-details",{state:prod})}}
            >
              <img width={300} alt="p1" height={300} src={prod?.image} />
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  marginTop: "4%",
                  marginLeft: "2%",
                }}
              >
                <img alt="rating" className={styles.Products_our_products_rating} src={rating} />
                <p className={styles.Products_our_products_name}>{prod?.name}</p>
                <p className={styles.Products_our_products_price}>
                  {`$${prod?.discounted_price}`}<span className={`${styles.Products_our_products_base_price} ms-2`}>{`$${prod?.real_price}`}</span>
                </p>
              </div>
            </div>
          ))}
        </div>}
    </>
  );
}

export default OurProducts;
