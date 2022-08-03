import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <ul
        className='nav nav-tabs nav-fill mb-3 position-sticky top-0 bg-light'
        id='ex-with-icons'
        role='tablist'
      >
        <li className='nav-item' role='presentation'>
          <NavLink
            className='nav-link'
            to='home'
            role='tab'
            aria-controls='ex-with-icons-tabs-1'
            aria-selected='false'
          >
            <i className='fa-solid fa-ticket-simple me-2'></i>Movie Ticket
          </NavLink>
        </li>
        <li className='nav-item' role='presentation'>
          <NavLink
            className='nav-link'
            to='admin'
            role='tab'
            aria-controls='ex-with-icons-tabs-2'
            aria-selected='false'
          >
            <i className='fas fa-cogs fa-fw me-2'></i>Settings
          </NavLink>
        </li>
      </ul>

      <div className='tab-content' id='ex-with-icons-content'>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
