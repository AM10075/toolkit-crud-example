import { createSlice } from "@reduxjs/toolkit";

const initialState: iState = {
  loading: false,
  data: {},
  error: {},
};

interface iState {
  data: any;
  loading: boolean;
  error: any;
}

import { getData, postData, putData, deleteData } from "../services/appService";

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    // extraReducers handles asynchronous requests, which is our main focus.
    [`${getData.pending}`]: (state: iState, action) => {
      state.loading = true;
    },
    [`${getData.fulfilled}`]: (state: iState, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [`${getData.rejected}`]: (state: iState, action) => {
      state.loading = false;
      state.error = "Error";
    },
    [`${postData.pending}`]: (state: iState, action) => {
      state.loading = true;
    },
    [`${postData.fulfilled}`]: (state: iState, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [`${postData.rejected}`]: (state: iState, action) => {
      state.loading = false;
      state.error = "Error";
    },
    [`${putData.pending}`]: (state: iState, action) => {
      state.loading = true;
    },
    [`${putData.fulfilled}`]: (state: iState, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [`${putData.rejected}`]: (state: iState, action) => {
      state.loading = false;
      state.error = "Error";
    },
    [`${deleteData.pending}`]: (state: iState, action) => {
      state.loading = true;
    },
    [`${deleteData.fulfilled}`]: (state: iState, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [`${deleteData.rejected}`]: (state: iState, action) => {
      state.loading = false;
      state.error = "Error";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
