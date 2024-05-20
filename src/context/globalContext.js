import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  
  const [adminEmail, setAdminEmail] = useState("");
  const [cartItems, setCartItems] = useState("");
 

  useEffect(()=>{
   if(localStorage.getItem("cart")){
    setCartItems([...localStorage.getItem("cart")])
   }
  },[])

  return (
    <GlobalContext.Provider
    value={{ 
        adminEmail, 
        setAdminEmail,
        cartItems,
        setCartItems

    }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
