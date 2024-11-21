import React, { useContext } from "react";
import Filter from "./Filter";
import { ProductContext } from "../Context/ProductContext";
import CatalogButton from "./CatalogButton";
import './Catalog.css';

function CatalogHeader() {
    const { handleFilterChange } = useContext(ProductContext);
    const { setSearchName } = useContext(ProductContext);

    const handleChange = (event) => {
        setSearchName(event.target.value);
        console.log("Search input value:", event.target.value);
    };
    
    return (
        <header className="catalog-header">
            

            <div className="filter__box">
                <Filter 
                    filterName="Material"
                    options={["PVC", "Tinsel", "PE"]}
                    onChange={(value) => handleFilterChange("material", value)}
                />
                <Filter 
                    filterName="Tree color"
                    options={["green", "lightgreen", "white"]}
                    onChange={(value) => handleFilterChange("color", value)}
                />
                <Filter 
                    filterName="Price range"
                    options={["0-299 $", "300-599 $", "600-999 $"]}
                    onChange={(value) => handleFilterChange("priceRange", value)}
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