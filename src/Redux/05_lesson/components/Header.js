import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCount, increaseCount } from '../features/posts/postsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarRightAlignExample'>
          <h2>Redux Blog</h2>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to=''>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='post'>
                NavLink
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link ' to='user'>
                Users
              </NavLink>
            </li>
            <li className='nav-item'>
              <button
                className='btn btn-primary m-auto'
                onClick={() => dispatch(increaseCount())}
              >
                {count}{' '}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
