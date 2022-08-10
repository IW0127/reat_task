import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementTotal, incrementTotal } from '../../slices/product';
const ProductList = ({
  prod: { productImg, productName, comperePrice, productPrice, id },
}) => {
  const dispatch = useDispatch();
  const handelChange = (e) => {
    const check = e.target.checked;
    const itemId = Number(e.target.dataset.id);
    check ? dispatch(incrementTotal(itemId)) : dispatch(decrementTotal(itemId));
  };
  return (
    <div className='my-2'>
      <div
        className='card mb-3 m-auto shadow-3-strong'
        style={{ maxWidth: '400px' }}
      >
        <div className='row g-0'>
          <div className='col-md-6 p-1 m-auto'>
            <img
              src={productImg}
              alt='Trendy Pants and Shoes'
              className='img-fluid rounded-3 bg-black'
            />
          </div>
          <div className='col-md m-auto'>
            <div className='card-body  p-2'>
              <h5 className='card-title'>{productName}</h5>
              <p className='card-text my-2'>
                Price : ₹ {productPrice} (<del>₹{comperePrice}</del>)
              </p>
            </div>
            <div className='position-absolute top-0 end-0 mt-1 '>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkboxNoLabel'
                data-id={id}
                onChange={handelChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
