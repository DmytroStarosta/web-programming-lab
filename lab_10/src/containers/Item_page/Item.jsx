import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import "./Item_styles.css"

function ItemPage() {
    const { id } = useParams();
    const { products } = useContext(ProductContext);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="main">
            <div className="top__section">
                <div className="item__img">
                    <img className="element__img element__img-1" src={product.imageUrl} />
                </div>
                <div className="box">
                    <div className="characteristic__container">
                        <div className="characteristic">{product.material}</div>
                        <div className="characteristic">{product.color}</div>
                    </div>
                    <div className="txt__container">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="select__menues">
                        <div className="select__field">
                            <label>Countable field</label>
                            <select>
                            </select>
                        </div>
                        <div className="select__field">
                            <label>Selectable field</label>
                            <select>
                                <option value="" disabled selected>Select</option>
                                <option value="1">Item 1</option>
                                <option value="2">Item 2</option>
                                <option value="3">Item 3</option>
                                <option value="4">Item 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__section">
                <div className="item__price">
                    Price: {product.price}
                </div>
                <div className="button__container">
                    <NavLink to="/catalog">
                        <button className="item__page-button">Go back</button>
                    </NavLink>
                    <button className="item__page-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;
