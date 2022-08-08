import React from 'react';
import Timer from './Timer';
import Product from './Product';

const Container = () => {
  return (
    <div className='col p-4 m-3'>
      <Timer />
      <Product />
    </div>
  );
};

export default Container;
