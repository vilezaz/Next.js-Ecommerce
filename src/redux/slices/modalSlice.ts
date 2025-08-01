import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isCartOpen: boolean;
}

const initialState: ModalState = {
  isCartOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
  },
});

export const {openCart, closeCart} = modalSlice.actions;

export default modalSlice.reducer;
