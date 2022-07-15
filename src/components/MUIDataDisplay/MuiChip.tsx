import { Stack, Typography, Chip, Avatar } from "@mui/material";

import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Chip
      </Typography>
      <Stack direction="row" spacing={1}>
        {/* defualt size is medium */}
        <Chip label="chip" color="primary" size="small" />
        <Chip
          label="outlined-chip"
          color="secondary"
          size="small"
          variant="outlined"
        />
        <Chip
          label="avatar-chip"
          color="secondary"
          size="small"
          variant="outlined"
          avatar={<Avatar>A</Avatar>}
        />
        <Chip
          label="Icon chip"
          color="primary"
          size="small"
          icon={<FaceIcon />}
        />
        <Chip
          label="click"
          color="success"
          size="small"
          onClick={() => alert("Clicked")}
        />
        <Chip
          label="Delete"
          color="error"
          size="small"
          onClick={() => alert("Clicked")}
          onDelete={() => alert("on Delete called")}
        />
        {chips.map((chip, i) => (
          <Chip color="info" key={i} label={chip} onDelete={() => handleDelete(chip)} size="small"/>
        ))}
      </Stack>
    </>
  );
};

export default MuiChip;
