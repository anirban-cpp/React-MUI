import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Box } from "@mui/system";

// Masonry is used for a list of elements with consistent width but different heights
// Mostly used to showcase a gallery of images

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MuiMasonry = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Mui Masonry
      </Typography>
      <Box
        sx={{
          width: 500,
          minHeight: 400,
        }}
      >
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height,
                border: "1px xolid",
              }}
            >
              {/* {index + 1} */}
              <Accordion
                sx={{
                  minHeight: height,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Accordian {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default MuiMasonry;
