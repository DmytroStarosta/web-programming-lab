import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import Logo from "../Logo";
import "./header.css";

function Header({ headerClass }) {
    const location = useLocation();

    return (
        <header className={headerClass}>
            <Logo className="header__logo" />  
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li><Link to="/" className="header__nav-link">Home</Link></li>      
                    <li><Link to="/catalog" className="header__nav-link">Catalog</Link></li>
                    <li><Link to="/cart" className="header__nav-link">Cart</Link></li>
                </ul>
            </nav>
            {location.pathname === "/catalog" && (
                <input 
                    type="text" 
                    className="header__search-input" 
                    placeholder="Search..." 
                />
            )}
        </header>
    );
}

export default Header;
