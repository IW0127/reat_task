import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Lesson_1 from './01_lesson/Lesson_1';
import Lesson_2 from './02_lesson/Lesson_2';
import Lesson_3 from './03_lesson/Lesson_3';
import Lesson_4 from './04_lesson/Lesson_4';
import Lesson_5 from './05_lesson/Lesson_5';
import Lesson_6 from './06_lesson/Lesson_6';
import Lesson_7 from './07_lesson/Lesson_7';
import SideBar from './SideBar';

const Redux = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='/' element={<SideBar />}>
          <Route index element={<Lesson_1 />} />
          <Route path='lesson_2' element={<Lesson_2 />} />
          <Route path='lesson_3' element={<Lesson_3 />} />
          <Route path='lesson_4/*' element={<Lesson_4 />} />
          <Route path='lesson_5/*' element={<Lesson_5 />} />
          <Route path='lesson_6' element={<Lesson_6 />} />
          <Route path='lesson_7/*' element={<Lesson_7 />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Redux;
