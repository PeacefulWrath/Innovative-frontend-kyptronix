import React, { useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/HomeStyles.module.css";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import gsap from "gsap";

function Testimonials({items}) {
 

  const [image1,setImage1]=useState(items[0].image)
  const [image2,setImage2]=useState(items[1].image)
  const [image3,setImage3]=useState(items[2].image)

  const [name1,setName1]=useState(items[0].name)
  const [name2,setName2]=useState(items[1].name)
  const [name3,setName3]=useState(items[2].name)

  
  const [desc1,setDesc1]=useState(items[0].description)
  const [desc2,setDesc2]=useState(items[1].description)
  const [desc3,setDesc3]=useState(items[2].description)


  const [proff1,setProff1]=useState(items[0].profession)
  const [proff2,setProff2]=useState(items[1].profession)
  const [proff3,setProff3]=useState(items[2].profession)


  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  const timeline = useRef(gsap.timeline());

  const buttonStyle = {
    borderRadius: "33px",
    background:
      "var(--blue-green-gradient, linear-gradient(92deg, #53B3FA 5.18%, #ABD021 99.12%))",
    color: "#202020",
    fontFamily: "Exo 2",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  const handleClick = () => {
    let html1 = img1Ref.current.outerHTML.split(" ");
    let img1Width = "";
    let img1Height = "";

    let html2 = img2Ref.current.outerHTML.split(" ");
    let img2Width = "";
    let img2Height = "";

    let html3 = img3Ref.current.outerHTML.split(" ");
    let img3Width = "";
    let img3Height = "";

    for (let i = 0; i < html1.length; i++) {
      if (html1[i].includes("width")) {
        img1Width = html1[i + 1].substring(0, 3);
        i++;
        // console.log("1", img1Width);
      }
      if (html1[i].includes("height")) {
        img1Height = html1[i + 1].substring(0, 3);
        i++;
        // console.log("1h", img1Height);
      }
    }

    for (let i = 0; i < html2.length; i++) {
      if (html2[i].includes("width")) {
        img2Width = html2[i + 1].substring(0, 3);
        i++;

        // console.log(img2Width);
      }
      if (html2[i].includes("height")) {
        img2Height = html2[i + 1].substring(0, 3);
        i++;
        // console.log(img2Height);
      }
    }

    for (let i = 0; i < html3.length; i++) {
      if (html3[i].includes("width")) {
        img3Width = html3[i + 1].substring(0, 3);
        i++;

        // console.log(img3Width);
      }
      if (html3[i].includes("height")) {
        img3Height = html3[i + 1].substring(0, 3);
        i++;

        // console.log(img3Height);
      }
    }

    if (img3Width === "200" && img3Height === "300") {
      timeline.current.to(img3Ref.current, {
        width: 150,
        height: 150,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();


      timeline.current.to(img2Ref.current, {
        width: 200,
        height: 300,
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("Home_testimonials_temp_para")[0].innerHTML = desc2
      document.getElementsByClassName("Home_testimonials_temp_name")[0].innerHTML = name2
      document.getElementsByClassName("Home_testimonials_temp_proff")[0].innerHTML = proff2
    } else if (img2Width === "200" && img2Height === "300") {
      timeline.current.to(img2Ref.current, {
        width: "150",
        height: "150",
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();


      timeline.current.to(img1Ref.current, {
        width: "200",
        height: "300",
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("Home_testimonials_temp_para")[0].innerHTML = desc1
      document.getElementsByClassName("Home_testimonials_temp_name")[0].innerHTML = name1
      document.getElementsByClassName("Home_testimonials_temp_proff")[0].innerHTML = proff1
    } else if (img1Width === "200" && img1Height === "300") {
      timeline.current.to(img1Ref.current, {
        width: "150",
        height: "150",
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();

      timeline.current.to(img3Ref.current, {
        width: "200",
        height: "300",
        duration: 0.1,
        ease: "expoScale(0.5,7,none)",
      });

      timeline.current.play();
      document.getElementsByClassName("Home_testimonials_temp_para")[0].innerHTML = desc3
      document.getElementsByClassName("Home_testimonials_temp_name")[0].innerHTML = name3
      document.getElementsByClassName("Home_testimonials_temp_proff")[0].innerHTML = proff3
    }
  };

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center ">
        <button className="btn" style={buttonStyle}>
          Testimonials
        </button>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-3 ">
        <div className={styles.Home_testimonials_title_para}>
          What our learners have to say?
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          className="w-50 me-5"
        >
          <img
            ref={img1Ref}
            src={image1}
            alt="testi1"
            style={{
              width: 150,
              height: 150,
              objectFit:'cover',
              objectPosition:'top'
            }}
          />
          <img
            ref={img2Ref}
            src={image2}
            alt="testi2"
            style={{
              width: 150,
              height: 150,
              objectFit:'cover',
              objectPosition:'top'
            }}
            className="ms-2"
          />
          <img
            ref={img3Ref}
            src={image3}
            alt="testi3"
            style={{
              width: 200,
              height: 300,
              objectFit:'cover',
              objectPosition:'top'
            }}
            className="ms-2"
          />
        </div>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            width: "35%",
            marginRight: "20%",
          }}

           className={`${styles.Home_testimonials_contentWrapper}`}
        >
          <p className={`${styles.Home_testimonials_para} Home_testimonials_temp_para`}>
           {desc3}
          </p>
          <p className={`${styles.Home_testimonials_name} Home_testimonials_temp_name`}>{name3}</p>
          <p className={`${styles.Home_testimonials_proff} Home_testimonials_temp_proff`}>{proff3}</p>
          <div className="mt-3 d-flex">
            <img
              src={prev}
              alt="prev"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
              className={`${styles.Home_testimonials_prev_Btn}`}
            />
            <img
              
              onClick={handleClick}
              src={next}
              alt="next"
              style={{ cursor: "pointer" }}
              className={`${styles.Home_testimonials_next_Btn} ms-4`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
