import { Box, Stack, Typography, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  // console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack spacing={4} marginTop="2rem">
      <Typography variant="h3" gutterBottom>
        MUI Select
      </Typography>
      <Box width="250px">
        {/* Approach 1: Using TextField and MenuItem components for single select dropdown*/}
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          // for multiselect use SelectProps -> multiple as true and change value state to array
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="Uk">United Kingdom</MenuItem>
          <MenuItem value="ES">Spain</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
