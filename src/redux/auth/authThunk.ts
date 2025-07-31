import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "@/types/userData";
import api from "@/lib/apiClient/axios";

// SIGN UP
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (data: UserData, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/signup", data);
      return res.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Signup failed");
    }
  }
);

// SIGN IN
export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (data: UserData, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/signin", data);
      return res.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Signin failed");
    }
  }
);

// SIGN OUT
export const signOutUser = createAsyncThunk(
  "auth/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/api/auth/signout");
      return null;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Signout failed");
    }
  }
);
