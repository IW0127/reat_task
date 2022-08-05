import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const restAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className='text-center'>
      <h3 className='my-2'>{count}</h3>
      <button
        className='btn btn-success m-2'
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className='btn btn-success m-2'
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <div>
        <input
          type='text'
          value={incrementAmount}
          className=''
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button
          className='btn btn-success m-2'
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className='btn btn-success m-2' onClick={restAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
