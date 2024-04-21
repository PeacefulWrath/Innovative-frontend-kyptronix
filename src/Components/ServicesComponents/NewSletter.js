import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail2 from "../../assets/mail2.png";
import styles from "../../styles/ServicesStyles.module.css";

function NewSletter() {
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.Services_new_sletter_left_part }>
        <img className={styles.Services_new_sletter_mail} src={mail2} alt="mail" />
      </div>
      <div className={styles.Services_new_sletter_right_part }>
        <div className={styles.Services_new_sletter_btn}>
          <div className={styles.Services_new_sletter_btn_text}>Newsletter</div>
        </div>
        <div className={`${styles.Services_new_sletter_subscribe_text } mt-3`}>
          Subscribe to our newsletter
        </div>
        <div className={`${styles.Services_new_sletter_desc_main } mt-3`}>
          <div className={styles.Services_new_sletter_desc}>
            Stay informed and inspired with our newsletter subscription. Receive
            the latest updates, exclusive offers, and valuable insights
            delivered directly to your inbox. Join our community today for a
            seamless experience of staying connected and informed.
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSletter;
