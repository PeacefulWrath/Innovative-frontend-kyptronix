import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [userEmail, setUserEmail] = useState(undefined);
  const [cartItems, setCartItems] = useState(undefined);
  // const [buyedItems, setBuyedItems] = useState(undefined);

  // console.log("9oo99",localStorage.getItem("cart"))

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      // console.log("roar")
      setCartItems([...JSON.parse(localStorage.getItem("cart"))]);
    } else {
      // console.log("loop")
      setCartItems([]);
    }

    // if (localStorage.getItem("buyed_products")) {
    //   // console.log("roar")
    //   setBuyedItems([...JSON.parse(localStorage.getItem("buyed_products"))]);
    // } else {
    //   // console.log("loop")
    //   setBuyedItems([]);
    // }

    if (localStorage.getItem("user_email")) {
      // console.log("fff")
      setUserEmail(localStorage.getItem("user_email"));
    } else {
      // console.log("loopem")
      setUserEmail("");
    }
  }, []);

  if (cartItems !== undefined && userEmail !== undefined) {
    return (
      <>
        <GlobalContext.Provider
          value={{
            userEmail,
            setUserEmail,
            cartItems,
            setCartItems
            // buyedItems,
            // setBuyedItems,
          }}
        >
          {children}
        </GlobalContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <p>loading....</p>
      </>
    );
  }
}

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
