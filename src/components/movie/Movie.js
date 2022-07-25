import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Setting from './redux/features/admin/Setting';
import Ticket from './redux/features/ticket/Ticket';
import { Provider } from 'react-redux';
import { store } from './redux/app/stor';
import { movieTicketApiSlice } from './redux/features/admin/settingSlice';

store.dispatch(movieTicketApiSlice.endpoints.getTime.initiate());

const Movie = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<Header />}>
          <Route index path='home' element={<Ticket />} />
          <Route path='admin' element={<Setting />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default Movie;
