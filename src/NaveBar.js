import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NaveBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light position-sticky position-static top-0'>
        <div className='container'>
          <a className='navbar-brand me-2'>
            <i className='fas fa-tasks'></i>
          </a>

          <div className='collapse navbar-collapse' id='navbarButtonsExample'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  React All Task
                </a>
              </li>
            </ul>

            <div className='d-flex align-items-center'>
              <Link className='btn btn-link px-3 me-2 ' to='/'>
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NaveBar;
