import api from "@/lib/apiClient/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/cart/fetchcart");
      return res.data.cart;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);
