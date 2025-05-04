import React from 'react';
import { store } from '../components/modulo2/store';
import AppModulo2 from '../components/modulo2/App';
import { Provider } from 'react-redux';

const Page1 = () => {
  return (
    <Provider store={store}>
      <AppModulo2 />
    </Provider>
  );
};

export default Page1;
