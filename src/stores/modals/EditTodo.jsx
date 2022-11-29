import React from 'react';

function EditTodo({ data, close }) {
  return (
    <div>
      edit to do modal
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default EditTodo;
