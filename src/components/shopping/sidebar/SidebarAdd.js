import React from 'react';

const SidebarAdd = () => {
  return (
    <div className='col-3 p-4 m-3 rounded-8 shadow-4-strong'>
      <h3 className='text-center mb-3'>Timer</h3>
      <div className='input-group mb-3'>
        <input type='text' className='form-control rounded' placeholder='Day' />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='hours'
        />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='minutes'
        />
      </div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control rounded'
          placeholder='seconds'
        />
      </div>
      <button className='btn btn-success w-100'>Submit</button>
    </div>
  );
};

export default SidebarAdd;
