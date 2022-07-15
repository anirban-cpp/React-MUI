import {
  Stack,
  CircularProgress,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

const MuiProgress = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev: number) => prev + 1);

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Mui Progress Bar
      </Typography>
      <Stack spacing={2} direction="row">
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
      <Stack spacing={2} marginTop={4} marginBottom={4}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={progress} />
      </Stack>
    </>
  );
};

export default MuiProgress;
