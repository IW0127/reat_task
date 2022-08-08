import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTimer, startTimer } from '../slices/timer';
const Timer = () => {
  const time = useSelector(selectTimer);
  const dispatch = useDispatch();
  const count = () => {
    dispatch(startTimer());
  };

  useEffect(() => {
    const countTimer = setInterval(count, 1000);
    return () => {
      clearInterval(countTimer);
    };
  }, []);

  const content = Object.entries(time).map(([key, value]) => (
    <div
      className='d-flex flex-column justify-content-center p-2 rounded-7 shadow-3-strong text-center'
      style={{ width: '90px', height: '90px' }}
      key={key}
    >
      <div>{value}</div>
      <b>{key}</b>
    </div>
  ));

  return (
    <div className='d-flex flex-wrap justify-content-around w-50 m-auto'>
      {content}
    </div>
  );
};

export default Timer;
