import React from 'react';
import './Catalog.css'

const CatalogButton = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button className="apply__button" onClick={handleClick}>
            Apply
        </button>
    );
};

export default CatalogButton;
