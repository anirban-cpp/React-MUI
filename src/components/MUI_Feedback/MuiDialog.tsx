import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Dialog
      </Typography>
      <Button onClick={() => setOpenDialog(true)}>Open dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sre you want to submit the test? You will not be allowed to
            edit after submitting
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button autoFocus>Submit</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MuiDialog;
