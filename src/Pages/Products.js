import React from "react";
import "../styles/ProductsStyles.css";
import ProductsTopBar from "../Components/ProductsTopBar";
import ProductsByCategory from "../Components/ProductsByCategory";
import ServiceFooter from "../Components/ServiceFooter";
import OurProducts from "../Components/OurProducts";
import Discover from "../Components/Discover";

function Products() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <ProductsTopBar />
      <ProductsByCategory />
      <div style={{ marginTop: "3%" }}>
        <OurProducts />
      </div>
      <div style={{ marginTop: "3%" }}>
        <Discover />
      </div>
      <div style={{ marginTop: "3%" }}>
        <ServiceFooter />
      </div>
    </div>
  );
}

export default Products;
