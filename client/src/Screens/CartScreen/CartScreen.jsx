import React, { useEffect } from "react";
import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../../Components/CartItem/CartItem";

// // Actions
// import { addToCart, removeFromCart } from "../../Redux/Actions/cartActions";

const CartScreen = () => {
  //   const dispatch = useDispatch();

  //   const cart = useSelector(state => state.cart);
  //   const { cartItems } = cart;

  //   useEffect(() => {}, []);

  //   const qtyChangeHandler = (id, qty) => {
  //     dispatch(addToCart(id, qty));
  //   };

  //   const removeFromCartHandler = id => {
  //     dispatch(removeFromCart(id));
  //   };

  //   const getCartCount = () => {
  //     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  //   };

  //   const getCartSubTotal = () => {
  //     return cartItems
  //       .reduce((price, item) => price + item.price * item.qty, 0)
  //       .toFixed(2);
  //   };

  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
    // <div className='cartscreen'>
    //   <div className='cartscreen__left'>
    //     <h2>Shopping Cart</h2>

    //     {cartItems.length === 0 ? (
    //       <div>
    //         Your Cart Is Empty <Link to='/'>Go Back</Link>
    //       </div>
    //     ) : (
    //       cartItems.map(item => (
    //         <CartItem
    //           key={item.product}
    //           item={item}
    //           qtyChangeHandler={qtyChangeHandler}
    //           removeHandler={removeFromCartHandler}
    //         />
    //       ))
    //     )}
    //   </div>

    //   <div className='cartscreen__right'>
    //     <div className='cartscreen__info'>
    //       <p>Subtotal ({getCartCount()}) items</p>
    //       <p>${getCartSubTotal()}</p>
    //     </div>
    //     <div>
    //       <button>Proceed To Checkout</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CartScreen;
