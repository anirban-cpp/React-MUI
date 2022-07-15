import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Divider,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        List component
      </Typography>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#1a1919",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary="List item 1"
                secondary={
                  <Typography sx={{ color: "white" }} variant="body2">
                    Secondary Text
                  </Typography>
                }
                sx={{
                  color: "#fff",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider color="#efefef" />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary="List item 2"
                secondary={
                  <Typography sx={{ color: "white" }} variant="body2">
                    Secondary Text
                  </Typography>
                }
                sx={{
                  color: "#fff",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider color="#efefef" />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary="List item 3"
                secondary={
                  <Typography sx={{ color: "white" }} variant="body2">
                    Secondary Text
                  </Typography>
                }
                sx={{
                  color: "#fff",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider color="#efefef" />
        </List>
      </Box>
    </>
  );
};

export default MuiList;
