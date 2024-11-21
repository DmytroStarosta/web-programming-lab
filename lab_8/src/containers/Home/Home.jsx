import React, { useState } from "react";
import '../Home/Home_styles.css';
import ProductCard from "./ProductCard";
import Button from "../App/Button";

function Home() {
    const [showAll, setShowAll] = useState(false);
    
    const products = [
        { 
            id: 1,
            name: "Classic Fir",
            description: "A traditional 8-foot fir tree that offers a full silhouette and authentic look, ideal for both indoor and outdoor decorations."
        },
        { 
            id: 2,
            name: "Snowy Elegance", 
            description: "A stunning 7-foot tall Christmas tree with realistic foliage and easy-to-assemble branches, perfect for creating a festive atmosphere."
        },
        { 
            id: 3,
            name: "Winter Bliss", 
            description: "This 6.5-foot tree features snow-dusted branches and comes pre-lit with warm white LED lights, adding a magical touch to your holiday decor."
        },
        { 
            id: 4,
            name: "Rustic Cedar", 
            description: "An 8-foot rustic cedar tree, featuring lifelike branches and a natural look that brings the beauty of the outdoors inside."
        },
        { 
            id: 5,
            name: "Snowfall Pines", 
            description: "A beautiful 7.5-foot snow-covered pine tree that creates a serene winter scene for any home."
        },
        { 
            id: 6,
            name: "Frosted Spruce", 
            description: "A 7-foot tall spruce tree covered in a light dusting of snow, perfect for creating a winter wonderland at home."
        },
    ];

    const handleViewMore = () => {
        setShowAll(true);
    };

    const handleViewMoreBack = () => {
        setShowAll(false);
    };

    return (
        <div className="main__section">
            <div className="main__top">
                <img src="https://merry-christmas.com.ua/wp-content/themes/tree/images/elka.png" alt="Christmas Tree" />
                <div className="main__top-txt">
                    <h1>Christmas tree shop</h1>
                    <p>Welcome to our online Christmas tree store! We offer a wide selection of real and artificial trees in various sizes and styles, as well as decorations to create a unique festive atmosphere. Here, you will find high-quality trees that will bring warmth to your home. Order online and enjoy fast delivery right to your doorstep!</p>
                </div>
            </div>
            <div className="main__bottom">
                <div className="element__container">
                    {(showAll ? products : products.slice(0, 3)).map((product) => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            showMaterial={false}
                            showColor={false}
                            description={product.description}
                            showButton={false}
                            showPrice={false}
                            className="element"
                        />
                    ))}
                </div>
                <div className="button__container">
                    {!showAll && <Button className="button_sleep" onClick={гг} />}
                    {showAll && <Button className="button_sleep" onClick={handleViewMoreBack} />}
                </div>
            </div>
        </div>
    );
}

export default Home;
