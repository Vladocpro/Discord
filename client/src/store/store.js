import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {alertReducer} from "./slices/alertSlice";
import {chatReducer} from "./slices/chatSlice";
import {friendsReducer} from "./slices/friendsSlice";
import {roomReducer} from "./slices/roomSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
    chat: chatReducer,
    room: roomReducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
});

export default store;
