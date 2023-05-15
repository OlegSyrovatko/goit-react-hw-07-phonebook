import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
    status: false
  },
  reducers: {
    setStatusModal(state, action) {
      state.status = action.payload; 
    },
  },
});

export const { setStatusModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

