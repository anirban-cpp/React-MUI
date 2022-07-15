import {
  CardHeader,
  IconButton,
  Stack,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Avatar,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/*
    For the Card component we need the Card component and CardContent component
    The Card component will take up the width of its parent component
    For interacting with the card we will need the CardActions component and Button component
    For adding images to Cards we need the CardMedia component
*/

const MuiCard = () => {
  return (
    <>
      <Typography gutterBottom variant="h4">
        Card
      </Typography>
      <Stack direction="row" gap={4}>
        {/* Card 1 */}
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="300px"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLdbAqtzJd2i6o0TLdIxnQUzhKNKb58koA&usqp=CAU"
            />
            {/* CardMedia component is used to add an image to the Card component. To add the image use the image prop. To add any other type of media change the component prop accordingly*/}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="text">SHARE</Button>
              <Button variant="text">LEARN MORE</Button>
            </CardActions>
          </Card>
        </Box>
        <Box width="345px">
          {/* Card 2 */}
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="300px"
              image="https://mui.com/static/images/cards/paella.jpg"
            />
            <CardContent>
              <Typography variant="body1">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    flexDirection: "row",
                  }}
                >
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </>
  );
};

export default MuiCard;
