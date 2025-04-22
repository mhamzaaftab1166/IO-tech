// src/features/ourTeams/ourTeamsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:1337/api";

export const fetchOurTeams = createAsyncThunk(
  "ourTeams/fetchOurTeams",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/our-teams?populate=imageUrl`
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

const ourTeamsSlice = createSlice({
  name: "ourTeams",
  initialState: {
    loading: false,
    teams: [],
    error: null,
  },
  reducers: {
    resetTeamsState: (state) => {
      state.loading = false;
      state.teams = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOurTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOurTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload.data;
      })
      .addCase(fetchOurTeams.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.error?.message ||
          action.payload?.message ||
          action.payload ||
          "Failed to load teams";
      });
  },
});

export const { resetTeamsState } = ourTeamsSlice.actions;
export default ourTeamsSlice.reducer;
