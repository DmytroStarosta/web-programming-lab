import React, { useContext } from "react";
import Filter from "./Filter";
import { ProductContext } from "../Context/ProductContext";
import './Catalog.css';
import CatalogButton from "./CatalogButton";

function CatalogHeader() {
    const { handleTempFilterChange, setSearchName } = useContext(ProductContext);

    const handleChange = (event) => {
        setSearchName(event.target.value);
    };
    
    return (
        <header className="catalog-header">
            <div className="filter__box">
                <Filter 
                    filterName="Material"
                    options={["PVC", "Tinsel", "PE"]}
                    onChange={(value) => handleTempFilterChange("material", value)}
                />
                <Filter 
                    filterName="Tree color"
                    options={["green", "lightgreen", "white"]}
                    onChange={(value) => handleTempFilterChange("color", value)}
                />
                <Filter 
                    filterName="Price range"
                    options={["0-299 $", "300-599 $", "600-999 $"]}
                    onChange={(value) => handleTempFilterChange("priceRange", value)}
                />
            </div>
            <input
                type="text"
                className="header__search-input"
                placeholder="Search..."
                onChange={handleChange}
            />
            
            <div className="catalog-button__container">
                <CatalogButton />
            </div>
        </header>
    );
}

export default CatalogHeader;
