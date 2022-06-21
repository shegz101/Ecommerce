import React from "react";
import '../App.css';
import { useState, useEffect } from "react";
import { useStateValue } from "../Context/Cart/CartContext";

const Women = () => {
    const [women, setWomen] = useState([]);
    const [pending, setPending] = useState(true);
    const { addToCart,cartItems } = useStateValue();
  const isInCart = (woman) => {
    return !!cartItems.find((item) => item.id === woman.id);
  };
    const womenAll =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
        const data = await response.json();
        setWomen(data);
        setPending(false);
    }
    useEffect(() => {
        womenAll();
    }, [])
    return ( 
        <div>
            {pending && <div className="loader"></div>}
            {
            women.length > 0 
            ? (
                <div className="product-container">
                    {women.map((woman) => (
                    <div className="product-card">
                        <p className="cartegory-text">{woman.category.toUpperCase()}</p>
                        <div className="image-container">
                           <img className="product-image"src={woman.image} alt=""/>
                        </div>
                        <div>
                           <h2 className="title-text">{woman.title}</h2>
                           <p className="description-text">{woman.description}</p>
                        </div>
                        <div className="price-text">
                           <p>Price: {'$' + woman.price}</p>
                        </div>
                        <div>
                           {isInCart(woman) && (
                              <button className="cart-btn">In Cart</button>
                           )}
                           {!isInCart(woman) && (
                              <button onClick={() => {addToCart(woman)}} className="cart-button">Add To Cart</button>
                           )} 
                        </div>    
                    </div>
                    ))}
                </div>
            ) : (
                console.log("Data not found")
            )
         }
        </div>
     );
}
 
export default Women;