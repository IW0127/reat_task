import React, { useState } from 'react';
import img from '../assets/images/images.png';
const Ticket = () => {
  const [offerClose, setOfferClose] = useState(false);
  const [timer, setTimer] = useState({
    day: '00',
    hours: '00',
    minutes: '00',
    seconde: '00',
  });
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
  };
  return (
    <div className='container d-flex align-items-center flex-column'>
      <div
        className='d-flex align-items-center justify-content-between flex-column border rounded-9 p-4'
        style={{ background: '#cfe0fc', width: '66%' }}
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
          {Object.keys(timer).map((time, id) => (
            <div
              className='bg-light p-4 mx-2 rounded-9'
              style={{ width: '100px' }}
              key={id}
            >
              <div>
                <strong>{timer[time]}</strong>
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
    </div>
  );
};

export default Ticket;
