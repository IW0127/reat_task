import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllProduct } from '../../slices/product';
import ProductList from './ProductList';

const Product = () => {
  const allProduct = useSelector(getAllProduct);
  // const [totalPrice, setTotalPrice] = useState(1);
  const [count, setCount] = useState(1);
  const product = allProduct.map((prod, key) => (
    <ProductList key={key} prod={prod} />
  ));

  return (
    <div className='d-flex flex-column align-items-center my-5'>
      <div className='input-group' style={{ width: '17%' }}>
        <button
          className='btn btn-primary'
          type='button'
          aria-expanded='false'
          onClick={() => count > 1 && setCount(count - 1)}
          disabled={count === 1}
        >
          <i className='fa-solid fa-minus'></i>
        </button>

        <label className='form-control text-center'>{count}</label>

        <button
          className='btn btn-primary'
          type='button'
          aria-expanded='false'
          onClick={() => setCount(count + 1)}
        >
          <i className='fa-solid fa-plus'></i>
        </button>
      </div>
      <div className='overflow-auto w-100' style={{ maxHeight: '500px' }}>
        {product}
      </div>
      <div>Total : ₹ 296.00</div>
    </div>
  );
};

export default Product;
