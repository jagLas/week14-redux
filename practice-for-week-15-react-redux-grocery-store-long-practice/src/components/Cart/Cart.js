import CartItem from './CartItem';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartItems, removeFromCart } from '../../store/cart';
import { useEffect } from 'react';

function Cart() {
//  useEffect(() => {

//  }, [cartItems])

  const dispatch = useDispatch();

  const cartItems = useSelector(getAllCartItems)

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );

    cartItems.forEach(item => dispatch(removeFromCart(item.id)))
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;