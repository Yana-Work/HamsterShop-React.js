import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delFromCart, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
import './Cart.scss'

const Cart = () => {

   const products = useSelector(state => state.cart.products);
   const dispatch = useDispatch();

   const totalPrice = () => {
      let total = 0;
      products.forEach(item => {
         total += item.quantity * item.price
      });
      return total.toFixed(2);
   };

   const stripePromise = loadStripe("pk_test_51NVdYQF3X7uGWE6yNJ5D050kBYIbGffQWlQfOkmojGC0XDxin85qiv4NM1PHyfkgEzuQxXfyvGsxTCfeKAPGq0KQ00DNqOhCzk");

   const handlePayment = async () => {
      try {
         const stripe = await stripePromise;
         const res = await makeRequest.post('/orders', {
            products,
         });

         const result = await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
         });

         if (result.error) {
            console.error('Checkout Error:', result.error);
         } else {
            dispatch(resetCart());
         }

      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className='cart'>
         <h2>Products in your cart</h2>
         {products?.map(item => (
            <div className='item' key={item.id}>
               <img
                  src={item.img}
                  alt=""
               />
               <div className='details'>
                  <h2>{item.title}</h2>
                  <p>{item.desc?.substring(0, 30)}</p>
                  <div className='price'>{item.quantity} x ${item.price}</div>
               </div>
               <DeleteOutlinedIcon
                  className='delete'
                  onClick={() => dispatch(delFromCart(item.id))}
               />
            </div>
         ))}
         <div className='total'>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
         </div>
         <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
         <span
            className='reset'
            onClick={() => dispatch(resetCart())}
         >
            Reset Cart</span>
      </div>
   );
};

export default Cart
