import React from "react";
import {useSelector} from "react-redux";
import { Typography } from "@mui/material";

const ChosenOptionLabel = () => {
  const chatDetails = useSelector(state => state.chat.chosenChatDetails)
  return (
    <Typography
      sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
    >{`${chatDetails ? `Chat with: ${chatDetails.name}` : ""}`}</Typography>
  );
};



export default ChosenOptionLabel;
