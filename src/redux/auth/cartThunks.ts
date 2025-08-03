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
      console.log(res.data.cart);
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
      return res.data.cart;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);

// DECREASE  CART
export const decreaseCart = createAsyncThunk(
  "cart/decreaseCart",
  async (data: addToCartPayload, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/cart/decrease", data);
      console.log(res.data.cart);
      return res.data.cart;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);

// REMOVE CART
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (data: addToCartPayload, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/cart/remove", data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch cart"
      );
    }
  }
);