import api from "@/lib/apiClient/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type addToCartPayload = {
  productId: string;
  quantity?: number;
  size: string;
};

// FETCH CART
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/cart/fetchcart");
      return res.data.cart;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);

// ADD TO CART
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data: addToCartPayload, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/cart/add", data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);
