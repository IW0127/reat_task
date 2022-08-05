import React from 'react';
// import './assets/css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { fetchUsers } from './features/users/usersSlice';
import { Routes, Route } from 'react-router-dom';
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const Lesson_4 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_4;
