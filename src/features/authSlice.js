import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

//thunks

export const signUpAsync = createAsyncThunk(
  "authSlice/signUpAsync",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post("/register", userData);
      dispatch(login(data));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "authSlice/loginAsync",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post("/login", userData);
      dispatch(login(data));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// axios.get("/user/auto-login",{headers : {authToken : authToken}})

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
