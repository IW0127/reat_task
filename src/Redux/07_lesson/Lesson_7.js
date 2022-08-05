import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { extendedApiSlice } from './features/posts/postsSlice';
import { usersApiSlice } from './features/users/usersSlice';

store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());

const Lesson_7 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_7;
