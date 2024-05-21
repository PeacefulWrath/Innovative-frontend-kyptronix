import React, { useEffect,createContext } from "react";
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
import Cart from "./Pages/Cart";
import ProductDetails from "./Components/ProductsComponents/ProductDetails";
import { GlobalProvider } from "./context/globalContext";

function App() {



  return (
    <GlobalProvider>
     
    
   
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/trainings" element={<Trainings />} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/" element={<Register />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
     
      </GlobalProvider>
  );
}

export default App;
