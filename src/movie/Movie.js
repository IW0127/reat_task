import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Setting from './Setting';
import Ticket from './Ticket';

const Movie = () => {
  return (
    <Routes>
      <Route path='/*' element={<Header />}>
        <Route index path='home' element={<Ticket />} />
        <Route path='admin' element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default Movie;
