import React, { createContext,useState } from "react";
import detail from "../assets/detail"; // Ensure this path is correct

export const ShopContext = createContext(null);

const contextValue = { detail };

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;