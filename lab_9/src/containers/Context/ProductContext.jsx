import React, { createContext, useState, useEffect } from 'react';
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
    const [tempFilters, setTempFilters] = useState({ ...filters });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const priceRange = filters.priceRange ? filters.priceRange.split('-') : [undefined, undefined];
            const data = await getTrees({
                material: filters.material || undefined,
                color: filters.color || undefined,
                priceMin: priceRange[0] !== '' ? priceRange[0] : undefined,
                priceMax: priceRange[1] !== '' ? priceRange[1] : undefined,
                search: searchName || undefined,
            });
            console.log("Fetched Data: ", data);
            setProducts(data || []);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [filters, searchName]);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const checkPriceRange = (price, priceMin, priceMax) => {
            const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
            const minPrice = priceMin ? parseInt(priceMin, 10) : 0;
            const maxPrice = priceMax ? parseInt(priceMax, 10) : Infinity;
            return numericPrice >= minPrice && numericPrice <= maxPrice;
        };

        const filtered = products.filter((product) => {
            const isMaterialMatch = filters.material ? product.material === filters.material : true;
            const isColorMatch = filters.color ? product.color === filters.color : true;
            const isPriceMatch = filters.priceRange
                ? checkPriceRange(product.price, filters.priceRange.split('-')[0], filters.priceRange.split('-')[1])
                : true;
            const isSearchMatch = product.name
                .toLowerCase()
                .includes(searchName.toLowerCase());
            return isMaterialMatch && isColorMatch && isPriceMatch && isSearchMatch;
        });

        setFilteredProducts(filtered);
        console.log("Filtered Products: ", filtered);
    }, [filters, searchName, products]);

    const handleTempFilterChange = (filterName, value) => {
        setTempFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const applyFilters = () => {
        setFilters(tempFilters);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                searchName,
                setSearchName,
                filteredProducts,
                handleTempFilterChange,
                applyFilters,
                tempFilters,
                loading,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
