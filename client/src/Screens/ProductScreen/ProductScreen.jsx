import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className='productsscreen'>
      <div className='productscreen__left'>
        <div className='left__image'>
          <img src='' alt='' />
        </div>
        <div className='left__info'>
          <div className='left__name'>Product 1</div>
          <p>Price: $499</p>
          <p>Description 1</p>
        </div>
      </div>
      <div className='productscreen__right'>
        <div className='right__info'>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select name='' id=''>
              <option value='1' className=''>
                1
              </option>
              <option value='2' className=''>
                2
              </option>
              <option value='3' className=''>
                3
              </option>
              <option value='4' className=''>
                4
              </option>
            </select>
          </p>
          <p>
            <button type='button'>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductScreen;
