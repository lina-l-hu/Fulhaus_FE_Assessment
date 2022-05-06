import { createContext, useState, useRef } from "react";
import usePersistedState from "../../usePersistedState.hook";

//Context keeping track of cart related states
export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  
    //keep track of items in cart using local storage (so the cart will persist even when you return to the site!)
    const [selectedItems, setSelectedItems] = usePersistedState(
      [],
      "current-cart"
    );
  
    //state to indicate whether to display CartModal or not
    const [displayCart, setDisplayCart] = useState(false);

    //reference to the CART button for opening cart
    const cartButtonRef = useRef();
    //reference to the Add To Cart button to prompt opening of the cart
    const addToCartButtonRef = useRef();
    

    return (
        <CartContext.Provider value={{ selectedItems, setSelectedItems, displayCart, setDisplayCart, cartButtonRef, addToCartButtonRef}}>
            {children}
        </CartContext.Provider>
    )
}  