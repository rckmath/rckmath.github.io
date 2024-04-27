import React, { useEffect, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Box, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography } from "@mui/material";

import FlipIcon from "@mui/icons-material/Flip";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { generateRandomTime } from "../../utils";

const FlipCardButton = styled((props) => {
  const { flip, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, flip }) => ({
  transform: !flip ? "scaleX(1)" : "scaleX(-1)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FlippingCard = styled((props) => {
  const { flip, ...other } = props;
  return <Card {...other} />;
})(({ theme, flip }) => ({
  transform: !flip ? "scaleX(1)" : "scaleX(-1)",
  transformStyle: "preserve-3d",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainCard = ({ title, headerIcon, setExpandPicture, backContent = "", frontContent = "" }) => {
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
    setTime(generateRandomTime());
  }, []);

  return (
    <Box component="div" sx={{ perspective: "1000px" }}>
      <FlippingCard flip={flipped} sx={{ width: isMobile ? 345 : 420, fontSize: isMobile ? "1.1rem" : "1rem" }}>
        {!flipped && (
          <Fragment>
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
                  flip={flipped}
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
                <Typography variant="body2" color="text.secondary" fontSize="0.9rem">
                  Published by Erick M. L. Pacheco
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
                {frontContent}
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
              <Typography
                variant="body2"
                sx={{ fontSize: "0.75rem", color: "text.secondary", ml: "auto", mr: isMobile ? "2.75vw" : "0.5dvw" }}
              >
                {`${today} at ${time}`}
              </Typography>
            </CardActions>
          </Fragment>
        )}

        {flipped && (
          <Fragment>
            <CardHeader
              sx={{ transformStyle: "preserve-3d", transform: !flipped ? "scaleX(1)" : "scaleX(-1)" }}
              avatar={headerIcon}
              action={
                <FlipCardButton
                  flip={flipped}
                  onClick={handleFlipCard}
                  size={isMobile ? "large" : "medium"}
                  aria-label={flipped ? "show less" : "show more"}
                >
                  <FlipIcon fontSize="inherit" />
                </FlipCardButton>
              }
            />
            <CardContent sx={{ transformStyle: "preserve-3d", transform: !flipped ? "scaleX(1)" : "scaleX(-1)" }}>
              {backContent}
            </CardContent>
          </Fragment>
        )}
      </FlippingCard>
    </Box>
  );
};

export default MainCard;
