import React from "react";
import Filter from "./Filter";
import CatalogButton from "./CatalogButton";
import './Catalog.css';

function CatalogHeader() {
    return (
        <header className="catalog-header">
            <div className="filter__box">
                <Filter 
                    filterName = "Filter 1"
                />
                <Filter
                    filterName = "Filter 2"
                />
                <Filter 
                    filterName = "Filter 3"
                />
            </div>
            <div className="catalog-button__container">
                <CatalogButton />
            </div>
        </header>
    );
}

export default CatalogHeader;
