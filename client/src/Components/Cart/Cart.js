//Slideout Cart component


import { useContext, useRef } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import "./cartStyles/Cart.css";

const Cart = () => {

    //reference to this node so we can detect clicks out side of it (to close cart)
    const nodeRef = useRef();

    const { displayCart, setDisplayCart, selectedItems, cartButtonRef, addToCartButtonRef} = useContext(CartContext);
    
    //close cart modal if we click outside of it
    window.onclick = function(event) {
        if (nodeRef.current && !nodeRef.current.contains(event.target) &&
        event.target !== cartButtonRef.current && event.target !== addToCartButtonRef.current) {
            setDisplayCart(false);
        }

        //prevent the cart from closing when an item is deleted
        if (event.target.className.indexOf("removeButton") !== -1) {
            setDisplayCart(true);
        }
    }

    //calculate cart total
    const cartTotal = selectedItems.reduce((acc, item) => {
        return acc + item.retailPrice;
    }, 0);

    return (
        <div className={(displayCart) ? "cartWrapper cartOpen" : "cartWrapper"} ref={nodeRef}>
            <div className="cartContent" >

                {(selectedItems.length === 0) ? (
                    <p className="emptyCartMessage">No items in cart!</p>
                ) : (
                    <>
                    <div className="cartItems">
                        {selectedItems.map((item, index) => {
                            return <CartItem key={index+item.SKU} SKU={item.SKU} productName={item.productName}
                                    brandName={item.brandName} retailPrice={item.retailPrice} productImage={item.productImage}/>
                        })}
                    </div>

                    <div className="checkoutDiv">
                        <div className="total">
                            <p>Total:</p>
                            <p>${cartTotal}</p>
                        </div>
                        <button>CHECKOUT</button>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;