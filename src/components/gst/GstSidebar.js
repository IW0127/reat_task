import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const GstSidebar = () => {
  return (
    <div className='row'>
      <div className='col-3'>
        <div
          className='nav flex-column nav-pills text-center'
          id='v-pills-tab'
          role='tablist'
          aria-orientation='vertical'
        >
          <NavLink
            className='nav-link'
            id='v-pills-home-tab'
            to='buyer'
            role='tab'
            aria-controls='v-pills-home'
            aria-selected='true'
          >
            Buyer
          </NavLink>
          <NavLink
            className='nav-link'
            id='v-pills-profile-tab'
            to='manufacturer'
            role='tab'
            aria-controls='v-pills-profile'
            aria-selected='false'
          >
            manufacturer
          </NavLink>
          <NavLink
            className='nav-link'
            id='v-pills-messages-tab'
            to='wholesaler'
            role='tab'
            aria-controls='v-pills-messages'
            aria-selected='false'
          >
            wholesaler
          </NavLink>
        </div>
      </div>

      <div className='col-9'>
        <Outlet />
      </div>
    </div>
  );
};

export default GstSidebar;
