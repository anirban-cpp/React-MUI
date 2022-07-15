import { Snackbar, Button, Typography, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

// Basically Snackbar is like toast notifications

// Custom Snackbar

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnakbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

// Usual Snackbar

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [customopen, setCustomOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const CustomhandleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setCustomOpen(false);
  };

  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Snackbar
      </Typography>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
      {/* Custom Snackbar */}
      <Button onClick={() => setCustomOpen(true)}>
        Custom Snackbar Submit
      </Button>
      <Snackbar
        open={customopen}
        autoHideDuration={4000}
        onClose={CustomhandleClose}
      >
        <SnackbarAlert onClose={CustomhandleClose} severity="success">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
