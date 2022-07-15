import { Stack, Avatar, Typography, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Avatar
      </Typography>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar
          src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Batman"
        />
      </Stack>
      <Stack spacing={1} direction="row">
        {/* To group multiple avatars we use the AvatarGroup component */}
        {/* we can use the max prop to say how many max avatars we want to show. So here max=3 will show (JohnDoe)(Jane Doe)(+2) like this*/}
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/51.jpg"
            alt="Jane Doe"
          />
          <Avatar sx={{ bgcolor: "primary.light" }}>AB</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>DH</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        {/* We can have 3 different avatar shape variants. Circular (default), square and rounded (rounded is square with border-radius) */}
        <Avatar
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          variant="square"
        >
          AB
        </Avatar>
        <Avatar
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
          variant="rounded"
        >
          DH
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
