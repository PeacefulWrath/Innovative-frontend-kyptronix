import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api-calls/apiCalls";
import { useGlobal } from "../context/globalContext";

function Success() {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const { userEmail, cartItems } = useGlobal();

  const handleRemoveFromCart = (cartProducts, index, prodId) => {
    let tempCartProducts = cartProducts;
    tempCartProducts.splice(index, 1);

    // setCartProducts([...tempCartProducts]);

    let localStorageCartItems = JSON.parse(localStorage.getItem("cart"));
    // console.log("hhh",localStorageCartItems)
    localStorageCartItems.forEach((lsci, ind) => {
      if (lsci === prodId) {
        localStorageCartItems.splice(ind, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(localStorageCartItems));

    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("temp_buyed_product") !== null) {
      const newBuyedProduct = JSON.parse(
        localStorage.getItem("temp_buyed_product")
      );

      const setUserData = async () => {
       

        const productsData = await fetchProducts();

        if (
          productsData?.message === "jwt expired" ||
          productsData?.message === "jwt not present"
        ) {
          localStorage.removeItem("cart");
          localStorage.removeItem("token");
          localStorage.removeItem("user_email");
          return navigate("/login");
        }

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

        tempCartItems.forEach((item, index) => {
          if (newBuyedProduct._id === item?.product._id) {
            handleRemoveFromCart(tempCartItems, index, item?.product?._id);
          }
        });

        
      };

      setUserData();

      let lsBuyedProducts = localStorage.getItem("buyed_products");

        // console.log("67",JSON.parse(lsBuyedProducts).length)
        let allBuyedProducts = [];

        if (lsBuyedProducts !== null && lsBuyedProducts !== undefined) {
          // console.log("rrr",JSON.parse(lsBuyedProducts))
          let index=0;

          // JSON.parse(lsBuyedProducts).forEach((ls) => {
          //   // console.log("loop",ls)
          //   allBuyedProducts[index]=ls;
          //   index++;
          // });
          let tempLsproducts=JSON.parse(lsBuyedProducts)
          // console.log("ggg -1",allBuyedProducts)

          for(let i=0;i<tempLsproducts.length;i++){
            allBuyedProducts[i]=tempLsproducts[i];
            index=i;
          }

          // console.log("ggg 000",allBuyedProducts)

          allBuyedProducts[index+1]=newBuyedProduct._id

          // console.log("ggg 1111",allBuyedProducts +"new buyed"+newBuyedProduct)

          localStorage.setItem(
            "buyed_products",
            JSON.stringify(allBuyedProducts)
          );

          // console.log("ddd",allBuyedProducts)

          setAllProducts([...allBuyedProducts]);
        } else{
          allBuyedProducts[0]=newBuyedProduct._id
        }
        // console.log("ggg 2222",allBuyedProducts)
        // else if (JSON.parse(lsBuyedProducts).length==0) {
          
        //   allBuyedProducts.push(newBuyedProduct._id);
        //   localStorage.setItem(
        //     "buyed_products",
        //     JSON.stringify(allBuyedProducts)
        //   );
        //   console.log("eee",allBuyedProducts)
        //   setAllProducts([...allBuyedProducts]);
        // }
    }
  }, []);

  if (localStorage.getItem("temp_buyed_product")) {
    return (
      <>
        <div>Success</div>
        <button
          onClick={() => {
            localStorage.removeItem("temp_buyed_product");
            navigate("/my-products", { state: allProducts});
          }}
        >
          Go to product page
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Go to home
        </button>
      </>
    );
  }
}

export default Success;
