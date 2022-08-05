import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item active'>
                <Link className='nav-link' to=''>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='post'>
                  Post
                </Link>
              </li>
            </ul>
            <h2>Redux Blog</h2>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
