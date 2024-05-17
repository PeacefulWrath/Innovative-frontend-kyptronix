import React, { useState, useRef, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../styles/GalleryStyles.module.css";
import gsap from "gsap";

function GalleryMain({ galleries, galleriesCategories }) {
  const mainDivRef1 = useRef(null);
  const tls = useRef([]);
  const [clicked, setClicked] = useState(galleriesCategories[0]);

  const handle1stMouseEnter = (ind) => {
    tls.current[ind].play();
  };

  const handle1stMouseLeave = (ind) => {
    tls.current[ind].reverse();
  };

  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".semiDivRef");

      links.forEach((link) => {
        const q = gsap.utils.selector(link);
        const tl = gsap
          .timeline({ paused: true })
          .to(q(".imgRef1"), {
            scale: 1.2,
            ease: "expo.out",
            duration: 1,
          })
          .to(q(".divRef1"), {
            display: "unset",
            ease: "expo.out",
            duration: 1,
          });

        tls.current.push(tl);
      });
    }, mainDivRef1);

    return () => {
      tls.current = [];
      ctx.revert();
    };
  }, [clicked]);

  return (
    <>
      <div
        className="d-flex "
        style={{
          marginTop: "10%",
          flexWrap: "wrap",
          rowGap: "15px",
          marginLeft: "15rem",
        }}
      >
        {galleriesCategories.map((item, index) => (
          <div
            className={`${
              clicked === item
                ? `${styles.Gallery_main_btns_active} `
                : `${styles.Gallery_main_btns}`
            }`}
            onClick={() => {
              handleClick(item);
            }}
          >
            <div
              className={`${
                clicked === item
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
        style={{ marginTop: "10%", marginLeft: "15rem" }}
        ref={mainDivRef1}
      >
        {galleries.map((gallery, gIndex) => (
          <>
            {/* {clicked === gallery.category && ( */}
            <>
              {/* <div className="d-flex"> */}

              <div
                style={{ display: "inline-flex", flexDirection: "column" }}
                className="semiDivRef"
              >
                <div
                  style={{
                    margin: "10px",
                    overflow: "hidden",
                    flexGrow: 1,
                    borderRadius: "32px",
                  }}
                >
                  <img
                    onMouseEnter={() => {
                      handle1stMouseEnter(gIndex);
                    }}
                    onMouseLeave={() => {
                      handle1stMouseLeave(gIndex);
                    }}
                    className={`${styles.Gallery_img} imgRef1`}
                    src={gallery?.image}
                    style={{
                      display: clicked === gallery.category ? "" : "none",
                    }}
                    alt="g1"
                  />
                </div>
                <div
                  className="divRef1"
                  style={{
                    marginLeft: "10px",
                    display: "none",
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.53) 42.71%, #000 80.63%)",
                    width: "300px",
                    height: "143px",
                    marginTop: "-47%",
                    borderRadius: "36px",
                    zIndex: 1000,
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
            {/* )} */}
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
