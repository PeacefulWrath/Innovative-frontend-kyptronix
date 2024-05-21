import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider(props) {

  const [adminEmail, setAdminEmail] = useState(undefined);
  const [cartItems, setCartItems] = useState(undefined);

  // console.log("9oo99",localStorage.getItem("cart"))



  useEffect(() => {

    const fetcher=async()=>{
    if (localStorage.getItem("cart")) {
      console.log("000",GlobalContext)
      // console.log("9oo99",localStorage.getItem("cart"))
      setCartItems([...JSON.parse(localStorage.getItem("cart"))]||[])
    }
    }

    fetcher()

  }, [])


 
    return (
      <>
  
  { cartItems&& <GlobalContext.Provider
      value={{
        adminEmail,
        setAdminEmail,
        cartItems,
        setCartItems

      }}
    >
      {props.children}
    </GlobalContext.Provider>}
  
  </>
  )

}

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
