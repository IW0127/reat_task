import React, { useState } from 'react';

const CountOnclick = () => {
  const [count, setCount] = useState([1]);
  const clickIncrement = (e) => {
    const numId = Number(e.target.dataset.id) * 2;
    const numArr = [];
    for (let i = 1; i <= numId; i++) {
      numArr.push(i);
    }
    setCount([...numArr]);
  };
  return (
    <div>
      {count.map((value, key) => (
        <div
          className='btn btn-primary m-1 py-1'
          key={key}
          data-id={value}
          onClick={clickIncrement}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default CountOnclick;
