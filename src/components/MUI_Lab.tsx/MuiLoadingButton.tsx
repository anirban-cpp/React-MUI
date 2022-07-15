import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save'

const MuiLoadingButton = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Mui Skeleton
      </Typography>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton variant="outlined" loading>
          Submit
        </LoadingButton>
        <LoadingButton variant="outlined" loading loadingIndicator="Loading...">
          Submit
        </LoadingButton>
        <LoadingButton variant="outlined" loadingPosition='start' startIcon={<SaveIcon/>}>
            Save
        </LoadingButton>
        <LoadingButton variant="outlined" loadingPosition='start' startIcon={<SaveIcon/>} loading>
            Save
        </LoadingButton>
      </Stack>
    </>
  );
};

export default MuiLoadingButton;
