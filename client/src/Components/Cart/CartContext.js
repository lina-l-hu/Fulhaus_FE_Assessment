import { createContext, useReducer, useState } from "react";
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

    return (
        <CartContext.Provider value={{ selectedItems, setSelectedItems, displayCart, setDisplayCart}}>
            {children}
        </CartContext.Provider>
    )
}  