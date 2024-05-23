import React, { useContext, useEffect, useState } from 'react'
import { useGlobal } from '../context/globalContext';
import { fetchProducts } from '../api-calls/apiCalls';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Components/TopBar/TopBar';

function Cart() {
  const { cartItems, setCartItems } = useGlobal();
  const [cartProducts, setCartProducts] = useState(undefined)

  const navigate = useNavigate()

  const handleRemoveFromCart = (index, prodId) => {
    let tempCartProducts = cartProducts
    tempCartProducts.splice(index, 1)

    setCartProducts([...tempCartProducts])



    let localStorageCartItems = JSON.parse(localStorage.getItem("cart"))
    // console.log("hhh",localStorageCartItems)
    localStorageCartItems.forEach((lsci, ind) => {
      if (lsci === prodId) {
        localStorageCartItems.splice(ind, 1)
      }
    })
    localStorage.setItem("cart", JSON.stringify(localStorageCartItems))

    window.location.reload()
  }

  const handleBuyNow = (product) => {
    // navigate("/user-dashboard",{state:product})
    navigate("/user-dashboard")
  }

  useEffect(() => {

    const fetcher = async () => {
      const productsData = await fetchProducts()
      if (productsData?.message === "jwt expired" || productsData?.message === "jwt not present") {
        return navigate("/login");
      } else {

        let tempCartItems = []


        // let isItAlreadyAdded = (cItem) => {
        //   for (let j = 0; j < tempCartItems.length; j++) {
        //     if (tempCartItems[j]?.id === cItem) {
        //       return ({ present: true, index: j })
        //     }
        //   }
        //   return ({ present: false })
        // }

        // cartItems.forEach((cItem, _) => {
        // let presentInTempCart = isItAlreadyAdded(cItem)
        // if (presentInTempCart.present) {
        //   tempCartItems[presentInTempCart.index].count = tempCartItems[presentInTempCart.index]?.count + 1;
        // } else if (!presentInTempCart.present) {
        // tempCartItems.push({
        //   product: {},
        //   id: cItem,
        // count: 1
        // })
        // }
        // })

        cartItems.forEach((cartItem, cartInd) => {
          productsData.forEach((prod, prodInd) => {
            if (prod?._id === cartItem) {

              tempCartItems.push({
                product: prod
              })
            }
          })
        })

        setCartProducts([...tempCartItems])





      }
    }
    fetcher()

  }, [])

  if (cartProducts) {
    return (
      <div className='vh-100' style={{ overflowX: "hidden", background: "#202020" }}>
        <TopBar page={"cart"} />
        <h1 className='d-flex justify-content-center mt-5' style={{ color: 'white' }} >
          Cart Items
        </h1>


        <div className='d-flex flex-column' style={{ alignItems: "center" }}>
          {
            cartProducts.length !== 0 ?

              cartProducts.map((item, index) => (

                <div className='d-flex justify-content-around mt-5 w-50 p-4 shadow rounded'>
                  <img src={item?.product?.image} className='w-25 rounded' />
                  <div className='d-inline-flex flex-column'>
                    <p style={{ color: "white" }}>{item?.product?.name}</p>
                    <p style={{ color: "white" }}>{`Price: $${item?.product?.discounted_price}`}</p>
                    {/* <p>{`Count: ${item?.count}`}</p> */}
                    <div>
                      <button className='btn btn-danger rounded' onClick={() => {
                        handleRemoveFromCart(index, item?.product?._id)
                      }}>Remove From Cart</button>
                      <button className='btn btn-success rounded ms-3' onClick={() => {
                        handleBuyNow(item?.product)
                      }}>Buy Now</button>
                    </div>

                  </div>
                </div>


              ))
              :
              (
                <p style={{ color: "white" }} className='mt-md-5'>Your cart is empty</p>
              )
          }
        </div>
      </div>
    )
  }
}

export default Cart