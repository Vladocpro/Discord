import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
   isUserInRoom: false,
   isUserRoomCreator: false,
   roomDetails: null,
   activeRooms: [],
   localStream: null,
   remoteStreams: [],
   audioOnly: false,
   screenSharingStream: null,
   isScreenSharingActive: false,
   isUserJoinedWithOnlyAudio: false,
};

const roomSlice = createSlice({
   name: "room",
   initialState: initState,
   reducers: {
      setOpenRoom: (state, action) => {
         console.log(action.payload)

         state.isUserInRoom = action.payload.isUserInRoom;
         state.isUserRoomCreator = action.payload.isUserRoomCreator;
      },
      setRoomDetails: (state, action) => {
         state.roomDetails = action.payload;
      },
      setActiveRooms: (state, action) => {
         state.activeRooms = action.payload;
      },
      setLocalStream: (state, action) => {
         state.localStream = action.payload;
      },
      setAudioOnly: (state, action) => {
         state.audioOnly = action.payload;
      },
      setRemoteStreams: (state, action) => {
         state.remoteStreams = action.payload;
      },
      setScreenSharingStream: (state, action) => {
         state.screenSharingStream = action.payload;
         state.isScreenSharingActive = action.payload;
      },
      setIsUserJoinedOnlyWithAudio: (state, action) => {
         state.isUserJoinedWithOnlyAudio = action.payload;
      },

   },
});

export const {
   setOpenRoom,
   setRoomDetails,
   setActiveRooms,
   setLocalStream,
   setAudioOnly,
   setRemoteStreams,
   setScreenSharingStream,
   setIsUserJoinedOnlyWithAudio,
} = roomSlice.actions;

// export const openRoomAsync = createAsyncThunk(
//     "room/openRoomAsync",
//     async (roomData, thunkAPI) => {
//        const response = await fetch("/api/room/open", {
//           method: "POST",
//           body: JSON.stringify(roomData),
//        });
//        const data = await response.json();
//        return data;
//     }
// );
export const roomReducer = roomSlice.reducer;

