import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import rating from "../assets/rating.png";

function OurProducts() {
  return (
    <>
      <div
        className="d-flex justify-content-center mt-2"
        style={{ textAlign: "center" }}
      >
        <div className="Prod_op-btn">
          <div className="Prod_op-btn-text">Our Products</div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            width: "320px",
            height: "450px",
            border: "2px solid grey",
          }}
          className="ps-2 pe-2 pt-2"
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
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>

        <div
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
          className="ps-2 pe-2 pt-2 ms-3"
        >
          <img width={300} alt="p2" height={300} src={p2} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
        <div
          className="ms-3 ps-2 pe-2 pt-2"
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
        >
          <img width={300} alt="p2" height={300} src={p2} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
        <div
          className="ms-3 ps-2 pe-2 pt-2"
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
        >
          <img width={300} alt="p3" height={300} src={p3} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            width: "320px",
            height: "450px",
            border: "2px solid grey",
          }}
          className="ps-2 pe-2 pt-2"
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
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>

        <div
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
          className="ps-2 pe-2 pt-2 ms-3"
        >
          <img width={300} alt="p2" height={300} src={p2} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
        <div
          className="ms-3 ps-2 pe-2 pt-2"
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
        >
          <img width={300} alt="p2" height={300} src={p2} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
        <div
          className="ms-3 ps-2 pe-2 pt-2"
          style={{ width: "320px", height: "450px", border: "2px solid grey" }}
        >
          <img width={300} alt="p3" height={300} src={p3} />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              marginTop: "4%",
              marginLeft: "2%",
            }}
          >
            <img alt="rating" className="Prod_rating" src={rating} />
            <p className="Prod_name">name</p>
            <p className="Prod_price">
              $20 <span className="Prod_base-price ms-2">$30</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
