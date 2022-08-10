import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Container from './container/Container';
import Sidebar from './sidebar/Sidebar';
import { fetchTimer } from './slices/timer';

store.dispatch(fetchTimer());
const ShopViewMore = () => {
  return (
    <Provider store={store}>
      <div className='row h-100'>
        <Container />
        <Sidebar />
      </div>
    </Provider>
  );
};

export default ShopViewMore;
