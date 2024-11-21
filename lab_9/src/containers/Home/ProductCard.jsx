import React from "react";
import "../Home/Home_styles.css";
import Button from "../App/Button";
import { NavLink } from "react-router-dom";

function ProductCard({ id, name, number, imageUrl, material, description, color, price, showButton, showNumber, className, showMaterial, showColor, showPrice }) {
    return (
        <div className={className}>
            {showNumber && <div className="number__txt">{number}</div>}
            <div className="element__img">
                <img src={imageUrl} className="element__img" />
            </div>
            <div className="element__txt">
                <h2>{name}</h2>
                {showMaterial && (
                    <div className="material__container">
                        <h4>Material: </h4>
                        <p>{material}</p>
                    </div>
                )}
                {showColor && (
                    <div className="color__container">
                        <h4>Color:</h4>
                        <p>{color}</p>
                    </div>
                )}
                <p>{description}</p>
                {showPrice && (
                    <div className="price__container">
                        <h3>Price:</h3>
                        <p>{price}</p>
                    </div>
                )}
                <div className="el-button_container">
                    {showButton && (
                        <NavLink to={`/Item/${id}`}>
                            <Button className="view-all__button-2" />
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
