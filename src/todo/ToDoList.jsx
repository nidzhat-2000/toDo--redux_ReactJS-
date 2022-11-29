import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function ToDoList({ user, setTodos }) {
  const { todos } = useSelector(state => state.todo);

  return (
    <ul>
      {todos.map((todo, key) => {
        return (
          // <TodoItem
          //   key={key}
          //   setTodos={setTodos}
          //   todos={todos}
          //   todo={todo}
          //   user={user}
          //   setModal={setModal}
          // />
          <TodoItem key={key} todo={todo} />
        );
      })}
    </ul>
  );
}

export default ToDoList;
