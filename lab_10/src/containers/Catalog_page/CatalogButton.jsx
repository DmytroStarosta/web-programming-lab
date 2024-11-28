import React, { useContext } from 'react';
import './Catalog.css';
import { ProductContext } from '../Context/ProductContext';

const CatalogButton = () => {
    const { applyFilters } = useContext(ProductContext);

    const handleClick = () => {
        applyFilters();
    };

    return (
        <button className="apply__button" onClick={handleClick}>
            Apply
        </button>
    );
};

export default CatalogButton;
