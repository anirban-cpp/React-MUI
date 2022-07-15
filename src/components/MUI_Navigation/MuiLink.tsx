import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Underline
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          {" "}
          {/* Here the link inherits the styles of the Typography component */}
          Underline
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
