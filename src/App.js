import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import img from './assets/images/Ikbal 3.png';
import Movie from './components/movie/Movie';
import ViewMore from './components/view_more/ViewMore';
import NaveBar from './NaveBar';
import SideBar from './SideBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NaveBar />}>
        <Route path='/' element={<SideBar />}>
          <Route
            index
            element={
              <div className='text-center my-5'>
                <h1 className='text-center'>Hello world</h1>
                <img src={img} width='500' alt='' />
              </div>
            }
          />
          <Route path='movie-ticket/*' element={<Movie />} />
          <Route path='view-more' element={<ViewMore />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
