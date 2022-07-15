import { Stack, TextField, Typography, InputAdornment } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextFields = () => {
  const [showpassword, setpasswordshow] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Typography variant="h3" marginTop={7}>
        MUI TextField
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        {/* variant=outlined is the defualt one */}
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" color="secondary" size="small" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form input" required />
        <TextField
          label="Password"
          helperText="Do not share your password"
          type="password"
          required
        />
        <TextField label="Disabled" disabled />
        <TextField label="Read only" inputProps={{ readOnly: true }} />{" "}
        {/* This is not editable but not disabled */}
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* InputAdornment is used to place any suffix or prefix in the underlying input component.
            The underlying input component can be addressed using the InpuTProps */}
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type={showpassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!showpassword ? (
                  <VisibilityIcon
                    fontSize="small"
                    onClick={() => setpasswordshow(true)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    fontSize="small"
                    onClick={() => setpasswordshow(false)}
                    style={{ cursor: "pointer" }}
                    color="primary"
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <p>Validation text input</p>
        <TextField
          label="Username"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value && "Field cannot be empty"}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFields;
