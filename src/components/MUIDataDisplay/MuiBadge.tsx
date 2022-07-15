import { Badge, Stack, Typography } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Badge component
      </Typography>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={5} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={5} color="secondary">
          <MailIcon />
        </Badge>
        {/* If badgeContent is 0, then the badge is not visisble. To override this we can use the prop showZero */}
        <Badge badgeContent={0} color="primary" showZero>
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="error">
          {/* In the UI, the badge shows 99+. So basically any content > 99 is shown as 99+ */}
          <MailIcon />
        </Badge>
        {/*If we want the badge to show content > 99, then we have set the max prop */}
        <Badge badgeContent={500} color="primary" max={999}>
          <MailIcon />
        </Badge>
        <Badge variant='dot' color="primary">
          <MailIcon />
        </Badge>
      </Stack>
    </>
  );
};

export default MuiBadge;
