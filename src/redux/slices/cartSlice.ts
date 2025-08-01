import { CartItem } from "@/types/cartItem";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../auth/cartThunks";

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null as string | null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCartItems, addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
