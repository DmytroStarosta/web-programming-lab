import React, { useContext } from "react";
import ProductCard from "../Home/ProductCard";
import "./Catalog.css";
import { ProductContext } from "../Context/ProductContext";


function ProductList() {
    const { filteredProducts }  = useContext(ProductContext);
    console.log("Product list have:", filteredProducts)

    return (
        <div className="a-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    
                    <div className="element__container" key={product.id}>
                        <ProductCard
                            id={product.id}
                            number={product.number}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            material={product.material}
                            color={product.color}
                            description={product.description}
                            price={product.price}
                            showMaterial={true}
                            showColor={true}
                            showButton={true}
                            showNumber={true}
                            showPrice={true}
                            className="element-2"
                        />
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
    
}

export default ProductList;
