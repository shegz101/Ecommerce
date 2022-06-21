import React from "react";
import '../App.css';
import { useState, useEffect } from "react";
import { useStateValue } from "../Context/Cart/CartContext";

const Men = () => {
    const [men, setMen] = useState([]);
    const [pending, setPending] = useState(true);
    const { addToCart,cartItems } = useStateValue();
  const isInCart = (man) => {
    return !!cartItems.find((item) => item.id === man.id);
  };
    const menAll =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const data = await response.json();
        setMen(data);
        setPending(false);
    }
    useEffect(() => {
        menAll();
    }, [])
    return ( 
        <div>
            {pending && <div className="loader"></div>}
            {
            men.length > 0 
            ? (
                <div className="product-container">
                    {men.map((man) => (
                    <div className="product-card">
                        <p className="cartegory-text">{man.category.toUpperCase()}</p>
                        <div className="image-container">
                           <img className="product-image"src={man.image} alt=""/>
                        </div>
                        <div>
                           <h2 className="title-text">{man.title}</h2>
                           <p className="description-text">{man.description}</p>
                        </div>
                        <div className="price-text">
                           <p>Price: {'$' + man.price}</p>
                        </div>
                        <div>
                           {isInCart(man) && (
                              <button className="cart-btn">In Cart</button>
                           )}
                           {!isInCart(man) && (
                              <button onClick={() => {addToCart(man)}} className="cart-button">Add To Cart</button>
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
 
export default Men;