import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail from "../../assets/mail.png";
import telephone from "../../assets/telephone.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import divider from "../../assets/divider.png";
import logo from "../../assets/logo3.png";
import styles from "../../styles/HomeStyles.module.css";
import serviceStyles from "../../styles/ServicesStyles.module.css";
import { useNavigate } from "react-router-dom";
import GetCloseIcon from "../../assets/GetCloneIcon.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGlobal } from "../../context/globalContext";
import { Badge } from "antd";
import { fetchProducts, handleCheckout, verifyToken } from "../../api-calls/apiCalls";
import TestImg from "../../assets/gallery-3.png";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import gsap from "gsap";
import emailjs from '@emailjs/browser';

function TopBar({ page, bg }) {
  
  const [clicked, setClicked] = useState("Home");
  const [isGetquotes, setIsGetquotes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginAndSignUp, setShowLoginAndSignUp] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const { cartItems, setCartItems } = useGlobal();



  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
    navigate(`/${clickedItem}`);
  };

  const handleLogOut=()=>{
    localStorage.removeItem("cart")
    localStorage.removeItem("buyed_products")
    localStorage.removeItem("token")
    localStorage.removeItem("user_email")
    window.location.reload()
    navigate("/login")
  }

  useEffect(() => {
    const verifier = async () => {
      const verifiedTokenData = await verifyToken();
      // console.log("rrr",verifiedTokenData?.message)
      if (
        verifiedTokenData?.message == "jwt expired" ||
        verifiedTokenData?.message === "jwt not present"
      ) {
        setShowLoginAndSignUp(true);
      } else {
        setShowLoginAndSignUp(false);
      }
    };

    verifier();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          // height: page !== "cart" ? "80%" : "",
          background: page !== "details" && page !== "cart" ? `url(${bg})` : "",
          position: "relative",
        }}
      >
        <nav
          className={
            page === "home" || page === "details"
              ? `${styles.Home_top_bar} navbar navbar-expand-lg `
              : `${serviceStyles.Services_top_bar} navbar navbar-expand-lg `
          }
        >
          <div className={`container ${styles.Annoucement__wrapper}`}>
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <p className="me-2">
                  <img
                    src={telephone}
                    alt="telephone"
                    className={styles.top_bar_icon}
                  />
                  <span className={styles.Home_top_bar_phn_no}>
                    +1-323-566-7866
                  </span>
                </p>
              </li>
              <li className="nav-item">
                <p className={styles.top_bar_divider}>|</p>
              </li>
              <li class="nav-item">
                <p className="ms-2">
                  <img src={mail} alt="mail" className={styles.top_bar_icon} />
                  <span className={styles.Home_top_bar_email_text}>
                    Example@gmail.com
                  </span>
                </p>
              </li>
            </ul>

            <ul className="navbar-nav gap-1 me-auto ">
              <li className="nav-item">
                <img
                  src={fb}
                  alt="fb"
                  className={styles.Home_top_bar_fb_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={styles.Home_top_bar_linkedin_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={insta}
                  alt="insta"
                  className={styles.Home_top_bar_insta_icon}
                />
              </li>
              <li className="nav-item">
                <img
                  src={twitter}
                  alt="twitter"
                  className={styles.Home_top_bar_twitter_icon}
                />
              </li>
            </ul>

            <button
              onClick={() => setIsGetquotes(true)}
              className={styles.Home_top_bar_get_quota_btn}
            >
              Get Quote
            </button>

            <div className="ms-5">
              <Badge count={cartItems.length} showZero color="black">
                <ShoppingCartIcon
                  className={styles.Home__topBar__cart__BTN}
                  onClick={() => {
                    // navigate("/cart");
                    setShowCart(true);
                  }}
                />
              </Badge>
            </div>
          </div>

          <TopBarTab setIsGetquotes={setIsGetquotes} />
        </nav>

        <img
          style={{ marginTop: "0.3%", marginBottom: "0px" }}
          src={divider}
          alt="divider"
        />

        <div
          className={`d-flex ${styles.Home__navBar__outerWrapper}`}
          style={{ marginTop: "-0.7%" }}
        >
          <img className={styles.Home_logo} src={logo} alt="logo" />

          <div className={styles.Home_menu_list}>
            <p
              className={`${
                clicked === "home"
                  ? `${styles.Home_menue_active}`
                  : `${styles.Home_menue}`
              }`}
              onClick={() => {
                handleClick("home");
              }}
            >
              Home
            </p>

            <p
              className={`${
                clicked === "services"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("services");
              }}
            >
              Services
            </p>
            <p
              className={`${
                clicked === "products"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("products");
              }}
            >
              Products
            </p>
            <p
              className={`${
                clicked === "trainings"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("trainings");
              }}
            >
              Trainings
            </p>
            <p
              className={`${
                clicked === "partners"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("partners");
              }}
            >
              Our Partners
            </p>
            <p
              className={`${
                clicked === "gallery"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("gallery");
              }}
            >
              Gallery
            </p>
            <p
              className={`${
                clicked === "aboutus"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("aboutus");
              }}
            >
              About Us
            </p>
            <p
              className={`${
                clicked === "contactus"
                  ? `${styles.Home_other_menues_active}`
                  : `${styles.Home_other_menues}`
              }`}
              onClick={() => {
                handleClick("contactus");
              }}
            >
              Contact Us
            </p>

            <p
              className={`${clicked === "myproducts"
                ? `${styles.Home_other_menues_active}`
                : `${styles.Home_other_menues}`
                }`}
              onClick={() => {
                handleClick("my-products");
              }}
            >
              My Products
            </p>
          </div>

          {showMenu && <NavMenuTab setShowMenu={setShowMenu} />}

          <div className={styles.Home__navBar__BTNSWrapper}>
            {showLoginAndSignUp ? (
              <>
                <button
                  className={styles.Home__navBar__signUp__BTN}
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </button>
                <button
                  className={styles.Home__navBar__logoIn__BTN}
                  onClick={() => navigate("/login")}
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                <button
                  className={styles.Home__navBar__logOut__BTN}
                  onClick={() => {
                    alert("logout");
                  }}
                >
                  Log Out
                </button>
              </>
            )}
            <button
              onClick={() => setShowMenu(true)}
              className={styles.Home__navBar__menuBTN}
            >
              <MenuIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            </button>
          </div>

          {showLoginAndSignUp ? (
            <>
              <button
                onClick={() => navigate("/register")}
                className={styles.Home_signup_btn}
              >
                Sign up
              </button>

              <button
                onClick={() => navigate("/login")}
                className={styles.Home_login_btn}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleLogOut();
                }}
                className={styles.Home_logout_btn}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {page === "services" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            What we offer?
          </div>
        )}
        {page === "products" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Our products
          </div>
        )}
        {page === "trainings" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Trainings
          </div>
        )}
        {page === "partners" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Our Partners
          </div>
        )}
        {page === "gallery" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Gallery
          </div>
        )}
        {page === "aboutus" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            About Us
          </div>
        )}
        {page === "contactus" && (
          <div
            className={`${serviceStyles.Services_top_bar_text} d-flex justify-content-center`}
          >
            Contact Us
          </div>
        )}
      </div>

      {isGetquotes && <GetQuotes setIsGetquotes={setIsGetquotes} />}
      {showCart && <CartMenu setShowCart={setShowCart} />}
    </>
  );
}

export default TopBar;

const GetQuotes = ({ setIsGetquotes }) => {

  useEffect(() => emailjs.init('7tEQNlrYa74GKcgSa'), []);

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")

  const handleSend = async () => {
    // console.log("email",email)
    const serviceId = 'service_twmn4of';
    const customerTemplateId = 'template_lsqfp5p';
    try {
      await emailjs.send(serviceId, customerTemplateId, {
        name: firstName+lastName,
        phone:phone,
        email: email,
        subject:subject,
        message: message
      });
    } catch (error) {
      console.log(error);
    } finally {
      alert('email send successfully');
      window.location.reload();
    }
  };

  return (
    <>
      <div className={styles.Get__Quotes}>
        <div className={styles.Get__Quotes_FormWrapper}>
          <div className={styles.Get__Quotes_headerWrapper}>
            <h2 style={{ color: "white" }}>Get a quote </h2>
            <span
              onClick={() => setIsGetquotes(false)}
              className={styles.Get__Quotes_ImgWrpper}
            >
              <img src={GetCloseIcon} alt="cross-icon" />
            </span>
          </div>
          <div className={styles.Get__Quotes_FormContainer}>
            <div className={styles.Get__Quotes_InputsWrapper}>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={styles.Get__Quotes_input}
                  onChange={(e)=>{
                    setFirstName(e.target.value)
                  }}
                />
              </div>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={styles.Get__Quotes_input}
                  onChange={(e)=>{
                    setLastName(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className={styles.Get__Quotes_InputsWrapper}>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Phone number"
                  className={styles.Get__Quotes_input}
                  onChange={(e)=>{
                    setPhone(e.target.value)
                  }}
                />
              </div>
              <div className={styles.Get__Quotes_InputWrapper}>
                <input
                  type="text"
                  placeholder="Email ID"
                  className={styles.Get__Quotes_input}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className={styles.Get__Quotes_SubjectsWrapper}>
              <div className={styles.Get__Quotes_SubjectWrapper}>
                <select
                  type="text"
                  className={styles.Get__Quotes_input}
                  onChange={(e)=>{
                    setSubject(e.target.value)
                  }}
                >
                  <option default>Choose Subject</option>
                 <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                </select>
              </div>
            </div>

            <div className={styles.Get__Quotes_MessageWrapper}>
              <div className={styles.Get__Quotes_TextareaWrapper}>
                <textarea
                  type="text"
                  placeholder="Message"
                  className={styles.Get__Quotes_input}
                  rows="5"
                  onChange={(e)=>{
                    setMessage(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.Get__Quotes_SubmitBtnWrapper}>
            <button onClick={handleSend}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

const TopBarTab = ({ setIsGetquotes }) => {
  return (
    <>
      <div className={styles.Home__topBar__mainWrapper}>
        <div className={styles.Home__topBar__telAndMailWrapper}>
          <div className={styles.Home__topBar__iconAndLinkWrapper}>
            <span className={styles.topBar_iconWrapper}>
              <img src={telephone} alt="telephone" />
            </span>
            <a
              className={styles.Home__topBar__telLink}
              href="tel:+1-323-566-7866"
            >
              +1-323-566-7866
            </a>
          </div>

          <div className={styles.Home__topBar__iconAndLinkWrapper}>
            <span className={styles.topBar_iconWrapper}>
              <img src={mail} alt="mail" />
            </span>
            <a
              className={styles.Home__topBar__telLink}
              href="mailto:Example@gmail.com"
            >
              Example@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.Home__topBar__socialMedia__mainWrapper}>
          {[fb, linkedin, insta, twitter].map((cur, id) => (
            <li key={id} className={styles.Home__topBar__socialLink}>
              <a>
                <img
                  src={cur}
                  alt="facebook"
                  className={styles.Home__topBar__socialIcon}
                />
              </a>
            </li>
          ))}
        </div>

        <button
          onClick={() => setIsGetquotes(true)}
          className={styles.Home__topBar__getQuote__BTN}
        >
          Get Quote
        </button>
      </div>
    </>
  );
};

const NavMenuTab = ({ setShowMenu }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "backInOut" }}
        className={styles.Home__navMenu__mainWrapper}
      >
        <CloseIcon
          onClick={() => setShowMenu(false)}
          style={{
            position: "absolute",
            top: "8px",
            right: "40px",
            cursor: "pointer",
            color: "white",
            fontSize: "40px",
          }}
        />
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "backInOut", delay: 0.1 }}
        >
          {[
            { title: "Home", path: "/" },
            { title: "Services", path: "/services" },
            { title: "Products", path: "/products" },
            { title: "Trainings", path: "/trainings" },
            { title: "Our Partners", path: "/partners" },
            { title: "Gallery", path: "/gallery" },
            { title: "About Us", path: "/aboutus" },
            { title: "Contact Us", path: "/contactus" },
          ].map((cur, id) => (
            <Link
              onClick={() => setShowMenu(false)}
              className={styles.Home__navMenu__Links}
              to={cur.path}
              key={id}
            >
              {cur.title}
            </Link>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

const CartMenu = ({ setShowCart }) => {
  const { cartItems, setCartItems } = useGlobal();
  const [cartProducts, setCartProducts] = useState([]);
  const cartRef = useRef(null)
  const gsapTimeLine = useRef(gsap.timeline());

  const navigate = useNavigate();

  const handleRemoveFromCart = (index, prodId) => {
    let tempCartProducts = cartProducts;
    tempCartProducts.splice(index, 1);

    setCartProducts([...tempCartProducts]);

    let localStorageCartItems = JSON.parse(localStorage.getItem("cart"));

    localStorageCartItems.forEach((lsci, ind) => {
      if (lsci === prodId) {
        localStorageCartItems.splice(ind, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(localStorageCartItems));

    window.location.reload();
  };

  const handleBuyNow = async(product) => {
    const sessionData=await handleCheckout(product)
    // console.log("bbb",sessionData.session.url)
    if(sessionData){
    localStorage.setItem("temp_buyed_product",JSON.stringify(product))
    window.location=sessionData.session.url
    }
  }

  useEffect(() => {
    const fetcher = async () => {
      const productsData = await fetchProducts();
      if (
        productsData?.message === "jwt expired" ||
        productsData?.message === "jwt not present"
      ) {
        return navigate("/login");
      } else {
        let tempCartItems = [];

        cartItems.forEach((cartItem, cartInd) => {
          productsData.forEach((prod, prodInd) => {
            if (prod?._id === cartItem) {
              tempCartItems.push({
                product: prod,
              });
            }
          });
        });

        setCartProducts([...tempCartItems]);
      }
    };
    fetcher();
  }, []);

  useEffect(()=>{
    if(cartRef.current){
      gsapTimeLine.current.from(cartRef.current, {
        x:500,
        opacity: 0,        
      });
      gsapTimeLine.current.to(cartRef.current, {
        x:0,
        opacity: 1,
        duration: 0.3,
        ease: "backInOut",
      });
    }
  },[])


  return (
    <div className={`${styles.Home__cart__OuterWrapper}`}>
      <div ref={cartRef} className={`${styles.Home__cart__mainCartWrapper}`}>
        <div className={`${styles.Home__cart__headingAndCloseIconWrapper}`}>
          <h2 className={`${styles.Home__cart__headingAndCloseIcon__heading}`}>
            Your Cart
          </h2>
          <button
            onClick={() =>{
               setShowCart(false)
               gsapTimeLine.current.reverse()
               }}
            className={`${styles.Home__cart__CloseIconBtn}`}
          >
            <CloseIcon />
          </button>
        </div>

        {cartProducts.length === 0 ? (
          <>
            <p
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "500",
                margin: "10px 0px",
              }}
            >
              No Items in your cart
            </p>
          </>
        ) : (
          <>
            <div className={`${styles.Home__cart__cartListMainWrapper}`}>
              {cartProducts.map((cur, id) => (
                <>
                  <div
                    key={id}
                    className={`${styles.Home__cart__cartItemsWrapper}`}
                  >
                    <div
                      className={`${styles.Home__cart__productImageWrapper}`}
                    >
                      <img src={cur.product?.image} alt="product-img" />
                    </div>
                    <div
                      className={`${styles.Home__cart__productInfoMainWrapper}`}
                    >
                      <h2 className={`${styles.Home__cart__productName}`}>
                        {cur.product?.name}
                      </h2>

                      <p className={`${styles.Home__cart__productprice}`}>
                        <AttachMoneyIcon /> {cur.product?.discounted_price}
                      </p>
                      <div className={`${styles.Home__cart__BTNsWrapper}`}>
                        <button
                          onClick={() =>
                            handleRemoveFromCart(id, cur.product?._id)
                          }
                          className={`${styles.Home__cart__removeBTN}`}
                        >
                          Remove
                        </button>
                        <button
                          onClick={()=>{handleBuyNow(cur.product)}}
                          className={`${styles.Home__cart__checkOutBTN}`}
                        >
                          Check Out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
