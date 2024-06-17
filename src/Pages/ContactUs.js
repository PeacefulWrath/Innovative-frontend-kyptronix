import React, { useEffect, useState } from "react";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import ContactUsForm from "../Components/ContactUsComponents/ContactUsForm";
import TopBar from "../Components/TopBar/TopBar";
import contactusBg from "../assets/contactus-topbar-bg.png";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api-calls/apiCalls";

function ContactUs() {
  const navigate=useNavigate()

  useEffect(()=>{
     const verifier = async () => {
       const verifiedTokenData = await verifyToken()
       if (verifiedTokenData?.message == "jwt expired"||verifiedTokenData?.message ===  "jwt not present") {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
         navigate("/login")
       } else if (localStorage.getItem('cart')===null||localStorage.getItem('user_email')===null) {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
        return navigate("/login");
      }
     }
     verifier()
   },[])

   
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
  
       <TopBar  page={"contactus"} bg={contactusBg}/>
      <ContactUsForm />
      <div style={{ marginTop: "9%" }}>
        <ServiceFooter />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img
          alt="copyright"
          src={copyright}
          style={{
            width: "70%",
          }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
