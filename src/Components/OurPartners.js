import React from "react";
import styles from "../styles/PartnersStyles.module.css";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

function OurPartners() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className={`${styles.Partner_op_div}`} style={{marginTop:"5%"}}>
          <div className={styles.Partner_op_text}>Our Partners</div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className={styles.Partner_card_main}>
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner1}
              alt="partner1"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
        <div className={`${styles.Partner_card_main} ms-2`}>
          {" "}
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner2}
              alt="partner2"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
        <div className={`${styles.Partner_card_main} ms-2`}>
          {" "}
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner3}
              alt="partner3"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className={styles.Partner_card_main}>
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner1}
              alt="partner1"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
        <div className={`${styles.Partner_card_main} ms-2`}>
          {" "}
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner2}
              alt="partner2"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
        <div className={`${styles.Partner_card_main} ms-2`}>
          {" "}
          <div className="p-2">
            <img
              className={styles.Partner_card_logo}
              src={partner4}
              alt="partner4"
            />
            <div className={`${styles.Partner_card_title} mt-3`}>
              Lorem ipsum
            </div>
            <div className={`${styles.Partner_card_desc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, purus a euismod eleifend, ligula velit venenatis nunc,
              eget lobortis urna eros vel diam. Aenean varius, nibh ac consequat
              cursus, metus mi ultricies mauris, nec porta nibh orci ac ex.
              Curabitur aliquet condimentum ullamcorper. Suspendisse id mauris
              facilisis augue pretium semper ac eget justo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPartners;
