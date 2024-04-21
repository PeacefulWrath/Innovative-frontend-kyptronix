import React from "react";
import ProductsByCategory from "../Components/ProductsComponents/ProductsByCategory";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import OurProducts from "../Components/ProductsComponents/OurProducts";
import Discover from "../Components/ProductsComponents/Discover";
import TopBar from "../Components/TopBar/TopBar";
import productsBg from "../assets/products-top-bar.png";

function Products() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
     <TopBar  page={"products"} bg={productsBg}/>
     <ProductsByCategory />
     <div style={{ marginTop: "5%" }}>
        <OurProducts />
     </div>
          <div style={{ marginTop: "5%" }}>
        <Discover />
      </div>
      <div style={{ marginTop: "5%" }}>
        <ServiceFooter />
      </div>
    </div>
  );
}

export default Products;
