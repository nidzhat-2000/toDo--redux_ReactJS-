import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: state => {
      state.user = false;
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
