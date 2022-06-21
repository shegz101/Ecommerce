import React, {useState} from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "../Context/Cart/CartContext";
import { BsCartPlusFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { cartItems } = useStateValue();
    return ( 
        <div className="Header-section">
            <div>
              <div className="nav-div">
                <p onClick={() => setShowNav(!showNav)} className="nav-icon">
                  {
                    showNav !== true ? <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/> : <MdClear className="clear-nav" onClick={() => setShowNav(!showNav)}/>
                  }
                </p>
                <p className="product-name">Products</p>
              </div>
              <div className="resp-nav">
                {
                  showNav && (
                    <nav className="nav-link">
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
                  )
                }
              </div>
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