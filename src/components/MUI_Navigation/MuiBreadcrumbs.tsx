import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs" separator={<KeyboardArrowRightIcon/>} itemsBeforeCollapse={2} maxItems={2}>
        {/* We can specify the max no of items we want to show or the no of items before or after collapse:  itemsAfterCollapse, itemsBeforeCollapse */}
        {/* default separator is '/'. We can use any separator even an icon */}
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
