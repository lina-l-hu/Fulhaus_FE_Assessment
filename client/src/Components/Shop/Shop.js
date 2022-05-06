//Shop page component


import ShopBanner from "./ShopBanner";
import ProductGrid from "./ProductGrid";
import "./shopStyles/Shop.css";

const Shop = () => {
    return (
        <div className="shopWrapper">
            <ShopBanner />
            <ProductGrid />
        </div>
    )
}

export default Shop;