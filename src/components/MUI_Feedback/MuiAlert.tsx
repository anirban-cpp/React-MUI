import { Stack, Alert, Typography, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Alert
      </Typography>
      <Stack spacing={2}>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is an warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is an success alert</Alert>

        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an success alert
        </Alert>

        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close alert")}
        >
          {/* The onClose prop is used to use a state variable to show/hide the alert */}
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is an warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          // the icon prop is used to change the default icon to something else
          action={
            <Button color="inherit" size='small'>UNDO</Button>
          }
          // the action prop is used to provide a component which can be used to perform an action on the alert
        >
          <AlertTitle>Success</AlertTitle>
          This is an success alert
        </Alert>
      </Stack>
    </>
  );
};

export default MuiAlert;
