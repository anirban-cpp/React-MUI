import { Typography, Switch, FormControlLabel, Box } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [toggle, setToggled] = useState(false);
  // console.log({ toggle });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggled(event.target.checked);
  };

  // For a group of switches, use a FormGroup similar to checkboxes and replace checkbox with Switch

  return (
    <Box marginTop="2rem">
      <Typography variant="h4">MUI Switch</Typography>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={toggle}
              onChange={handleChange}
              // size="small"  // default value is medium
              // color="success"   // default value is primary
            />
          }
        />
      </Box>
    </Box>
  );
};

export default MuiSwitch;
