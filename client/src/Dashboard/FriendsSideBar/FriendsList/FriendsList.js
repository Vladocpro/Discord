import React,{useEffect} from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import {useSelector} from "react-redux";



const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {

  const friends = useSelector(state => state.friends.friends)
  const onlineUsers = useSelector(state => state.friends.onlineUsers)
  const checkOnlineUsers = () => {
    let copyFriends =  [];
    // let copyOnlineUsers = Object.assign({isOnline: false}, onlineUsers);
    friends.forEach((f) => {
      const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
      copyFriends.push(Object.assign({f},  {mail: f.mail, username: f.username, id: f.id, isOnline: !!isUserOnline}))
      // f.isOnline = !!isUserOnline;
    });
    // console.log(friends)
    return copyFriends;
  };


  return (
    <MainContainer>
      {friends.length > 0 && checkOnlineUsers(friends, onlineUsers).map((f) => (
          <FriendsListItem
              username={f.username}
              id={f.id}
              key={f.id}
              isOnline={f.isOnline}
          />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
