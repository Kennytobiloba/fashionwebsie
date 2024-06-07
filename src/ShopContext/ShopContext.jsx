import React, { createContext, useState } from "react";
import { all_data } from "../assets/assets";


export const ShopContext = createContext(null)



const ShopContextProvider = (props) => {


 const  contextValue = {all_data}

 return(
    <ShopContext.Provider value={contextValue}>
        {props.children}

    </ShopContext.Provider>
 )
}
export default ShopContextProvider

