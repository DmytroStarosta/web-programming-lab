import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import './header.css';

const Header = ({ headerClass }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("password");
        navigate("/login");
    };

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
            <button 
                className="header__logout-button" 
                onClick={handleLogout}
            >
                Logout
            </button>
        </header>
    );
};

export default Header;
