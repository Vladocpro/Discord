// import { createSlice } from "@reduxjs/toolkit";
// import { openAlertMessage } from "./alertActions";
import * as api from "../../api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {openAlertMessage} from "./alertSlice";
import {useDispatch} from "react-redux";

const initState = {
   friends: [],
   pendingFriendsInvitations: [],
   onlineUsers: [],
};
export const sendFriendInvitation = createAsyncThunk(
    'friends/sendFriendInvitation',
    async (data,thunkAPI) => {
       const response = await api.sendFriendInvitation(data);
       if (response.error) {
          thunkAPI.dispatch(openAlertMessage(response.exception?.response?.data));
          return thunkAPI.rejectWithValue(response.exception?.response?.data)
       } else {
          thunkAPI.dispatch(openAlertMessage("Invitation has been sent!"));
       }
    }
);

export const acceptFriendInvitation = createAsyncThunk(
    'friends/acceptFriendInvitation',
    async (data,thunkAPI) => {
       const response = await api.acceptFriendInvitation(data);
       if (response.error) {
          thunkAPI.dispatch(openAlertMessage(response.exception?.response?.data));
       } else {
          return thunkAPI.dispatch(openAlertMessage("Invitation accepted!"));
       }
    }
);


export const rejectFriendInvitation = createAsyncThunk(
    'friends/rejectFriendInvitation',
    async (data,thunkAPI) => {
       const response = await api.rejectFriendInvitation(data);
       console.log("Workingn " + data)
       if (response.error) {
          thunkAPI.dispatch(openAlertMessage(response.exception?.response?.data));
       } else {
          return thunkAPI.dispatch(openAlertMessage("Invitation rejected!"));
       }
    }
);

export const friendsSlice = createSlice({
   name: 'friends',
   initialState: initState,
   reducers: {
      setPendingFriendsInvitations(state, action) {
         state.pendingFriendsInvitations = action.payload;
      },
      setFriends(state, action) {
         state.friends = action.payload;
      },
      setOnlineUsers(state, action) {
         state.onlineUsers = action.payload;
      },
   },
   extraReducers: {
      [sendFriendInvitation.fulfilled]: (state, action) => {
         // state.pendingFriendsInvitations = action.payload;
      },
      [acceptFriendInvitation.fulfilled]: (state, action) => {
         // state.friends = action.payload;
      },
      [rejectFriendInvitation.fulfilled]: (state, action) => {
         console.log("WOOOOOW")
         // state.friends = action.payload;
      },
   },
});

export const {
   setPendingFriendsInvitations,
   setFriends,
   setOnlineUsers,
} = friendsSlice.actions;

export const friendsReducer = friendsSlice.reducer;