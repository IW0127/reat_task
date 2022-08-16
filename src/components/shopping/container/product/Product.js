import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementQuantity,
  getAllProduct,
  getQuantity,
  getTotal,
  incrementQuantity,
} from '../../slices/product';
import ProductList from './ProductList';

const Product = () => {
  const allProduct = useSelector(getAllProduct);
  const quantity = useSelector(getQuantity);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();

  const product = useMemo(
    () => allProduct.map((prod, key) => <ProductList key={key} prod={prod} />),
    [allProduct]
  );
  return (
    <div className='d-flex flex-column align-items-center my-5'>
      {allProduct.length > 0 && (
        <div className='input-group' style={{ width: '17%' }}>
          <button
            className='btn btn-primary'
            type='button'
            aria-expanded='false'
            onClick={() => dispatch(decrementQuantity())}
            disabled={quantity === 1}
          >
            <i className='fa-solid fa-minus'></i>
          </button>

          <label className='px-3 py-1 border'>{quantity}</label>

          <button
            className='btn btn-primary'
            type='button'
            aria-expanded='false'
            onClick={() => dispatch(incrementQuantity())}
          >
            <i className='fa-solid fa-plus'></i>
          </button>
        </div>
      )}
      <div className='overflow-auto w-100' style={{ maxHeight: '500px' }}>
        {product}
      </div>
      {allProduct.length > 0 && <div>Total : ₹ {total * quantity}</div>}
    </div>
  );
};

export default Product;
