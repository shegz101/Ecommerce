import React from "react";
import '../App.css';

const ProductCard = ({product}) => {
    return ( 
        <div className="product-card">
           <p className="cartegory-text">{product.category.toUpperCase()}</p>
           <div className="image-container">
               <img className="product-image"src={product.image} alt=""/>
           </div>
           <div>
               <h2 className="title-text">{product.title}</h2>
               <p className="description-text">{product.description}</p>
           </div>
           <div className="price-text">
             <p>Price: {'$' + product.price}</p>
           </div>
           <div>
            <button className="cart-button">Add To Cart</button>
           </div>
        </div>
     );
}
 
export default ProductCard;