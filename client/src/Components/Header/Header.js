//Sticky Header for site


import { useContext } from "react";
import "./headerStyles/Header.css";
import { CartContext } from "../Cart/CartContext";

const Header = () => {

    const { setDisplayCart, cartButtonRef } = useContext(CartContext);
    
    return (
        <div className="headerWrapper">
            <h3>Fülhaus Shop</h3>
            <button onClick={() => setDisplayCart(true)} ref={cartButtonRef}>CART</button>
        </div>
    )
}

export default Header;