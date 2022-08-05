import React from 'react';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const Lesson_1 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_1;
