import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
