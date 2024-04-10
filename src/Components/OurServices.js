import React from "react";
import "../styles/ServicesStyles.css";

function OurServices() {
  return (
    <div className="ser_os-main d-flex justify-content-center">
      <div className="ser_os-main-2">
        <div className="ser_os-leftpart">
          <div className="ser_os-btn">
            <div className="ser_os-btn-text">Our Services</div>
          </div>
          <div className="ser_os-para-main">
            <div className="ser_os-para">
              Explore Our Comprehensive Services
            </div>
          </div>
        </div>
        <div className="ser_os-right-part">
          <div className="ser_os-right-main-part">
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
  );
}

export default OurServices;
