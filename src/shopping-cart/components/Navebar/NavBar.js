import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { CgShoppingCart } from 'react-icons/cg';
import cartContext from '../context/Context';
import Dropdown from './Dropdown';

function NavBar() {
  const dropDownStyle = {
    right: 0,
    left: 'auto',
    maxHeight: '500px',
  };
  const {
    state: { cart },
    filterDispatch,
  } = useContext(cartContext);
  return (
    <nav className='navbar sticky-top' style={{ background: '#383838' }}>
      <div className='container'>
        <Link className='navbar-brand' to='/shopping'>
          <img src={logo} width={40} alt='logo' />
          <span className='fw-bold' style={{ color: '#c463e8' }}>
            {' '}
            Shopping
          </span>
        </Link>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Searching product hear'
          aria-label='Search'
          style={{ width: '500px' }}
          onChange={(e) =>
            filterDispatch({
              type: 'FILTER_BY_SEARCH',
              payload: e.target.value,
            })
          }
        />
        <div className='btn-group'>
          <button
            className='btn btn-success dropdown-toggle'
            type='button'
            id='dropdownMenuClickableInside'
            data-bs-toggle='dropdown'
            data-bs-auto-close='outside'
            aria-expanded='false'
          >
            <CgShoppingCart color='#fff' fontSize='25px' />
            {cart.length}
          </button>
          <ul className='dropdown-menu overflow-auto' style={dropDownStyle}>
            <Dropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
