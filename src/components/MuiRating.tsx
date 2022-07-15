import { Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);

  // console.log({ rating });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };

  return (
    <Stack spacing={2} marginTop="2rem">
      <Typography variant="h4">Rating</Typography>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5} // default precision is 1
        size="large" // default size is medium
      />
      <Stack spacing={2} marginTop="2rem">
        <Rating
          value={rating}
          onChange={handleChange}
          //   precision={0.5} // default precision is 1
          size="large" // default size is medium
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          //   readOnly  : this prop makes the component read only ot immutable. Suitable for showing customer reviews
          // hightlightSelectedOnly : this prop only highlights the selected rating number. Suitable for showing feedback based on emoji as in good, very good etc
        />
      </Stack>
    </Stack>
  );
};

export default MuiRating;
