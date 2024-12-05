import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../redux/actions";
import "../Cart_page/cart.css";
import { NavLink } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1 className="cart__header">Shopping Cart</h1>
      <div className="cart__elements">
        {cartItems.map((item) => (
          <div className="cart__element" key={item.id}>
            <img className="cart__img" src={item.imageUrl} alt={item.name} />
            <div className="cart__name">{item.name}</div>
            <div className="cart__counter">
              <button className="cart__crement" onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="cart__crement" onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <div className="cart__price">$ {item.price * item.quantity}</div>
            <button className="cart__remove" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart__summary">
        <h2>Total amount: ${totalAmount}</h2>
      </div>
      <div className="cart__actions">
        <NavLink to={"/catalog"}>
          <button className="cart__back">Back to Catalog</button>
        </NavLink>
        <NavLink to={"/checkout"}>
        <button className="cart__continue">Continue</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
