import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import img from './assets/images/Ikbal 3.png';
import CountLoop from './components/count/CountLoop';
import GstCalculator from './components/gst/GstCalculator';
import Movie from './components/movie/Movie';
import TodoList from './components/todo/TodoList';
import ViewMore from './components/view_more/ViewMore';
import YupFormik from './components/yupLib/YupFormik';
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
          <Route path='count' element={<CountLoop />} />
          <Route path='todoList' element={<TodoList />} />
          <Route path='yup' element={<YupFormik />} />
          <Route path='GST/*' element={<GstCalculator />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
