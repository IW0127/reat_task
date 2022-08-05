import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const Lesson_5 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_5;
