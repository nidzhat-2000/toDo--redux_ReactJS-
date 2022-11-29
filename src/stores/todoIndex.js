import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import modal from './modal';
import todo from './todo';

const store = configureStore({
  reducer: {
    todo,
    auth,
    modal,
  },
});

export default store;
