import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../todo';
function EditTodo({ data, close }) {
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);

  const dispatch = useDispatch();

  const submitHandle = e => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  return (
    <div>
      <p>{JSON.stringify(data, null, 2)}</p>

      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />{' '}
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            checked={done}
            onChange={e => setDone(e.target.checked)}
          />
          Done
        </label>{' '}
        <br />
        <button type="submit">Renew</button>
      </form>
      <button onClick={close}>CLose</button>
    </div>
  );
}

export default EditTodo;
