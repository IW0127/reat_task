import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import secondCoveter from './secondCoveter';
import { selectMovieTicketIds, useGetTimeQuery } from './settingSlice';

const Setting = () => {
  const [optionId, setOptionId] = useState(1);

  const movieTicketIds = useSelector(selectMovieTicketIds);

  const { day, hour, minute, second } = secondCoveter(optionId);
  console.log(day);

  const onChangeTicketOption = (e) => {
    setOptionId(Number(e.target.value));
  };

  const ticketOption = movieTicketIds.map((ticketId) => (
    <option value={ticketId} key={ticketId}>
      {ticketId}
    </option>
  ));

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
            className='form-select'
            id='selectOption'
            aria-label='Default select example'
            onChange={onChangeTicketOption}
          >
            {ticketOption}
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
            className='form-select'
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
