import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/GalleryStyles.module.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import gsap from "gsap";

function GalleryMain({galleries,galleriesCategories}) {

  const imgRef1 = useRef(null);

  const divRef1 = useRef(null);

  const timeline1 = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());


  const handle1stMouseEnter = () => {
    timeline1.current.to(imgRef1.current, {
      scale: 1.2,
      ease: "expo.out",
      duration: 1
    });

    timeline1.current.play();

    timeline2.current.to(divRef1.current, {

      display: "unset",

      ease: "expo.out",
      duration: 1
    });

    timeline2.current.play();


  };

  const handle1stMouseLeave = () => {
    timeline2.current.to(divRef1.current, {

      display: "none",


      duration: 1
    });

    timeline2.current.play();

    timeline1.current.reverse()


  };

  const [clicked, setClicked] = useState(galleriesCategories[0]);

  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
  };

  return (
    <>
    <div
    className="d-flex "
    style={{ marginTop: "10%",flexWrap:'wrap',rowGap:'15px' ,marginLeft:"15rem"}}
  >
    {galleriesCategories.map((item,index)=>(
    
    <div
      className={`${clicked === item
        ? `${styles.Gallery_main_btns_active} `
        : `${styles.Gallery_main_btns}`
        }`}
      onClick={() => {
        handleClick(item);
      }}
    >
      <div
        className={`${clicked === item
          ? `${styles.Gallery_main_btns_text_active} `
          : `${styles.Gallery_main_btns_text}`
          }`}
      >
        {item}
      </div>
    </div>
 
 

    ))}
      </div>
  
      <div
                className={`d-flex  ${styles.Gallery__mainWrapperOne}`}
                style={{ marginTop: "10%",marginLeft:"15rem" }}
              >
      {galleries.map((gallery, gIndex) => (
        <>
          {clicked === gallery.category && (
            <>
              
                {/* <div className="d-flex"> */}


                  <div style={{ display: "inline-flex", flexDirection: "column" }}>
                    <div
                      style={{
                        margin: "10px",
                        overflow: 'hidden',
                        flexGrow: 1,
                        borderRadius: '32px'
                      }}
                    >
                      <img
                        ref={imgRef1}
                        onMouseEnter={handle1stMouseEnter}
                        onMouseLeave={handle1stMouseLeave}
                        className={`${styles.Gallery_img} `}
                        src={gallery?.image}
                        alt="g1"
                      />
                    </div>
                    <div
                      ref={divRef1}
                      style={{
                        marginLeft: "10px",
                        display: "none",
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.53) 42.71%, #000 80.63%)',
                        width: '300px',
                        height: '143px',
                        marginTop: '-47%',
                        borderRadius: "36px",
                        zIndex: 1000
                      }}
                    >
                      <div className={`${styles.Gallery_li} ms-3`}>
                        {gallery?.name}
                      </div>
                    </div>
                  </div>
                
                {/* </div> */}
             



              {/* <GalleryMainTab /> */}
            </>
          )}
</>
))}
      </div>
    </>
  );
}

export default GalleryMain;

// const GalleryMainTab = () => {
//   return (
//     <>
//       <div className={styles.Gallery__mainWrapperTab}>

//         {
//           ['1', '2', '3', '4', '5', '6', '7', '8'].map((cur, id) => (

//             <div className={styles.Gallery__imageWrapper}>
//               <img src={gallery1} alt="gallery-pics" />
//             </div>
//           ))
//         }

//       </div>
//     </>
//   )
// }
