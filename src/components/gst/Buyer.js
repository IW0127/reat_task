import React, { useState } from 'react';

const Buyer = () => {
  const [netPrice, setNetPrice] = useState(0);
  const [gstPer, setGstPer] = useState(5);
  const [gstAmount, setGstAmount] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);
  const [csgst, setCsgst] = useState(0);
  const changeNetPrice = (e) => {
    const value = Number(e.target.value);
    setNetPrice(value);
    const gst = (value * gstPer) / 100;
    setGstAmount(gst);
    setGrossPrice(value + gst);
    setCsgst(gstAmount / 2);
  };

  const changeGst = (e) => {
    const value = Number(e.target.value);
    setGstPer(value);
    setGstAmount((netPrice * value) / 100);
  };

  return (
    <>
      <div className='my-2'>
        <label
          className='form-label d-flex justify-content-between'
          for='customRange1'
        >
          <b>Net price</b>
          <div className='input-group mb-3' style={{ width: '15%' }}>
            <input
              type='text'
              className='form-control rounded'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search-addon'
              value={netPrice}
            />
            <span class='input-group-text border-0' id='search-addon'>
              <i class='fa-solid fa-indian-rupee-sign'></i>
            </span>
          </div>
        </label>
        <div className='range'>
          <input
            type='range'
            className='form-range'
            min={0}
            max={100000}
            id='customRange1'
            onChange={changeNetPrice}
          />
        </div>
      </div>
      <div>
        <label
          className='form-label d-flex justify-content-between'
          for='customRange1'
        >
          <b>GST %</b>
          <div className='input-group mb-3' style={{ width: '15%' }}>
            <input
              type='text'
              className='form-control rounded'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search-addon'
              value={gstPer}
            />
            <span class='input-group-text border-0' id='search-addon'>
              <i class='fa-solid fa-percent'></i>
            </span>
          </div>
        </label>

        <div className='range'>
          <input
            type='range'
            className='form-range'
            min={5}
            max={28}
            step='0.5'
            onChange={changeGst}
            id='customRange1'
          />
        </div>
      </div>
      <div className='m-2 d-flex justify-content-between'>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>Gross Price</label>
          <span>
            <i class='fa-solid fa-indian-rupee-sign'></i> {grossPrice}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>CGST</label>
          <span>
            <i class='fa-solid fa-indian-rupee-sign'></i> {csgst}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>SGST</label>
          <span>
            <i class='fa-solid fa-indian-rupee-sign'></i> {csgst}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>Total tax</label>
          <span>
            <i class='fa-solid fa-indian-rupee-sign'></i> {gstAmount}
          </span>
        </div>
      </div>
    </>
  );
};

export default Buyer;
