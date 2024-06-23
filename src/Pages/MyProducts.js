import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchProducts, fetchUsers, updateUsers, verifyToken } from "../api-calls/apiCalls";
import { useGlobal } from "../context/globalContext";
import TopBar from "../Components/TopBar/TopBar";
import { Button } from "antd";


function MyProducts() {
  const location = useLocation();
  const allBuyedProducts = location.state || undefined;
  const { userEmail } = useGlobal();

  const [viewableProducts, setViewableProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    //  console.log("hhh",allBuyedProducts)
    const verifier = async () => {
      const verifiedTokenData = await verifyToken()
      if (verifiedTokenData?.message == "jwt expired"||verifiedTokenData?.message ===  "jwt not present") {
       localStorage.removeItem("cart")
       localStorage.removeItem("token")
       localStorage.removeItem("user_email")
        navigate("/login")
      } else if (localStorage.getItem('cart')===null||localStorage.getItem('user_email')===null) {
       localStorage.removeItem("cart")
       localStorage.removeItem("token")
       localStorage.removeItem("user_email")
        navigate("/login");
     } 
    }
    verifier()

    if (allBuyedProducts) {
      const setUserData = async () => {
        const allUsers = await fetchUsers();

        if (
          allUsers?.message === "jwt expired" ||
          allUsers?.message === "jwt not present"
        ) {
          localStorage.removeItem("cart");
          localStorage.removeItem("token");
          localStorage.removeItem("user_email");
          return navigate("/login");
        }

        let userId = "";

        allUsers.forEach((user) => {
          if (user.email === userEmail) {
            userId = user?._id;
          }
        });

        const userData = {
          user_id: userId,
          buyed_products: [...allBuyedProducts],
        };
        await updateUsers(userData);

        const allProducts = await fetchProducts();
        let tempViewableProducts = [];

        for (let prod of allProducts) {
          for (let bp of allBuyedProducts) {
            if (bp === prod._id) {
              tempViewableProducts.push(prod);
            }
          }
        }

        setViewableProducts([...tempViewableProducts]);
      };

      setUserData();
    } else {
      // alert("else")
      const setUserData = async () => {
        const allUsers = await fetchUsers();

        if (
          allUsers?.message === "jwt expired" ||
          allUsers?.message === "jwt not present"
        ) {
          localStorage.removeItem("cart");
          localStorage.removeItem("token");
          localStorage.removeItem("user_email");
          return navigate("/login");
        }

        let allBuyedProductsForElsePart = [];

        allUsers.forEach((user) => {
          if (user.email === userEmail) {
            allBuyedProductsForElsePart = user.buyed_products;
          }
        });

        const allProducts = await fetchProducts();
        let tempViewableProducts = [];

        for (let prod of allProducts) {
          for (let bp of allBuyedProductsForElsePart) {
            if (bp._id === prod._id) {
              tempViewableProducts.push(prod);
            }
          }
        }

        setViewableProducts([...tempViewableProducts]);
      };

      setUserData();
    }
  }, []);

  return (
    <div
      className="vh-100"
      style={{ overflowX: "hidden", background: "#202020" }}
    >
      <TopBar page={"cart"} />
      <h1
        className="d-flex justify-content-center mt-5"
        style={{ color: "white" }}
      >
        My Products
      </h1>
      <div className="d-flex flex-column" style={{ alignItems: "center" }}>
        {viewableProducts.length !== 0 ? (
          viewableProducts.map((item, index) => (
            <div className="d-flex justify-content-around mt-5 w-50 p-4 shadow rounded">
              <img src={item?.image} className="w-25 rounded" />
              <div className="d-inline-flex flex-column">
                <p style={{ color: "white" }}>{item?.name}</p>
                <p
                  style={{ color: "white" }}
                >{`Price: $${item?.discounted_price}`}</p>
                {/* <p>{`Count: ${item?.count}`}</p> */}
                <div>
                  <Button
                    className="btn btn-success rounded ms-3"
                    // onClick={() => {
                    //   navigate("/view-file-template",{state:{templateData:item?.file_templates[0] }})
                    // }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }} className="mt-md-5">
            Your my products section is empty
          </p>
        )}
      </div>
    </div>
  );
}

export default MyProducts;
