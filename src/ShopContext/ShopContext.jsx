import React, { createContext, useState } from "react";
import { all_data } from "../assets/assets";


export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_data.length; index++) {
       cart[index] = 0;
        
    }
    return cart

}



const ShopContextProvider = (props) => {


    const [cartItems, setCartItem] = useState(getDefaultCart())
   
    const  addToCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    

 const  contextValue = {all_data, cartItems, addToCart,}

 

 return(
    <ShopContext.Provider value={contextValue}>
        {props.children}

    </ShopContext.Provider>
 )
}
export default ShopContextProvider

