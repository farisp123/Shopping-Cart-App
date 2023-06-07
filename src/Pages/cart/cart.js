import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './cart.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, resetCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleCheckout = () => {
    toast.success('Purchased Successfully'); // Show toast message
    resetCart(); // Reset cart state
  };

  const navigate = useNavigate();

  return (
    <div className='cart'>
      {Object.values(cartItems).some((item) => item !== 0) && (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      )}
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      <ToastContainer />
    </div>
  );
};
