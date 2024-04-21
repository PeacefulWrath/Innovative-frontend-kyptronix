import React from "react";
import styles from "../../styles/ServicesStyles.module.css";

function OurServices() {
  return (
    <>
    <div className={`${styles.Services_our_services_main} d-flex justify-content-center`}>
      <div className={styles.Services_our_services_main_2}>
        <div className={styles.Services_our_services_left_part}>
          <div className={styles.Services_our_services_btn }>
            <div className={styles.Services_our_services_btn_text}>Our Services</div>
          </div>
          <div className={styles.Services_our_services_para_main }>
            <div className={styles.Services_our_services_para_text}>
              Explore Our Comprehensive Services
            </div>
          </div>
        </div>
        <div className={styles.Services_our_services_right_part }>
          <div className={styles.Services_our_services_right_part_text}>
            Discover the full spectrum of our offerings designed to meet your
            needs effectively. From expert consultation to seamless
            implementation, our services are tailored to ensure your success.
            Whether you're seeking personalized solutions, advanced analytics,
            or reliable support, our dedicated team is here to guide you every
            step of the way. Let us empower your journey and unlock the
            potential for growth and achievement together.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OurServices;
