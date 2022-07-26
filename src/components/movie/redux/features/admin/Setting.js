import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieTicketById,
  selectMovieTicketIds,
  useUpdateTimeMutation,
} from './settingSlice';

const Setting = () => {
  const [optionId, setOptionId] = useState(1);
  const [ticketTimer, setTicketTimer] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [onChangeTimer, setOnChangeTimer] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    error: 0,
  });

  const movieTicketId = useSelector((state) =>
    selectMovieTicketById(state, optionId)
  );

  const [updateTime, { isLoading }] = useUpdateTimeMutation();

  const movieTicketIds = useSelector(selectMovieTicketIds);

  const time = movieTicketId?.time ?? 0;
  const daySeconds = 86400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;

  useMemo(() => {
    setTicketTimer(() => ({
      ...ticketTimer,
      day: Math.floor(time / daySeconds),
      hour: Math.floor((time - ticketTimer.day * daySeconds) / hourSeconds),
      minute: Math.floor(
        (time - ticketTimer.day * daySeconds - ticketTimer.hour * hourSeconds) /
          minuteSeconds
      ),
      second:
        time -
        ticketTimer.day * daySeconds -
        ticketTimer.hour * hourSeconds -
        ticketTimer.minute * minuteSeconds,
    }));
    setOnChangeTimer({ ...ticketTimer, error: movieTicketId?.error });
  }, [
    movieTicketId,
    ticketTimer.day,
    ticketTimer.hour,
    ticketTimer.minute,
    ticketTimer.second,
  ]);

  const options = [
    '',
    'Hide Ticket',
    'show message and disable Book Now Button',
    'Hide only Timer',
    'Timer end then restart timer',
    'Remove discount',
  ];

  const onChangeTicketOption = (e) => {
    setOptionId(e.target.value);
  };

  const onChangeDay = (e) => {
    setOnChangeTimer({ ...onChangeTimer, day: Number(e.target.value) });
  };
  const onChangeHour = (e) => {
    setOnChangeTimer({ ...onChangeTimer, hour: Number(e.target.value) });
  };
  const onChangeMinute = (e) => {
    setOnChangeTimer({ ...onChangeTimer, minute: Number(e.target.value) });
  };
  const onChangeSecond = (e) => {
    setOnChangeTimer({ ...onChangeTimer, second: Number(e.target.value) });
  };
  const onChangeError = (e) => {
    setOnChangeTimer({ ...onChangeTimer, error: Number(e.target.value) });
  };
  const canSave =
    (ticketTimer.day !== onChangeTimer.day ||
      ticketTimer.hour !== onChangeTimer.hour ||
      ticketTimer.minute !== onChangeTimer.minute ||
      ticketTimer.second !== onChangeTimer.second ||
      movieTicketId?.error !== onChangeTimer.error) &&
    !isLoading;

  const onClickSubmit = async (e) => {
    e.preventDefault();
    const time =
      onChangeTimer.day * 86400 +
      onChangeTimer.hour * 60 * 60 +
      onChangeTimer.minute * 60 +
      onChangeTimer.second;
    try {
      await updateTime({
        ...movieTicketId,
        time: time,
        error: onChangeTimer.error,
      }).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const ticketOption = movieTicketIds.map((ticketId) => (
    <option value={ticketId} key={ticketId}>
      {ticketId}
    </option>
  ));

  return (
    <div className='container d-flex align-items-center flex-column'>
      <form className='w-50'>
        <div className='mb-3'>
          <label htmlFor='selectOption' className='form-label'>
            Offer Numbers
          </label>
          <select
            className='form-select '
            id='selectOption'
            aria-label='Default select example'
            onChange={onChangeTicketOption}
          >
            {ticketOption}
          </select>
        </div>

        <div className='mb-3'>
          <label htmlFor='validationServer03Feedback' className='form-label'>
            Day
          </label>
          <input
            type='text'
            className='form-control is-invalid'
            id='validationServer03Feedback'
            aria-describedby='emailHelp'
            value={onChangeTimer.day}
            onChange={onChangeDay}
          />
          <div id='validationServer03Feedback' className='invalid-feedback'>
            Please provide a valid city.
          </div>
        </div>

        <div className='my-4'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Hours
          </label>
          <input
            type='text'
            className='form-control '
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={onChangeTimer.hour}
            onChange={onChangeHour}
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
            value={onChangeTimer.minute}
            onChange={onChangeMinute}
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
            value={onChangeTimer.second}
            onChange={onChangeSecond}
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
            value={onChangeTimer?.error}
            onChange={onChangeError}
          >
            {options.map((option, id) => (
              <option key={id} value={id}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          type='submit'
          onClick={onClickSubmit}
          className='btn btn-primary'
          disabled={!canSave}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Setting;
