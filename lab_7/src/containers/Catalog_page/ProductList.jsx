import React from "react";
import ProductCard from "../Home/ProductCard";
import './Catalog.css';

function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="element__container">
                    <ProductCard 
                        key={product.id}
                        number = {product.number} 
                        name={product.name}
                        description={product.description} 
                        price={product.price}
                        showButton={true}
                        showNumber={true}
                        className="element-2"
                    />
                </div>
                
            ))}
        </div>
    );
}

export default ProductList;
