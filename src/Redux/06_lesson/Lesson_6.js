import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './features/api/apiSlice';

const Lesson_6 = () => {
  return (
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  );
};

export default Lesson_6;
