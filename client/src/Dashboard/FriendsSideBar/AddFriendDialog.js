import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { validateMail } from "../../shared/utils/validators";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import {useDispatch} from "react-redux";
import {sendFriendInvitation} from "../../store/slices/friendsSlice";
import {closeAlertMessage} from "../../store/slices/alertSlice";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
}) => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState("damon@gmail.com");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    // send friend request to server
    dispatch(sendFriendInvitation({targetMailAddress: mail}))
        .then((e) => {
          console.log(e)
      if (!e.meta.rejectedWithValue) {
        handleCloseDialog();
      }
    })
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    // dispatch(closeAlertMessage())
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
