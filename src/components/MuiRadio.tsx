import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
//   FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState("");
  // console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box marginTop="2rem">
      <Typography variant="h3">Radio Buttons</Typography>
      <FormControl error={false}>
        {/* specifying the error prop will cause the form label color to change to red if error is true*/}
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          //   row    : use this prop to align the radio buttons in a row. If not specified by default they will be in a column
        >
          <FormControlLabel
            // size and color prop can be used in the radio component to change appearance. Default size is medium and default color is primary
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="medium" color="primary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="success" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        {/* <FormHelperText>Invalid Selection</FormHelperText> use if there is any error*/}
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
