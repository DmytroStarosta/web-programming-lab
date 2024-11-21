import React, { createContext, useState, useEffect} from 'react';
import { getTrees } from "../../Api/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [searchName, setSearchName] = useState('');
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        material: '',
        color: '',
        priceRange: '',
    });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const data = await getTrees();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const checkPriceRange = (price, priceRange) => {
            const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
            if (priceRange === '0-299 $') return numericPrice >= 0 && numericPrice <= 299;
            if (priceRange === '300-599 $') return numericPrice >= 300 && numericPrice <= 599;
            if (priceRange === '600-999 $') return numericPrice >= 600 && numericPrice <= 999;
            return false;
        };

        const filtered = products.filter((product) => {
            const isMaterialMatch = filters.material ? product.material === filters.material : true;
            const isColorMatch = filters.color ? product.color === filters.color : true;
            const isPriceMatch = filters.priceRange
                ? checkPriceRange(product.price, filters.priceRange)
                : true;
            const isSearchMatch = product.name
                .toLowerCase()
                .includes(searchName.toLowerCase());
            return isMaterialMatch && isColorMatch && isPriceMatch && isSearchMatch;
        });

        setFilteredProducts(filtered);
    }, [filters, searchName, products]);

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                searchName,
                setSearchName,
                filteredProducts,
                handleFilterChange,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};