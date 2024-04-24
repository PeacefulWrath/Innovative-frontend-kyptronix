import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Trainings from "./Pages/Trainings";
import Partners from "./Pages/Partners";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/trainings" element={<Trainings />} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
