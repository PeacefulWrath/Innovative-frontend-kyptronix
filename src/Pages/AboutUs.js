import React, { useEffect,useState } from "react";
import AboutUsPrepare from "../Components/AboutUsComponents/AboutUsPrepare";
import stats from "../assets/stats.png";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import copyright from "../assets/copyright.png";
import aboutusBg from "../assets/aboutus-topbar-bg.png";
import TopBar from "../Components/TopBar/TopBar";
import styles from '../styles/AboutUsStyles.module.css';
import { useNavigate } from "react-router-dom";
import { fetchAboutUs, verifyToken } from "../api-calls/apiCalls";

function AboutUs() {
  const[aboutUs,setAboutUs]=useState(undefined)
 const navigate=useNavigate()

 useEffect(()=>{
    const executer = async () => {
      const aboutUsData = await fetchAboutUs()
      if (aboutUsData?.message === "jwt expired") {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
        return navigate("/login");
      }else if (localStorage.getItem('cart')===null||localStorage.getItem('user_email')===null) {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
        return navigate("/login");
      } else {
        setAboutUs([...aboutUsData])
      }
    }
    executer()
  },[])


  if(aboutUs)
{
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar page={"aboutus"} bg={aboutusBg} />
     { aboutUs&&<AboutUsPrepare dbData={aboutUs}/>}
{/* 
      <div
        style={{
          width: "85%",
          margin: "50px auto",
        }}
        className={styles.Aboutus__quotesWrapper}
      >
        <h1 style={{ color: "white", textAlign: "center", fontSize: "45px" }}>
          {" "}
          &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
          sit amet, consectetur &rdquo;
        </h1>
      </div> */}

      <div className="d-flex justify-content-center mt-5">
        <img
          src={stats}
          alt="stats"
          style={{
            width: "100%",
          }}
        />
      </div>

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
}

export default AboutUs;
