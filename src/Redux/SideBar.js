import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SideBar = () => {
  const sidebarLinks = [
    { title: 'Lesson 1', to: '/redux/' },
    { title: 'Lesson 2', to: 'lesson_2' },
    { title: 'Lesson 3', to: 'lesson_3' },
    { title: 'Lesson 4', to: 'lesson_4' },
    { title: 'Lesson 5', to: 'lesson_5' },
    { title: 'Lesson 6', to: 'lesson_6' },
    { title: 'Lesson 7', to: 'lesson_7/' },
  ];
  return (
    <>
      <div className='row m-3'>
        <div
          className='col-2 p-0'
          style={{ height: '90.3vh', overflow: 'auto' }}
        >
          <div
            className='list-group list-group-light'
            id='list-tab'
            role='tablist'
          >
            {sidebarLinks.map(({ title, to }, id) => (
              <NavLink
                className='list-group-item list-group-item-action my-1 px-3 border rounded-7'
                id='list-home-list'
                to={to}
                key={id}
                role='tab'
                aria-controls='list-home'
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='col-10' style={{ height: '90.3vh', overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
