import React, { useEffect, useState } from "react";
import OurServices from "../Components/ServicesComponents/OurServices";
import ServicesList from "../Components/ServicesComponents/ServicesList";
import NewSletter from "../Components/ServicesComponents/NewSletter";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import TopBar from "../Components/TopBar/TopBar";
import servicesBg from "../assets/services-top-bar.png";
import { fetchServices } from "../api-calls/apiCalls";
import { useNavigate } from "react-router-dom";

function Services() {
  
  const [servicesItems,setServicesItems] =useState([])
const navigate=useNavigate()
  useEffect(()=>{
    const fetcher = async () => {
      const servicesData = await fetchServices()

      if (servicesData?.message === "jwt expired"||servicesData?.message ===  "jwt not present") {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
         navigate("/login");
      }else if (localStorage.getItem('cart')===null||localStorage.getItem('user_email')===null) {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
         navigate("/login");
      } else {
      setServicesItems([...servicesData])
      }
     
    }

    fetcher()
  },[])


  if(servicesItems){
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar  page={"services"} bg={servicesBg}/>
      <div style={{ marginTop: "15%" }}>
      <OurServices />
      </div>
       {servicesItems&&servicesItems.length!==0&&<div style={{ marginTop: "10%" }}>
        <ServicesList  items={servicesItems} />
      </div>}
     <div>
        <NewSletter />
      </div>
      <div>
        <ServiceFooter />
      </div> 
    </div>
  )}
}

export default Services;
