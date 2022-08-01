import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Buyer from './Buyer';
import GstSidebar from './GstSidebar';
import Manufacturer from './Manufacturer';

const GstCalculator = () => {
  return (
    <Routes>
      <Route path='/' element={<GstSidebar />}>
        <Route index path='buyer' element={<Buyer />}></Route>
        <Route index path='manufacturer' element={<Manufacturer />}></Route>
        <Route index path='wholesaler' element={<h1>dkj</h1>}></Route>
        <Route path='/' element={<Navigate to='buyer' replace />} />
      </Route>
    </Routes>
  );
};

export default GstCalculator;
