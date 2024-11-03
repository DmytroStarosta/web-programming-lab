import React from 'react';
import '../Home/Home_styles.css';
import Button from '../App/Button';

function ProductCard({ name, number, description, price, showButton, showNumber, className }) {
    return (
        <div className={className}>
            {showNumber && <div className="number__txt">{number}</div>}
            <div className="element__img"></div>
            <div className="element__txt">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="price__container">
                    <h3>Price:</h3>
                    <p>{price}</p>
                </div>
                <div className="el-button_container">
                    {showButton && <Button className="view-all__button-2" />}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
