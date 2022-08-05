import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import NavBar from './components/Navebar/NavBar';
import PageNotFound from './components/404/NotFound';
import { Reducer, Context } from './components/context/Context';
import './App.css';

function App() {
  const { state, dispatch, filterProd, filterDispatch } = Reducer();
  return (
    <Context value={{ state, dispatch, filterProd, filterDispatch }}>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='cart' exact element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Context>
  );
}
export default App;
