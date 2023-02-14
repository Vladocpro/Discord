import { createSlice } from "@reduxjs/toolkit";

export const chatTypes = {
   DIRECT: "DIRECT",
   GROUP: "GROUP",
};

const chatSlice = createSlice({
   name: "chat",
   initialState: {
      chosenChatDetails: null,
      chatType: null,
      messages: [],
   },
   reducers: {
      setChosenChatDetails: (state, action) => {
         console.log(action.payload)
         state.chosenChatDetails = action.payload.chatDetails;
         state.chatType = action.payload.chatType;
         state.messages = [];
      },
      setMessages: (state, action) => {
         state.messages = action.payload;
      }
   }
});

export const { setChosenChatDetails, setMessages } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;