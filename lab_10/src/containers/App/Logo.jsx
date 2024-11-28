import React from "react";
import "../App/Header/header.css"

function Logo({ className }) {
    return (
        <div className={className}>
            <img 
                src="https://st3.depositphotos.com/1432405/15944/v/450/depositphotos_159445972-stock-illustration-spruce-icon-circle.jpg" 
                alt="Logo of market" 
            />
        </div>
    );
}

export default Logo;