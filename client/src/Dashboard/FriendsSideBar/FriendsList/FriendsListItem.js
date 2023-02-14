import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineIndicator";
import {useDispatch} from "react-redux";
import {chatTypes,setChosenChatDetails} from "../../../store/slices/chatSlice";

const FriendsListItem = ({ id, username, isOnline }) => {
   const dispatch = useDispatch()
   const handleChooseActiveConversation = () => {
      dispatch(setChosenChatDetails({ chatDetails: {id: id, name: username}, chatType: chatTypes.DIRECT }));
   };
  return (
    <Button
        onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username}/>
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
           //#8e9297

          color: "#f1f1f5",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
