import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const { displayCart, setDisplayCart, 
            selectedItems, setSelectedItems } = useContext(CartContext);
    
    return (
        <div className="cartWrapper">
            <div className="cartContent">
                {selectedItems.map((item) => {
                    return <CartItem />
                })}
            </div>
        </div>
    );
}

export default Cart;