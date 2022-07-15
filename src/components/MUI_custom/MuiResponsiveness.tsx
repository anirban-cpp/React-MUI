import { Box, Typography } from "@mui/material";

const MuiResponsiveness = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        MUI Responsiveness
      </Typography>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // >=0
            sm: 200, // >=600
            md: 300, // >=900
            lg: 400, // >=1200
            xl: 500, // >=1536
          },
          bgcolor: "primary.main",
        }}
      ></Box>
    </>
  );
};

export default MuiResponsiveness;
