import React from 'react';

function ProductCard({ title, description }) {
    return (
        <div className="element">
            <div className="element__img"></div>
            <div className="element__txt">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProductCard;