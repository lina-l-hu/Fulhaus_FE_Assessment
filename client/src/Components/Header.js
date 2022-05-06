import { useContext } from "react";
import "./Header.css";
import { CartContext } from "./Cart/CartContext";


const Header = () => {

    const { setDisplayCart } = useContext(CartContext);
    
    return (
        <div className="headerWrapper">
            <p>Fülhaus Shop</p>
            <button onClick={() => setDisplayCart(true)}>CART</button>
        </div>
    )
}

export default Header;