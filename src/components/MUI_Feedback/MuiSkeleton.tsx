import { Stack, Typography, Skeleton, Box, Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Mui Skeleton
      </Typography>
      <Stack spacing={1} width="250px">
        {/* default variant='text */}
        {/* default animation is pulse. It can be wave, pulse or false(for no animation) */}
        <Skeleton />
        <Skeleton variant="circular" height={40} width={40} />
        <Skeleton variant="rectangular" height={125} width={250} />
        <Skeleton animation="wave" />
      </Stack>
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/256x144"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React Mui Tutorial</Typography>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MuiSkeleton;
