//hero banner component for the Shop page

import "./shopStyles/ShopBanner.css";
import bannerImage from "../../assets/kam-idris-_HqHX3LBN18-unsplash.jpg";

const ShopBanner = () => {

    return (
        <div className="bannerWrapper">
            <div className="bannerImage">
                <img  src={bannerImage} alt="yellow chair in living room" />
            </div>
    
            <div className="textBanner">
                <h1>Patio Furniture</h1>
                <div className="buttonDiv">
                    <button className="mainButton">SHOP</button>
                </div>
            </div>
        </div>
    )
    
}

export default ShopBanner;