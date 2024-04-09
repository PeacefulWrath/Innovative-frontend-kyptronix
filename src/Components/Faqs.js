import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/HomeStyles.css";
import plus from "../assets/plus.png";

function Faqs() {
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
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };
  return (
    <div className="d-flex">
      <div style={{ marginLeft: "100px" }}>
        <button className="btn" style={buttonStyle}>
          Faqs
        </button>
        <div style={{ width: "80%" }} className="mt-3">
          <div className="faqs-para">What people have to ask?</div>
        </div>
        <div className="mt-3 lm-div">
          <button
            className="lm-btn"
            style={{
              borderRadius: "32px",
              background: "unset",
              borderColor: "white",
            }}
          >
            lear more
          </button>
        </div>
      </div>

      <div className="faqs-all-ques">
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus2" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus" />
        </div>
        <div className="faqs-question">
          <p className="faqs-text">Lorem ipsum dolor sit amet?</p>
          <img className="plus" src={plus} alt="plus3" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
