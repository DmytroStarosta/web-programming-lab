import React from 'react';
import ProductList from './ProductList';
import CatalogHeader from './CatalogHeader';



function CatalogPage() {
    const products = [
        { 
            id: 1,
            number: "Item 1",
            name: "Winter Bliss", 
            description: "A traditional 8-foot fir tree that offers a full silhouette and authentic look, ideal for both indoor and outdoor decorations.", 
            price: "$ 100" 
        },
        { 
            id: 2,
            number: "Item 2", 
            name: "Snowy Elegance", 
            description: "A stunning 7-foot tall Christmas tree with realistic foliage and easy-to-assemble branches, perfect for creating a festive atmosphere.", 
            price: "$ 534" 
        },
        { 
            id: 3,
            name: "Classic Fir",
            number: "Item 3",
            description: "This 6.5-foot tree features snow-dusted branches and comes pre-lit with adding a magical touch to your holiday decor.",
            price: "$ 432" 
        },
        {
            id: 4,
            number: "Item 4",
            name: "Rustic Cedar",
            description: "An 8-foot rustic cedar tree, featuring lifelike branches and a natural look that brings the beauty of the outdoors inside.",
            price: "$ 259"
        },
    ];

    return (
        <div>
            <CatalogHeader />
            <ProductList products={products} />
        </div>
    );
}

export default CatalogPage;
