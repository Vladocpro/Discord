import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {useDispatch,useSelector} from "react-redux";
import {closeAlertMessage} from "../../store/slices/alertSlice";

const AlertNotification = () => {
  const {alertMessageContent, showAlertMessage} = useSelector(state => state.alert)
  const dispatch = useDispatch()
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={() => dispatch(closeAlertMessage())}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};



export default AlertNotification;
