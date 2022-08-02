import React, { useState } from 'react';

const CountOnclick = () => {
  const [count, setCount] = useState([1]);
  const clickIncrement = (e) => {
    const numId = Number(e.target.dataset.id) * 2;
    const numArr = [];
    const start = count[count.length - 1] + 1;
    for (let i = start; i <= numId; i++) {
      numArr.push(i);
    }
    setCount([...count, ...numArr]);
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
