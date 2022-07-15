import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

// Box component is mostly used as a replacement of the div tag
// By default component prop of Box is div
// However we can specify any other type of layout we want like span, article, etc to the component prop to change the type of component Box is using under the hood
// the prop sx is used to provide a custom style to the Box component

// Stack component is used to manage layouts in one dimention either horizontal or vertical
// By default Stack layout arranges all elements inside it in columns. So basically by default display: flex, flexDirection: column

// Grid component has two variations: A grid container for the parent and grid item for the children
/*
    The Grid component under the hood uses the flexbox model
    The Grid consists of 12 columns
    Each item in the grid can take up one or more columns as its width
    There are 5 breakpoints each corresponding to a certain device width
    xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors
    We can assign integer values to each breakpoint which indicates how many of the 12 columns are occupied by that item when the viewport satisfies that breakpoint
*/

// The Paper component is used for making cards and such in the UI. The paper component has an elevation and show by default with a bit rounded edge.
// Using the sx prop we can add our own styling or change the shadow by changing the elevation using the elevation prop. Default elevation is 1
// By defualt it has a white background

/*
    The Card component under the hood uses the Paper component
*/

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '2rem' }} elevation={4}>
      <Stack
        sx={{
          border: "1px solid",
        }}
        direction="row" // direction prop can have row, row-reverse, column, column-reverse. Default is column
        spacing={2} // gives spacing between the items. spacing = 1 means there is a gap of 8px between each consecutive element
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Box component
        </Box>
        <Box // by default this is a div
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2} // p = 2 meaning padding = 2*8 = 16px. Basically p=1 means padding=8px
        ></Box>
      </Stack>
      <Grid container my={4} columnSpacing={2} rowSpacing={4}>
        {/* spacing = 2 means there is a gap of 2*8=16px between each grid item (columns and rows) */}
        {/* for giving space only in between the rows we use rowSpacing prop and for between columns we use columnSpacing prop */}
        <Grid item xs={6}>
          {/*   xs={6} means that for device size mobile and above (xs means mobile and above), 6 out of 12 columns will be taken by that item
                So in general if xs={a}, then width of that grid item is ((a/12)*100)% 
                We can specify different width on different devices. So we may say <Grid xs={6} sm={3}/>. Thus one means for mobile devices the item takes
                6 out of 12 columns of the total width i.e, 50% whereas for device sizes >=tablet (meaning sm), the item will take 3 out of 12 columns or 25% width
                ** The column thing is for reference to easily calculate width. It is not actually there.
                If we don't assign anything to xs meaning <Grid item xs/> then it is order layout or in other words all the grid items have equal width
                xs='auto' will ensure that width is fit-content only
            */}
          <Box bgcolor="primary.light" p={2}>
            Grid Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Grid Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
