import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logout } from "../../shared/utils/auth";
import {useDispatch,useSelector} from "react-redux";
import {setAudioOnly} from "../../store/slices/roomSlice";

const  BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const audioOnly = useSelector(state => state.room.audioOnly)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

   const handleAudioOnlyChange = () => {
      dispatch(setAudioOnly(!audioOnly));
   };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
         <MenuItem onClick={handleAudioOnlyChange}>
            {audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
         </MenuItem>
      </Menu>
    </div>
  );
}
export default BasicMenu;
