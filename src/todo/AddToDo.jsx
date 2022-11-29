import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { addTodo } from '../stores/todo';

import { useSelector, useDispatch } from 'react-redux';

function AddToDo({ setTodos }) {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const submitHandle = e => {
    e.preventDefault();
    // setTodos(todos => [
    //   {
    //     title: todo,
    //     done: false,
    //     id: nanoid(),
    //     user: user.username,
    //   },
    //   ...todos,
    // ]);
    dispatch(
      addTodo({
        title: todo,
        done: false,
        id: nanoid(),
        user: user.username,
      })
    );
    setTodo('');
  };

  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button disabled={!todo || !user} type="submit">
        Add
      </button>
    </form>
  );
}

export default AddToDo;
