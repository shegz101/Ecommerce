import React, {useState} from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "../Context/Cart/CartContext";
import { BsCartPlusFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { cartItems } = useStateValue();
    return ( 
        <div className="Header-section">
            <div className="nav-div">
              <p className="nav-icon"><GiHamburgerMenu/></p>
              <p className="product-name">Products</p>
            </div>

            <nav className="nav-links">
              <Link style={{textDecoration: 'none'}} to="/">
                <p>Home</p>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/electronics">
                <p>Electronics</p>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/jewelry">
                <p>Jewelery</p>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/men">
                <p>Men</p>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/women">
                <p>Women</p>
              </Link>
            </nav>
            
            <div>
              <Link to="/cart">
                <p onClick={() => setToggle(!toggle)} className="cart-icon"><BsCartPlusFill/></p>
              </Link>
              <div className="cart-item"><span>{cartItems?.length}</span></div>
            </div>
        </div>
     );
}
 
export default Header;