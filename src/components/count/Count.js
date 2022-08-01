import React, { memo, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  let number = [];
  for (let i = 1; i <= count * 2; i++) number.push(i);
  return (
    <div className='container my-3 text-center'>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-primary' onClick={decrement}>
          <i className='fa-solid fa-minus'></i>
        </button>
        <b className='m-4'> {count} </b>
        <button className='btn btn-primary' onClick={increment}>
          <i className='fa-solid fa-plus'></i>
        </button>
      </div>
      <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
        {number.join()}
      </div>
    </div>
  );
};

export default Count;
