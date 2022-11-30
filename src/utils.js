import React from 'react';
import { logIn, logOut } from './stores/auth';
import { openModal } from './stores/modal';
import { addTodo } from './stores/todo';
import store from './stores/todoIndex';

// console.log(store.dispatch());

export const addTodoHandle = todo => {
  console.log(store.getState());
  store.dispatch(addTodo(todo));
};

export const logInHandle = user => {
  store.dispatch(logIn(user));
};

export const logOutHandle = () => {
  store.dispatch(logOut());
};

export const modal = (data = false, name) => {
  store.dispatch(openModal({ name, data }));
};
