import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
const Layout = () => {
  return (
    <>
      <Header />
      <main className='m-auto' style={{ maxWidth: '500px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default memo(Layout);
