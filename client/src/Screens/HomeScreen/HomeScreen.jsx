import React from "react";
import "./HomeScreen.css";
import Product from "../../Components/Product/Product.jsx";

function HomeScreen() {
  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Products</h2>
      <div className='homescreen__products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomeScreen;
