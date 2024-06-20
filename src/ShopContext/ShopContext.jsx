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

    const  RemoveFromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartItems)
    }
    const getTotalCartItems = () =>{
        let totalItem = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem
       }
       
       const  getTotalCartAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_data.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
           
        }
        return  totalAmount;
    }
    
    

 const  contextValue = {all_data, cartItems, addToCart, getTotalCartItems,RemoveFromCart, getTotalCartAmount}

 

 return(
    <ShopContext.Provider value={contextValue}>
        {props.children}

    </ShopContext.Provider>
 )
}
export default ShopContextProvider

