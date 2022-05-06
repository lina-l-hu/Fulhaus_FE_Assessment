//Cart item component


import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartItem.css";

const CartItem = ({SKU, productName, brandName, retailPrice, productImage}) => {
    
    const { selectedItems, setSelectedItems, displayCart, setDisplayCart } = useContext(CartContext);

    //change productName to title casing
    const formattedProductName = productName.toLowerCase().split(' ').map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');

    //onClick function to single item from cart
    const handleRemoveFromCart = () => {
        //as there may be duplicate items in the cart, we will only delete the first one found
        const firstIndex = selectedItems.findIndex((item) => item.SKU === SKU);
        const updatedCart = [...selectedItems.slice(0, firstIndex), ...selectedItems.slice(firstIndex+1)];
        
        setSelectedItems(updatedCart);
        setDisplayCart(true);
    }

    return (
        <div className="cartItemWrapper">
            <div className="imgDiv">
                <img src={productImage} alt={formattedProductName} />
            </div>

            <div className="textDiv">
                <div>
                    <h5>{formattedProductName}</h5>
                    <p>{brandName.toUpperCase()}</p>
                </div>
                <p>${retailPrice}</p>
            </div>

            <div className="deleteDiv">
                <button onClick={handleRemoveFromCart}>&times;</button>
            </div>

        </div>
    )
}

export default CartItem;