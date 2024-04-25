import React, { useEffect } from "react";

import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography } from "@mui/material";

import FlipIcon from "@mui/icons-material/Flip";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMediaQuery } from "react-responsive";

const FlipCardButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "scaleX(1)" : "scaleX(-1)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const getRandomTime = () => {
  const hrs = Math.round(Math.random() * 24);
  const mins = Math.round(Math.random() * 60);
  const hFormat = hrs < 10 ? "0" : "";
  const mFormat = mins < 10 ? "0" : "";
  const amPm = hrs < 12 ? "AM" : "PM";
  const is12 = hrs % 12 === 0;

  return amPm === "AM" && !is12
    ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
    : "AM" && is12
    ? String(12 + ":" + mFormat + mins + " " + amPm)
    : is12
    ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
    : String(hFormat + (hrs - 12) + ":" + mFormat + mins + " " + amPm);
};

const MainCard = ({ title, content = "", setExpandPicture }) => {
  const [fav, setFav] = React.useState(false);
  const [time, setTime] = React.useState(false);
  const [flipped, setFlipped] = React.useState(false);

  const today = new Date().toLocaleDateString();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleSetFav = () => {
    setFav(!fav);
  };

  const handleFlipCard = () => {
    setFlipped(!flipped);
  };

  const handleExpandPicture = () => {
    setExpandPicture(true);
  };

  useEffect(() => {
    setTime(getRandomTime());
  }, []);

  return (
    <Card sx={{ width: isMobile ? 345 : 400, fontSize: isMobile ? "1.2rem" : "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            src="./me.png"
            onClick={handleExpandPicture}
            aria-label="my profile picture"
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        }
        action={
          <FlipCardButton
            expand={flipped}
            onClick={handleFlipCard}
            size={isMobile ? "large" : "medium"}
            aria-label={flipped ? "show less" : "show more"}
          >
            <FlipIcon fontSize="inherit" />
          </FlipCardButton>
        }
        title={
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold" fontSize="inherit">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" fontSize="inherit">
            {`${today} at ${time}`}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleSetFav}
          aria-label="add to favorites"
          size={isMobile ? "large" : "medium"}
          sx={{ color: fav ? red[700] : "text.secondary", transition: "color 0.2s ease-in-out" }}
        >
          <FavoriteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="share" size={isMobile ? "large" : "medium"}>
          <ShareIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MainCard;
