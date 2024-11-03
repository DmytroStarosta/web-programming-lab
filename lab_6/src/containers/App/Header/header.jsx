import React from "react";
import "./header.css"
import { Link } from "react-router-dom"; 
import Logo from "../Logo";

function Header() {
    return (
        <header>
            <Logo className="header__logo" />  
            <nav className = "header__nav">
                <ul className = "header__nav-list">
                    <li><Link to="/" className="header__nav-link">Home</Link></li>      
                    <li><Link to="/catalog" className="header__nav-link">Catalog</Link></li>
                    <li><Link to="/cart" className="header__nav-link">Cart</Link></li>
                </ul>
            </nav>
        </header>
    )  
}

export default Header;