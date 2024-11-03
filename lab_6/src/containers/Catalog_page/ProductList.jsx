import React from "react";
import ProductCard from "../Home/ProductCard";

function ProductList({products}) {
    return (
        <div className="product-list">
        {products.map((product) => (
            <ProductCard 
                key={product.id} 
                title={product.title} 
                description={product.description} 
            />
        ))}
    </div>
    )
}

export default ProductList