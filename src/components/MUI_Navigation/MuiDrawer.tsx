import { Box, Drawer, Typography, IconButton } from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"   // the anchor tag provides the direction from where the drawer slides in. "left" means on open, the drawer will slide in from the left side
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {/* Provide the content of the drawer */}
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Sidebar Panel
          </Typography>
          <Typography variant="body1" component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            commodi et aperiam natus numquam doloremque dolores, cum dolor
            debitis? Nam earum deserunt porro fugit sequi, recusandae obcaecati
            pariatur tempora eligendi?
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
