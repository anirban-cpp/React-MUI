import {
  Stack,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
} from "@mui/material";

import { itemData1, itemData2, itemData3 } from "../../Images";

const MuiImageList = () => {
  return (
    <>
      <Typography variant="h4" marginTop={4} marginBottom={4}>
        Image List
      </Typography>
      <Stack spacing={4} direction="row">
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData1.map((item, i) => (
            <ImageListItem key={i}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
        <ImageList
          variant="woven"
          sx={{ width: 500, height: 450 }}
          cols={3}
          gap={8}
        >
          {itemData2.map((item, i) => (
            <ImageListItem key={i}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData3.map((item, i) => (
              <ImageListItem key={i}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </>
  );
};

export default MuiImageList;
