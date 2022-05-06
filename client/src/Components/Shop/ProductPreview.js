import { useState, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./ProductPreview.css"

const ProductPreview = ({SKU, productName, brandName, retailPrice, productImage}) => {
    
    //state to indicate whether the mouse is over this component
    const [ hoverMode, setHoverMode ] = useState(false);

    const { selectedItems, setSelectedItems, setDisplayCart, displayCart, addToCartButtonRef } = useContext(CartContext);
    console.log("display cart", displayCart);
    //change productName to title casing
    const formattedProductName = productName.toLowerCase().split(' ').map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');

    
    const handleAddToCart = () => {
        
        const productToAdd = {
            SKU: SKU, 
            productName: productName, 
            brandName: brandName, 
            retailPrice: retailPrice, 
            productImage: productImage
        }

        const newCart = [...selectedItems, productToAdd];

        setDisplayCart(true);
        setSelectedItems(newCart);
    }

    //I would normally wrap the img tags in a NavLink to a product details page
    return (
        <div className="productPreviewWrapper" 
            onMouseEnter={() => setHoverMode(true)}
            onMouseLeave={() => setHoverMode(false)}>

            <div className="imageDiv">
                <img className="productPhoto" src={productImage} alt={productName} width="380"/>
            </div>

            { hoverMode && (
                <div className="infoOverlay">
                    <div>
                        <h2>{formattedProductName}</h2>
                        <h4>{brandName.toUpperCase()}</h4>
                    </div>
                    <div className="purchaseInfo">
                        <button onClick={handleAddToCart} ref={addToCartButtonRef}>+ Add to Cart</button>
                        <p>${retailPrice}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProductPreview;