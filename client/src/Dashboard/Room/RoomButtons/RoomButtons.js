import React,{useEffect} from "react";
import { styled } from "@mui/system";
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import ScreenShareButton from "./ScreenShareButton";
import {useSelector} from "react-redux";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = () => {
  const room = useSelector(state => state.room);

  return (
    <MainContainer>
      {!room.isUserJoinedWithOnlyAudio && <ScreenShareButton {...room} />}
      <MicButton localStream={room.localStream} />
      <CloseRoomButton />
      {!room.isUserJoinedWithOnlyAudio && <CameraButton localStream={room.localStream} />}
    </MainContainer>
  );
};


export default RoomButtons;
