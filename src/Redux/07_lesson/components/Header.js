import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarRightAlignExample'>
          <h2>Redux Blog</h2>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/redux/lesson_7/'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='post'>
                Link
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link ' to='user'>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
