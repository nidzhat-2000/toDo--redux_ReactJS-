import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../stores/modal';
import { deleteItem } from '../stores/todo';
import { modal } from '../utils';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const deleteHandle = () => {
    // setTodos(todos => todos.filter(td => td.id !== todo.id));
    dispatch(deleteItem(todo.id));
  };

  const editHandle = () => {
    //   setModal({
    //     name: 'edit-todo',
    //     data: todo,
    //   });

    // dispatch(
    //   openModal({
    //     name: 'edit-todo',
    //     data: todo,
    //   })
    // );

    modal('edit-todo', todo);
  };

  return (
    <li>
      <span style={{ textDecoration: todo.none ? 'line-through' : false }}>
        {todo.title} - {todo.user}
      </span>
      {todo.user === user.username && (
        <div>
          <button onClick={editHandle}>Edit</button>
          <button onClick={deleteHandle}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
