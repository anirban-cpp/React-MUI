import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{
        width: "calc(100% - 8rem)",
        position: "fixed",
        bottom: 0,
      }}
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      // showLabels will always show the label of the BottomNavigationAction even for the ones that are not active. However if we don't specify it then only the active action's label will be visible
      // add an onClick on the BottomNavigationAction component for each
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
