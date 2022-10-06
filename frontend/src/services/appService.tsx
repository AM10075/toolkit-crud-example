import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";

export const getData = createAsyncThunk("/", async () => {
  try {
    const response = await API.get("");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const postData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.post("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const putData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.put("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.put("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
