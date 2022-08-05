import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const Lesson_2 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_2;
