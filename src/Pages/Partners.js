import React from "react";
import OurPartners from "../Components/OurPartnersComponents/OurPartners";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import partnerssBg from "../assets/partners-top-bar.png";
import TopBar from "../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { fetchPartners } from "../api-calls/apiCalls";
import { useNavigate } from "react-router-dom";

function Partners() {
  const [partnerItems, setPartnerItems] = useState([])
const navigate=useNavigate()
  useEffect(() => {
    const fetcher = async () => {
      const tempPartnersData = await fetchPartners()

      if (tempPartnersData?.message === "jwt expired") {
        return navigate("/login");
      } else {
      setPartnerItems([...tempPartnersData])
      }



    }
    fetcher()
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar page={"partners"} bg={partnerssBg} />
      <OurPartners partners={partnerItems} />
      <div className="mt-5">
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

export default Partners;
