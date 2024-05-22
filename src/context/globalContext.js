import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider(props) {

  const [adminEmail, setAdminEmail] = useState(undefined);
  const [cartItems, setCartItems] = useState(undefined);
  const [buyedItems, setBuyedItems] = useState(undefined);

  // console.log("9oo99",localStorage.getItem("cart"))



  useEffect(() => {

   
    if (localStorage.getItem("cart")) {
      setCartItems([...JSON.parse(localStorage.getItem("cart"))])
    }else{
      setCartItems([])
    }

  }, [])


 
    return (
      <>
  
  { cartItems&& <GlobalContext.Provider
      value={{
        adminEmail,
        setAdminEmail,
        cartItems,
        setCartItems,
        buyedItems,
        setBuyedItems

      }}
    >
      {props.children}
    </GlobalContext.Provider>}
  
  </>
  )

}

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
