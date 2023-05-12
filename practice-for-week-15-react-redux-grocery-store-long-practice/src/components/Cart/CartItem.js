import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart, subtractFromCart, setCartQty } from '../../store/cart';
import React from 'react';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e)=> setCount(e.target.value)}
          onBlur={(e) => {
            if (count === '') {
              setCount(item.count)
            } else {
              dispatch(setCartQty(item.id, count))
            }
          }}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(addToCart(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(subtractFromCart(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;