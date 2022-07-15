import {
  Button,
  Typography,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormats(updatedFormat);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        MUI Buttons
      </Typography>
      <Stack spacing={4} direction="column">
        <Stack spacing={2} direction="row">
          {/* Stack is a layout component */}
          <Button variant="text" href="https://google.com">
            Text
          </Button>
          {/* The text variant can have an href attribute specifying which changes it from a button to an anchor tag */}
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          {/* For buttons having icon and text */}
          <Button variant="contained" startIcon={<SendIcon />} disableRipple>
            {/* The disableElevation prop removes the ripple effect on clicking 
            the button */}
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            {/* The disableElevation prop removes the box-shadow and elevation of the button */}
            Send
          </Button>
          {/* For buttons with only icons and no text */}
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          {/*
                In button groups we specify the variant, size, color and other properties of the buttons
                in the ButtonGroup component except for the onClick.
                aria-label property should be given for accessibility purposes ( value is alignment button group )
                orientation by default is horizontal, but we can make it vertical also
            */}
          <ButtonGroup
            variant="contained"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left clicked")}>Left</Button>
            <Button onClick={() => alert("Center clicked")}>Center</Button>
            <Button onClick={() => alert("Right clicked")}>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text formatting"
            size="small"
            color="success"
            // orientation="vertical"
            value={formats}
            onChange={handleFormatChange}
            exclusive // if true, allows us to select only one toggle button value at a time
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
