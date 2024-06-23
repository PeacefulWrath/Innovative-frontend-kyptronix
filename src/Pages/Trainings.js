import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar/TopBar";
import TrainingsProgram from "../Components/TrainingsComponents/TrainingsProgram";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import trainingsBg from "../assets/trainings-top-bar.png";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api-calls/apiCalls";

function Trainings() {
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
        navigate("/login");
      } 
     }
     verifier()
   },[])

   
  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
     <TopBar  page={"trainings"} bg={trainingsBg}/>
      <TrainingsProgram />
      <ServiceFooter />
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

export default Trainings;
