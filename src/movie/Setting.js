import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Setting = () => {
  const options = [
    '',
    'Hide Ticket',
    'show message and disable Book Now Button',
    'Hide only Timer',
    'Timer end then restart timer',
    'Remove discount',
  ];
  return (
    <div className='container d-flex align-items-center flex-column'>
      <form className='w-50'>
        <div className='mb-3'>
          <label htmlFor='selectOption' className='form-label'>
            Offer Numbers
          </label>
          <select
            class='form-select'
            id='selectOption'
            aria-label='Default select example'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Day
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Hours
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Minutes
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='seconds' className='form-label'>
            Seconds
          </label>
          <input
            type='text'
            className='form-control'
            id='seconds'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='selectOption' className='form-label'>
            Set Error
          </label>
          <select
            class='form-select'
            id='selectOption'
            aria-label='Default select example'
          >
            {options.map((option, id) => (
              <option key={id} value={id}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button type='button' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Setting;
