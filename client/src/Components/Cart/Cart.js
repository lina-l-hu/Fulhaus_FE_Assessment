import { useContext, useRef } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {

    const nodeRef = useRef();

    const { displayCart, setDisplayCart, selectedItems, cartButtonRef, addToCartButtonRef } = useContext(CartContext);
    
    console.log("displaycart", displayCart);

    //close cart modal if we click outside of it
    window.onclick = function(event) {
        if (nodeRef.current && !nodeRef.current.contains(event.target) && 
        event.target !== cartButtonRef.current && event.target !== addToCartButtonRef.current) {
            setDisplayCart(false);
          }
    }

    //calculate cart total
    const cartTotal = selectedItems.reduce((acc, item) => {
        return acc + item.retailPrice;
    }, 0);

    // let cartClasses = "cartWrapper";
    // if (displayCart) {
    //     console.log("setting classes");
    //     cartClasses = "cartWrapper cartOpen";
    // }

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