import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail2 from "../assets/mail2.png";

function NewSletter() {
  return (
    <div className="d-flex justify-content-center">
      <div className="ser_left-part">
        <img className="ser_mail" src={mail2} alt="mail" />
      </div>
      <div className="ser_right-part">
        <div className="ser_ns-btn">
          <div className="ser_ns-btn-text">Newsletter</div>
        </div>
        <div className="ser_subscribe-text mt-3">
          Subscribe to our newsletter
        </div>
        <div className="ser_ns_desc_main mt-3">
          <div className="ser_ns_desc">
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
