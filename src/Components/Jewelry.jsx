import React from "react";
import '../App.css';
import { useState, useEffect } from "react";

const Jewelry = () => {
    const [jeweleries, setJeweleries] = useState([]);
    const [pending, setPending] = useState(true);
    const jeweleryAll =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
        const data = await response.json();
        setJeweleries(data);
        setPending(false);
    }
    useEffect(() => {
        jeweleryAll();
    }, [])
    return ( 
        <div>
            {pending && <div className="loader"></div>}
            {
            jeweleries.length > 0 
            ? (
                <div className="product-container">
                    {jeweleries.map((jewelery) => (
                    <div className="product-card">
                        <p className="cartegory-text">{jewelery.category.toUpperCase()}</p>
                        <div className="image-container">
                           <img className="product-image"src={jewelery.image} alt=""/>
                        </div>
                        <div>
                           <h2 className="title-text">{jewelery.title}</h2>
                           <p className="description-text">{jewelery.description}</p>
                        </div>
                        <div className="price-text">
                           <p>Price: {'$' + jewelery.price}</p>
                        </div>
                        <div>
                           <button className="cart-button">Add To Cart</button>
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
 
export default Jewelry;