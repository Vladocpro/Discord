import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
   userDetails: null
};

export const login = createAsyncThunk(
    "AUTH.LOGIN",
    async (userDetails) => {
       const response = await api.login(userDetails);
       if (response.error) {
          throw response.exception.response.data;
       } else {
          const { userDetails } = response?.data;
          localStorage.setItem("user", JSON.stringify(userDetails))
          return response.data.userDetails;
       }
    }
);

export const register = createAsyncThunk(
    "AUTH.REGISTER",
    async (userDetails) => {
       const response = await api.register(userDetails);
       if (response.error) {
          throw response.exception.response.data;
       } else {
          const { userDetails } = response?.data;
          localStorage.setItem("user", JSON.stringify(userDetails))
          return response.data.userDetails;
       }
    }
);

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setUserDetails: (state, action) => {
         state.userDetails = action.payload
      }
   },
   extraReducers: {
      [login.fulfilled]: (state, action) => {
         state.userDetails = action.payload
      },
      [register.fulfilled]: (state, action) => {
         state.userDetails = action.payload
      }
   }
});

export const { setUserDetails } = authSlice.actions;
export const authReducer =  authSlice.reducer;