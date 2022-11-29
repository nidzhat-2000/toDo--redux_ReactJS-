import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: false,
  data: false,
  open: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.user = action.payload.name;
      state.data = action.payload?.data || false;
      console.log(state.data)
      // state.data = false;
      state.open = true;
    },
    closeModal: state => {
      state.name = false;
      state.data = false;
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;

export default modal.reducer;
