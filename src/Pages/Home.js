import React, { useState, useEffect } from "react";
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
import { fetchCus, fetchFaqs, fetchTestimonials, fetchTrainingModules } from "../api-calls/apiCalls";


function Home() {
  const [traininingModulesItems, setTraininingModulesItems] = useState([])
  const [testimonialsItems, setTestimonialsItems] = useState([])
  const [faqItems, setFaqItems] = useState([])
  const [tempFaqs, setTempFaqs] = useState([])
  const [cusItems, setCusItems] = useState([])


  useEffect(() => {



    const fetcher = async () => {
      const tempTrainingModuleData = await fetchTrainingModules()
      setTraininingModulesItems([...tempTrainingModuleData])

      const testimonialsData = await fetchTestimonials()
      setTestimonialsItems([...testimonialsData])

      const faqData = await fetchFaqs()
      setFaqItems([...faqData])

      let tempFaqs = [];

      faqData.forEach((item) => {
        tempFaqs.push({ sign: "plus" });
      });
      setTempFaqs([...tempFaqs]);


      const cusData = await fetchCus()
      setCusItems([...cusData])
    }

    fetcher()
  }, []);


  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <div>
        <TopBar page={"home"} />
      </div>
      <div className={Styles.Home__heroSec} style={{ marginTop: "10%" }}>
        <OurMission />
      </div>
      <div>
        <OurVision />
      </div>
      {traininingModulesItems && traininingModulesItems.length !== 0 && <div style={{ marginTop: "10%" }}>
        <TrainingModules items={traininingModulesItems} />
      </div>}

      {testimonialsItems && testimonialsItems.length !== 0 && <div style={{ marginTop: "10%" }}>
        <Testimonials items={testimonialsItems} />
      </div>}

      <div style={{ marginTop: "10%" }}>
        <OurJourney />
      </div>
      {cusItems && cusItems.length !== 0 && <div style={{ marginTop: "10%" }}>
        <ChooseUs items={cusItems} />
      </div>}
      {faqItems && faqItems.length !== 0 && <div style={{ marginTop: "10%" }}>
        <Faqs items={faqItems} tempFaqs={tempFaqs} />
      </div>}
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
