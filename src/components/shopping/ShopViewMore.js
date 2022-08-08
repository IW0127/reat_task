import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Container from './container/Container';
import SidebarAdd from './sidebar/SidebarAdd';
import { fetchTimer, selectByTimer } from './slices/timer';

store.dispatch(fetchTimer());
const ShopViewMore = () => {
  return (
    <Provider store={store}>
      <div className='row h-100'>
        <Container />
        <SidebarAdd />
      </div>
    </Provider>
  );
};

export default ShopViewMore;
