import React, { useState,useEffect } from "react";
import OurMission from "../Components/HomeComponents/OurMission";
import OurVision from "../Components/HomeComponents/OurVision";
import TrainingModules from "../Components/HomeComponents/TrainingModules";
import Testimonials from "../Components/HomeComponents/Testimonials";
import OurJourney from "../Components/HomeComponents/OurJourney";
import ChooseUs from "../Components/HomeComponents/ChooseUs";
import Faqs from "../Components/HomeComponents/Faqs";
import Footer from "../Components/HomeComponents/Footer";
import iso from "../assets/iso.png";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";
import TopBar from "../Components/TopBar/TopBar";
import Styles from '../styles/HomeStyles.module.css'


function Home() {

  const[faqs,setFaqs]=useState([])

 

  const traininingModulesItems = [
    {
      image: iso,
      title: "hi",
      description: "redddy",
      hoverTitle: "hello",
      hoverDesc: "go redddy",
    },

    {
      image: iso,
      title: "hi",
      description: "redddy",
      hoverTitle: "hello",
      hoverDesc: "go redddy",
    },
  ];


  const testimonialsItems = [
    {
      image: testi1,
      description: "desc1",
      profession: "student",
      name: "digantaleena",
    },
    {
      image: testi2,
      description: "The platform has completely transformed my exam preparation. It offers a comprehensive range of study materials and practice tests that helped me ace my exams with confidence.",
      profession: "student",
      name: "rima",
    },
    {
      image: testi3,
      description: "The platform has completely transformed my exam preparation. It offers a comprehensive range of study materials and practice tests that helped me ace my exams with confidence.",
      profession: "student",
      name: "rajesh",
    },
  ];

  const chooseUsItems=[

    {
      question:"how are you",
      answer:"good"
    },
    {
      question:"how are you",
      answer:"bad"
    },
    {
      question:"how are you",
      answer:"red"
    }
  ]

  useEffect(() => {
    let tempFaqs = [];
    chooseUsItems.forEach((item) => {
      tempFaqs.push({sign: "plus"});
    });
    setFaqs([...tempFaqs]);
  },[]);
  

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <div>
        <TopBar page={"home"}/>
      </div>
      <div className={Styles.Home__heroSec} style={{ marginTop: "10%" }}>
        <OurMission />
      </div>
      <div>
        <OurVision />
      </div>
      <div style={{ marginTop: "10%" }}>
        <TrainingModules  items={traininingModulesItems}/>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Testimonials items={testimonialsItems} />
      </div>
       <div style={{ marginTop: "10%" }}>
        <OurJourney />
      </div>
      <div style={{ marginTop: "10%" }}>
        <ChooseUs  items={chooseUsItems}/>
      </div>
      {faqs.length!==0&&<div style={{ marginTop: "10%" }}>
        <Faqs  items={chooseUsItems} tempFaqs={faqs}/>
      </div>}
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div> 
    </div>
  );
}

export default Home;
