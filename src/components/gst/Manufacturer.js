import React, { useState } from 'react';

const Manufacturer = () => {
  const [netPrice, setNetPrice] = useState(0);
  const [gstPer, setGstPer] = useState(5);
  const [gstAmount, setGstAmount] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);
  const [profit, setProfit] = useState(0);
  const [csgst, setCsgst] = useState(0);
  const changeNetPrice = (e) => {
    const value = Number(e.target.value);
    setNetPrice(value);
    let gst = (value * gstPer) / 100;
    gst += (value * profit) / 100;
    setGstAmount(gst);
    setGrossPrice(value + gst);
    setCsgst(gstAmount / 2);
  };

  const changeGst = (e) => {
    const value = Number(e.target.value);
    setGstPer(value);
    let gst = (netPrice * value) / 100;
    gst += (netPrice * profit) / 100;
    setGstAmount((netPrice * value) / 100);
    setCsgst(gstAmount / 2);
  };

  const changeProfit = (e) => {
    const value = Number(e.target.value);
    setProfit(value);
    let gst = (netPrice * gstPer) / 100;
    gst += (netPrice * value) / 100;
    setGstAmount(gst);
    setGrossPrice(netPrice + gst);
    setCsgst(gstAmount / 2);
  };
  return (
    <>
      <div className='my-2'>
        <label
          className='form-label d-flex justify-content-between'
          htmlFor='customRange1'
        >
          <b>Const of Goods</b>
          <div className='input-group mb-3' style={{ width: '15%' }}>
            <input
              type='text'
              className='form-control rounded'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search-addon'
              value={netPrice}
            />
            <span className='input-group-text border-0' id='search-addon'>
              <i className='fa-solid fa-indian-rupee-sign'></i>
            </span>
          </div>
        </label>
        <div className='range'>
          <input
            type='range'
            className='form-range'
            min={0}
            max={100000}
            onChange={changeNetPrice}
            value={netPrice}
          />
        </div>
      </div>
      <div className='my-2'>
        <label className='form-label d-flex justify-content-between'>
          <b>Profit Ratio</b>
          <div className='input-group mb-3' style={{ width: '15%' }}>
            <input
              type='text'
              className='form-control rounded'
              value={profit}
            />

            <span className='input-group-text border-0' id='search-addon'>
              <i className='fa-solid fa-percent'></i>
            </span>
          </div>
        </label>
        <div className='range'>
          <input
            type='range'
            className='form-range'
            max={40}
            min={0}
            value={profit}
            step={0.5}
            onChange={changeProfit}
          />
        </div>
      </div>
      <div>
        <label
          className='form-label d-flex justify-content-between'
          htmlFor='customRange1'
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
            <span className='input-group-text border-0' id='search-addon'>
              <i className='fa-solid fa-percent'></i>
            </span>
          </div>
        </label>

        <div className='range'>
          <input
            type='range'
            className='form-range'
            min={5}
            max={28}
            value={gstPer}
            step={0.5}
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
          <label>Total Product cost</label>
          <span>
            <i className='fa-solid fa-indian-rupee-sign'></i> {grossPrice}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>CGST</label>
          <span>
            <i className='fa-solid fa-indian-rupee-sign'></i> {csgst}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>SGST</label>
          <span>
            <i className='fa-solid fa-indian-rupee-sign'></i> {csgst}
          </span>
        </div>
        <div
          className='d-flex flex-column m-2 p-4  rounded-5 shadow-5'
          style={{ width: '20%' }}
        >
          <label>Total tax</label>
          <span>
            <i className='fa-solid fa-indian-rupee-sign'></i> {gstAmount}
          </span>
        </div>
      </div>
    </>
  );
};

export default Manufacturer;
