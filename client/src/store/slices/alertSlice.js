import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";




const alertSlice = createSlice({
   name: "alert",
   initialState: {
      showAlertMessage: false,
      alertMessageContent: null,
   },
   reducers: {
      openAlertMessage: (state, action) => {
         state.showAlertMessage = true;
         state.alertMessageContent = action.payload;
      },
      closeAlertMessage: (state) => {
         state.showAlertMessage = false;
         state.alertMessageContent = null;
      },
   },
});

export const { openAlertMessage, closeAlertMessage } = alertSlice.actions;

// const initialState = {
//    showAlertMessage: false,
//    alertMessageContent: null,
// };

// export const openAlertMessage = createAsyncThunk(
//     "ALERT.OPEN_ALERT_MESSAGE",
//     async (content, thunkAPI) => {
//        thunkAPI.dispatch(openAlertMessageSuccess(content));
//     }
// );
//
// export const closeAlertMessage = createAsyncThunk(
//     "ALERT.CLOSE_ALERT_MESSAGE",
//     async (content, thunkAPI) => {
//        thunkAPI.dispatch(closeAlertMessageSuccess());
//     }
// );
//
// const alertSlice = createSlice({
//    name: "alert",
//    initialState,
//    reducers: {
//       openAlertMessageSuccess: (state, action) => {
//          state.showAlertMessage = true;
//          state.alertMessageContent = action.payload;
//       },
//       closeAlertMessageSuccess: (state) => {
//          state.showAlertMessage = false;
//          state.alertMessageContent = null;
//       },
//    },
// });

// export const {openAlertMessageSuccess,closeAlertMessageSuccess,} = alertSlice.actions;
// export const selectShowAlertMessage = createSelector(
//     (state) => state.alert.showAlertMessage,
//     (showAlertMessage) => showAlertMessage
// );

export const alertReducer = alertSlice.reducer;