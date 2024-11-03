import React from "react";
import '../Home/Home_styles.css';
import ProductCard from "./ProductCard";
import Button from "../App/Button";

function Home() {
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
                    <ProductCard 
                        name="Classic Fir"
                        description="A traditional 8-foot fir tree that offers a full silhouette and authentic look, ideal for both indoor and outdoor decorations."
                        showButton={false}
                        className="element"
                    />
                    <ProductCard 
                        name="Snowy Elegance" 
                        description="A stunning 7-foot tall Christmas tree with realistic foliage and easy-to-assemble branches, perfect for creating a festive atmosphere."
                        showButton={false}
                        className="element"
                    />
                    <ProductCard 
                        name="Winter Bliss" 
                        description="This 6.5-foot tree features snow-dusted branches and comes pre-lit with warm white LED lights, adding a magical touch to your holiday decor."
                        showButton={false}
                        showNumber={false}
                        className="element"
                    />
                </div>
                <div className="button__container">
                     <Button className="view-all__button" />
                </div>
            </div>
        </div>
    );
}

export default Home;
