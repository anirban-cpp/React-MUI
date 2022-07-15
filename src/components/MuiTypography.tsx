import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>
        {/* gutterBottom is a prop that adds some margin at the bottom. The margin size depends on the variant*/}
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* Sub titiles */}
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      {/* Body */}
      <Typography variant="body1">
        {" "}
        {/* under the hood it is a p tag. By default if no variant is given it is body1 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        corporis dolore laboriosam iusto deleniti ad fugiat facilis commodi
        perspiciatis maiores consequatur delectus, asperiores pariatur cum!
        Inventore provident vel nobis doloribus.
      </Typography>
      <Typography variant="body2">
        {" "}
        {/* under the hood it is a p tag */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        quas iste aspernatur culpa odit a voluptate provident? Molestiae
        asperiores vitae odit cumque, ullam aperiam quam! Repellendus assumenda
        perferendis minima nesciunt.
      </Typography>

      {/* Say we want a h1 variant to have the styles of h4. In that case we will use the component prop */}
      <Typography variant="h4" component="h1">
        h1 heading with h4 styles
      </Typography>
    </div>
  );
};

export default MuiTypography;
