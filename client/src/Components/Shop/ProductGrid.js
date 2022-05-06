import { useEffect, useReducer } from "react";
import ProductPreview from "./ProductPreview";
import "./ProductGrid.css";

const initialState = {
    products: null, 
    fetchStatus: "loading", 
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case ("products-loaded-from-api"): {
            return {
                ...state, 
                products: action.products,
                fetchStatus: "idle"
            }
        }

        case ("failure-loading-products-from-api"): {
            return {
                ...state, 
                fetchStatus: "failed", 
                error: action.error
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

const ProductGrid = () => {

    //to track product fetch state
    const [ state, dispatch ] = useReducer(reducer, initialState);

    //fetch products from API
    useEffect(() => {

        fetch("https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "products-loaded-from-api", 
                products: data.data.products
            })

        })
        .catch((err) => {
            dispatch({
                type: "failure-loading-products-from-api",
                error: err
            })
        })
    }, [])

    if (state.fetchStatus === "loading") {
        return  <div className="wrapper"></div>
    }

    return (
        <div className="productGridWrapper">
            {state.products.map((product) => {
                return <ProductPreview key={product._id} SKU={product._id} productName={product.fulhausProductName} brandName={product.vendor.name}
                            retailPrice={product.retailPrice} productImage={product.imageURLs[0]}/>
            })}
        </div>
    )
}

export default ProductGrid;