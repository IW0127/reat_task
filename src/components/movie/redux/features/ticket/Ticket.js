import React, { useEffect, useMemo, useState } from 'react';
import img from '../../../img/images.png';
import {
  selectAllMovieTicket,
  selectMovieTicketById,
  useUpdateAllTimeMutation,
  useUpdateTimeMutation,
} from '../admin/settingSlice';
import { useSelector } from 'react-redux';

const Ticket = () => {
  const [movieTicketTimer, setMovieTicketTimer] = useState();
  const movieTicket = useSelector(selectAllMovieTicket);
  const [updateAllTime, { isLoading }] = useUpdateAllTimeMutation();

  /* const movieTicketId = useSelector((state) =>
    selectMovieTicketById(state, optionId)
  ); */
  const [offerClose, setOfferClose] = useState(false);
  const [timer, setTimer] = useState({
    day: 0,
    hours: '00',
    minutes: '00',
    seconde: '00',
  });

  const daySeconds = 86400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;
  useEffect(() => {
    const localData = [];
    movieTicket.map((setData) => {
      let day = Math.floor(setData.time / daySeconds);
      let hours = Math.floor((setData.time - day * daySeconds) / hourSeconds);
      let minutes = Math.floor(
        (setData.time - day * daySeconds - hours * hourSeconds) / minuteSeconds
      );
      let seconds =
        setData.time -
        day * daySeconds -
        hours * hourSeconds -
        minutes * minuteSeconds;

      if (day >= 0) {
        if (day < 10) {
          day = '0' + day;
        }
      }
      if (hours >= 0) {
        if (hours < 10) {
          hours = '0' + hours;
        }
      }
      if (minutes >= 0) {
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
      }
      if (seconds >= 0) {
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
      }
      localData.push({ day, hours, minutes, seconds });
    });
    localStorage.setItem('time', JSON.stringify(localData));
    if (localStorage.time !== [] && localStorage.time) {
      const time = JSON.parse(localStorage.time);
      setMovieTicketTimer(() => time);
      console.log(movieTicketTimer);
    }
  }, [movieTicket]);

  useEffect(() => {
    const timeOffer = () => {
      const locData = JSON.parse(localStorage.time);
      // if (movieTicketTimer !== []) {
      const newLocalData = [];
      locData?.map(({ day, hours, minutes, seconds }) => {
        day = Number(day);
        hours = Number(hours);
        minutes = Number(minutes);
        seconds = Number(seconds);
        if (day > 0 && hours === 0) {
          day--;
          hours = 24;
        }

        if (hours > 0 && minutes === 0) {
          hours--;
          minutes = 59;
        }

        if (seconds === 0 && minutes > 0) {
          minutes--;
          seconds = 60;
        }
        if (seconds > 0) {
          seconds--;
        }

        if (day >= 0 && day < 10) day = '0' + day;
        if (hours >= 0 && hours < 10) hours = '0' + hours;
        if (minutes >= 0 && minutes < 10) minutes = '0' + minutes;
        if (seconds >= 0 && seconds < 10) seconds = '0' + seconds;

        newLocalData.push({ day, hours, minutes, seconds });
      });
      const time = JSON.stringify(newLocalData);
      localStorage.setItem('time', time);
      setMovieTicketTimer(JSON.parse(localStorage.time));
      // }
    };
    const ticketTime = setInterval(() => {
      timeOffer();
    }, 1000);
    return () => {
      clearInterval(ticketTime);
    };
  }, []);
  const btnStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: '15px 0',
    padding: '3px 14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#423333',
    color: '#fff',
    fontSize: 'small',
  };
  return (
    <div className='container d-flex align-items-center flex-column'>
      {movieTicketTimer?.map((ticketTime, id) => (
        <div
          className='d-flex align-items-center justify-content-between flex-column border rounded-9 p-4 my-2'
          style={{ background: '#cfe0fc', width: '66%' }}
          key={id}
        >
          {offerClose ? (
            <div className='border-bottom text-primary border-danger w-100 text-center pb-2'>
              Offer Closes Soon Hurry Up!!
            </div>
          ) : (
            <div className='w-50 p-2 mb-3 text-center rounded-6 bg-danger text-light'>
              Offer Close
            </div>
          )}
          <div className='d-flex justify-content-between text-center my-5'>
            {Object.keys(ticketTime).map((time, id) => (
              <div
                className='bg-light p-4 mx-2 rounded-9'
                style={{ width: '100px' }}
                key={id}
              >
                <div>
                  <strong>{ticketTime[time]}</strong>
                </div>
                <label>{time}</label>
              </div>
            ))}
          </div>
          <div
            className='d-flex rounded-8 mt-4'
            style={{ background: '#e84c3d', width: '60%' }}
          >
            <div className='d-flex w-75 rounded-8' style={{ height: '200px' }}>
              <div className='h-100 bg-dark ' style={{ width: '35%' }}>
                <img
                  className='h-100 w-100 rounded-7'
                  style={{ objectFit: 'contain' }}
                  src={img}
                  alt=''
                />
              </div>
              <div
                className='p-4 m-auto font-weight-bold'
                style={{ width: '60%' }}
              >
                <div className='movieName'>
                  <div style={{ color: '#2d2a56' }} className=''>
                    Doctor strange
                  </div>
                  <label style={{ color: '#e3dfdf' }}>Movie</label>
                </div>
                <div className='movieTime'>
                  <div style={{ color: '#2d2a56' }}>2:30</div>
                  <label style={{ color: '#e3dfdf' }}>Time</label>
                </div>
                <div className='ticketPrice'>
                  <div className='price'>
                    <span style={{ color: '#2d2a56' }}>₹170</span> (
                    <del style={{ color: '#2d2a56' }}>₹340</del>)
                  </div>

                  <label style={{ color: '#e3dfdf' }}>Price</label>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column w-25 border-start p-4 text-center justify-content-center position-relative'>
              <div className='Number'>
                <div style={{ color: '#2d2a56' }}>0</div>
                <label style={{ color: '#e3dfdf' }}>Seat</label>
              </div>
              <input
                type='button'
                value='Book Now'
                id='bookNow'
                style={btnStyle}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
