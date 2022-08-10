import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { secondsToTime, Timer, updateTimer } from '../slices/timer';

const TimerSidebar = () => {
  const time = secondsToTime(useSelector(Timer));
  const dispatch = useDispatch();
  const [changeInput, setChangeInput] = useState(time);

  useEffect(() => {
    setChangeInput(time);
  }, []);

  const handelOnChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setChangeInput({ ...changeInput, [e.target.name]: value });
    }
  };
  const handelOnClick = () => {
    try {
      const timeToSecond =
        changeInput.Days * 86400 +
        changeInput.Hours * 60 * 60 +
        changeInput.Minutes * 60 +
        changeInput.Seconds;
      dispatch(updateTimer({ id: 1, seconds: timeToSecond })).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-3'>
      <h3 className='text-center mb-3'>Timer</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          name='Days'
          onChange={handelOnChange}
          value={changeInput.Days}
          placeholder='Days'
        />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='Hours'
          name='Hours'
          onChange={handelOnChange}
          value={changeInput.Hours}
        />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='Minutes'
          name='Minutes'
          onChange={handelOnChange}
          value={changeInput.Minutes}
        />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='Seconds'
          name='Seconds'
          onChange={handelOnChange}
          value={changeInput.Seconds}
        />
      </div>
      <button className='btn btn-success w-100' onClick={handelOnClick}>
        Submit
      </button>
    </div>
  );
};

export default TimerSidebar;
