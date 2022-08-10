import React from 'react';
import ProductSidebar from './ProductSidebar';
import TimerSidebar from './TimerSidebar';

const Sidebar = () => {
  return (
    <div
      className='col-3 p-4 m-3 rounded-8 shadow-4-strong overflow-auto'
      style={{ height: '97%' }}
    >
      <TimerSidebar />
      <ProductSidebar />
    </div>
  );
};

export default Sidebar;
