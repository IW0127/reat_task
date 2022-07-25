import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Movie from './components/movie/Movie';
import NaveBar from './NaveBar';
import SideBar from './SideBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NaveBar />}>
        <Route path='/' element={<SideBar />}>
          <Route index element={<h1 className='text-center'>Hello world</h1>} />
          <Route path='movie-ticket/*' element={<Movie />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
