import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers());

const Lesson_3 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Lesson_3;
