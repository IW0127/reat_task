import React from 'react';

const ProductList = ({
  prod: { productImg, productName, comperePrice, productPrice },
}) => {
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
              <p className='card-text'>Total : ₹ 296.00 </p>
            </div>
            <div className='position-absolute top-0 end-0 mt-1 '>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkboxNoLabel'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
