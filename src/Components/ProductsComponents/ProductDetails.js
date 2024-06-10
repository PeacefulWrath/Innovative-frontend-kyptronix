import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/ProductsStyles.module.css";
import rating from "../../assets/rating.png";
import { useGlobal } from "../../context/globalContext";
import TopBar from "../TopBar/TopBar";
import { verifyToken } from "../../api-calls/apiCalls";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const { cartItems, setCartItems } = useGlobal();

  const handleAddToCart = () => {
    let tempCartItems = cartItems;
    for (let i = 0; i < tempCartItems.length; i++) {
      if (tempCartItems[i] === product?._id) {
        alert("item already added");
        return;
      }
    }
    tempCartItems.push(product?._id);
    setCartItems(tempCartItems);

    localStorage.setItem("cart", JSON.stringify(tempCartItems));

    alert("product added to cart");
    window.location.reload();
  };

  const handleAddToBuy = () => {
    // console.log("kkk",cartItems)
    // navigate("/user-dashboard",{state:product})
    navigate("/user-dashboard");
  };

  useEffect(() => {
    // console.log("1st",cartItems)
    const verifier = async () => {
      const verifiedTokenData = await verifyToken();
      if (
        verifiedTokenData?.message == "jwt expired" ||
        verifiedTokenData?.message === "jwt not present"
      ) {
        navigate("/login");
      }
    };
    verifier();
  }, []);

  return (
    <div style={{ overflowX: "hidden", background: "#202020", minHeight:'100vh' }}>
      <TopBar page={"details"} />
      <div className={` mt-5 ${styles.productDetails__mainWrapper}`}>
        <div className={`${styles.product__imageWrapper}`}>
          <img
            src={product?.image}
            alt="product-image"
            className="rounded"
          />
        </div>
        <div className="col-md-6">
          <div className="d-inline-flex flex-column w-100">
            <h1 style={{ color: "white" }}>{product?.name}</h1>
            <img
              alt="rating"
              className={styles.Products_our_products_rating}
              src={rating}
            />
            <hr className="w-100" />
            <p style={{ color: "white" }}>
              <strong>{`$ ${product?.real_price}`}</strong>
            </p>
            <p className="mt-3 fw-bold" style={{ color: "white" }}>
              Details
            </p>
            <ul className="mt-1" style={{ color: "white" }}>
              <li>{`Total Study Materials: ${product?.file_templates?.length}`}</li>
              <li>{`Total Mcq Set: ${product?.mcq_templates?.length}`}</li>
              <li>{`Total Quiz Set: ${product?.quiz_templates?.length}`}</li>
            </ul>
            <div className="d-flex justify-content-around w-100 mt-5">
              <button
                className={`btn rounded ${styles.Products__details__cart__BTN}`}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                Add To Cart
              </button>
              <button
                className={`btn rounded ${styles.Products__details__buy__BTN}`}
                onClick={() => {
                  handleAddToBuy();
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
