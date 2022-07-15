import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTnC, setAceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  // console.log({ skills });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) setSkills([...skills, event.target.value]);
    else setSkills(skills.filter((skill) => skill !== event.target.value));
  };

  return (
    <Box>
      <Typography variant="h4" marginTop="2rem">
        Checkbox
      </Typography>
      {/* label checkbox */}
      <Box>
        <FormControlLabel
          label="I accept all the terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      {/* Icon checkbox */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          {" "}
          {/* Specify the error prop if we want an error and use FormHelperText for specifying an error */}
          <FormLabel>Skills</FormLabel>
          <FormGroup //   row    : use this prop to align the checkboxes in a row. If not specified by default they will be in a column
          >
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  size="small" // size can be small or medium
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
