/*import React, { createContext, useState, useContext } from "react";
import { ProductContext } from "./ProductContext";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const { products } = useContext(ProductContext);



    const [filters, setFilters] = useState({ material: "",color: "", priceRange: "" });

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const checkPriceRange = (price, priceRange) => {
        const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);
        if (priceRange === "0-299 $") return numericPrice >= 0 && numericPrice <= 299;
        if (priceRange === "300-599 $") return numericPrice >= 300 && numericPrice <= 599;
        if (priceRange === "600-999 $") return numericPrice >= 600 && numericPrice <= 999;
        return false;
    };

    const filteredProducts = products.filter((product) => {
        const isMaterialMatch = filters.material ? product.material === filters.material : true;
        const isColorMatch = filters.color ? product.color === filters.color : true;
        const isPriceMatch = filters.priceRange ? checkPriceRange(product.price, filters.priceRange) : true;
        return isMaterialMatch && isPriceMatch && isColorMatch;
    });

    return (
        <FilterContext.Provider value={{ filteredProducts, handleFilterChange }}>
            {children}
        </FilterContext.Provider>
    );
};*/
