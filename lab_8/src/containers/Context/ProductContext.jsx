import React, { createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [searchName, setSearchName] = useState('');

    const [products, setProducts] = useState([
        { 
            id: 1,
            number: "Item 1",
            name: "Winter Bliss", 
            material: "PVC",
            color: "green",
            description: "A traditional 8-foot fir tree that offers a full silhouette and authentic look, ideal for both indoor and outdoor decorations.", 
            price: "$ 678" 
        },
        { 
            id: 2,
            number: "Item 2", 
            name: "Snowy Elegance", 
            material: "Tinsel",
            color: "lightgreen",
            description: "A stunning 7-foot tall Christmas tree with realistic foliage and easy-to-assemble branches, perfect for creating a festive atmosphere.", 
            price: "$ 534" 
        },
        { 
            id: 3,
            name: "Classic Fir",
            number: "Item 3",
            material: "PE",
            color: "green",
            description: "This 6.5-foot tree features snow-dusted branches and comes pre-lit with adding a magical touch to your holiday decor.",
            price: "$ 432" 
        },
        {
            id: 4,
            number: "Item 4",
            name: "Rustic Cedar",
            material: "PVC",
            color: "green",
            description: "An 8-foot rustic cedar tree, featuring lifelike branches and a natural look that brings the beauty of the outdoors inside.",
            price: "$ 259"
        },
        {
            id: 5,
            number: "Item 5",
            name: "Frosted Majesty",
            material: "PE",
            color: "white",
            description: "A luxurious 9-foot frosted tree with dense, snowy branches and pre-lit LED lights for a grand festive display.",
            price: "$ 799"
        },
        {
            id: 6,
            number: "Item 6",
            name: "Arctic Glow",
            material: "PVC",
            color: "white",
            description: "An elegant 7.5-foot tree with pure white branches, designed to brighten your holiday with a minimalist aesthetic.",
            price: "$ 650"
        },
        {
            id: 7,
            number: "Item 7",
            name: "Crystal Snow",
            material: "Tinsel",
            color: "white",
            description: "A dazzling 8-foot tinsel tree featuring shimmering white branches, perfect for modern holiday decor.",
            price: "$ 127"
        },
        {
            id: 8,
            number: "Item 8",
            name: "Polar Charm",
            material: "PE",
            color: "white",
            description: "A pre-lit 10-foot Christmas tree with snowy tips and a realistic design that makes it the centerpiece of your celebrations.",
            price: "$ 899"
        },
        {
            id: 9,
            number: "Item 9",
            name: "Snow Queen",
            material: "PVC",
            color: "white",
            description: "An 8.5-foot Christmas tree with frosty white branches, offering a magical winter wonderland theme for your home.",
            price: "$ 400"
        },
        {
            id: 10,
            number: "Item 10",
            name: "White Serenity",
            material: "PE",
            color: "white",
            description: "A 9-foot majestic tree with soft, snowy branches, providing an elegant look to complement any holiday decor.",
            price: "$ 670"
        },
        {
            id: 11,
            number: "Item 11",
            name: "Winter Radiance",
            material: "Tinsel",
            color: "white",
            description: "A 7.5-foot tree with bright white branches and a shimmering finish, perfect for creating a bold holiday statement.",
            price: "$ 720"
        },
        {
            id: 12,
            number: "Item 12",
            name: "Glacial Elegance",
            material: "PVC",
            color: "white",
            description: "A 10-foot premium tree with snowy white branches and robust construction for lasting holiday joy.",
            price: "$ 220"
        }        
    ]);
    
    const [filters, setFilters] = useState({
        material: "",
        color: "",
        priceRange: "",
    });

    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (filterName, value) => {
        console.log(`Filter changed: ${filterName} = ${value}`);
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

    useEffect(() => {
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
        console.log("Changes in filtration:", filtered)
    }, [filters, searchName, products]);

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                searchName,
                setSearchName,
                filteredProducts,
                handleFilterChange
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
