import React, { useContext, useState, useEffect } from "react";
import ProductCard from "../Home/ProductCard";
import "./Catalog.css";
import { ProductContext } from "../Context/ProductContext";
import Loader from "../Loader/Loader"; // Import the Loader component

function ProductList() {
    const { filteredProducts, loading } = useContext(ProductContext);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (loading) {
            setShowLoader(true);
        } else {
            const timeout = setTimeout(() => {
                setShowLoader(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [loading]);

    return (
        <div className="a-list">
            {showLoader ? (
                <Loader />
            ) : filteredProducts.length > 0 ? (
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
