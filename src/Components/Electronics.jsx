import React from "react";
import '../App.css';
import { useState, useEffect } from "react";
import { useStateValue } from "../Context/Cart/CartContext";

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);
    const [pending, setPending] = useState(true);
    const { addToCart,cartItems } = useStateValue();
  const isInCart = (electronic) => {
    return !!cartItems.find((item) => item.id === electronic.id);
  };
    const electronicsAll =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
        const data = await response.json();
        setElectronics(data);
        setPending(false);
    }

    useEffect(() => {
        electronicsAll();
    }, [])
    return ( 
        <div>
            {pending && <div className="loader"></div>}
            {
            electronics.length > 0 
            ? (
                <div className="product-container">
                    {electronics.map((electronic) => (
                    <div className="product-card">
                        <p className="cartegory-text">{electronic.category.toUpperCase()}</p>
                        <div className="image-container">
                           <img className="product-image"src={electronic.image} alt=""/>
                        </div>
                        <div>
                           <h2 className="title-text">{electronic.title}</h2>
                           <p className="description-text">{electronic.description}</p>
                        </div>
                        <div className="price-text">
                           <p>Price: {'$' + electronic.price}</p>
                        </div>
                        <div>
                           {isInCart(electronic) && (
                              <button className="cart-btn">In Cart</button>
                           )}
                           {!isInCart(electronic) && (
                              <button onClick={() => {addToCart(electronic)}} className="cart-button">Add To Cart</button>
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
 
export default Electronics;