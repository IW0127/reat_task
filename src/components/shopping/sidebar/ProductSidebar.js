import React, { useState } from 'react';
import ProductAdd from './ProductAdd';

const ProductSidebar = () => {
  const [countProduct, setCountProduct] = useState(0);
  const product = [];
  for (let i = 1; i <= countProduct; i++) {
    product.unshift(<ProductAdd key={i} id={i} />);
  }
  return (
    <div className='m-auto position-relative'>
      <h3 className='text-center'>Products</h3>
      <div
        className='w-100 position-sticky top-0 bg-light'
        style={{ zIndex: '100000' }}
      >
        <button
          className='btn btn-success w-100 '
          onClick={() => setCountProduct(countProduct + 1)}
        >
          Add Product
        </button>
      </div>
      {product}
    </div>
  );
};

export default ProductSidebar;
