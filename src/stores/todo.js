import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter(td => td.id !== action.payload);
    },
  },
});

export const { addTodo, deleteItem } = todos.actions;

export default todos.reducer;
