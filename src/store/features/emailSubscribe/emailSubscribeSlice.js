import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:1337/api";

export const subscribeEmail = createAsyncThunk(
  "emailSubscribe/subscribeEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/email-subscribers`,
        { data: { email } },      
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;  
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

const emailSubscribeSlice = createSlice({
  name: "emailSubscribe",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeEmail.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(subscribeEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(subscribeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.error?.message ||
          action.payload?.message ||
          action.payload ||
          "Failed to subscribe";
      });
  },
});

export const { resetStatus } = emailSubscribeSlice.actions;
export default emailSubscribeSlice.reducer;
