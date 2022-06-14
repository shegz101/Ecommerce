import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs'

const Header = () => {
    return ( 
        <div className="Header-section" fixed='top'>
            <div>
                <p className="product-name">Products</p>
            </div>

            <nav className="nav-links">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/electronics">
                <p>Electronics</p>
              </Link>
              <Link to="/jewelry">
                <p>Jewelery</p>
              </Link>
              <Link to="/men">
                <p>Men</p>
              </Link>
              <Link to="/women">
                <p>Women</p>
              </Link>
            </nav>

            <div>
                <p className="cart-icon"><BsCartPlusFill/></p>
                <div className="cart-item"><span>0</span></div>
            </div>
        </div>
     );
}
 
export default Header;