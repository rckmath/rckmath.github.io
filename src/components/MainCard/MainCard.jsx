import React, { useEffect, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Stack, Box, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, alpha } from "@mui/material";

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
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FlippingCard = styled((props) => {
  const { flip, ...other } = props;
  return <Card {...other} />;
})(({ theme, flip }) => ({
  transform: !flip ? "scaleX(1)" : "scaleX(-1)",
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest,
  }),
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: "blur(10px)",
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainCard = ({ title, headerIcon, flipEnabled, setExpandPicture, backContent = "", frontContent = "" }) => {
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
    <Box component="div" sx={{ height: "100%", width: "100%" }}>
      <FlippingCard
        flip={flipped}
        sx={{
          width: "100%",
          height: "100%",
          fontSize: isMobile ? "1.1rem" : "1rem",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!flipped && (
          <Fragment>
            <CardHeader
              sx={{ flexShrink: 0 }}
              avatar={
                <StyledAvatar
                  src="/me.png"
                  onClick={handleExpandPicture}
                  aria-label="my profile picture"
                  sx={{
                    cursor: "pointer",
                    width: { xs: 56, md: 48 },
                    height: { xs: 56, md: 48 },
                  }}
                />
              }
              action={
                <Stack alignItems="space-between">
                  <FlipCardButton
                    flip={flipped}
                    disabled={!flipEnabled}
                    onClick={handleFlipCard}
                    size={isMobile ? "large" : "medium"}
                    aria-label={flipped ? "show less" : "show more"}
                  >
                    <FlipIcon fontSize="inherit" />
                  </FlipCardButton>
                  {flipEnabled && (
                    <Typography
                      variant="caption"
                      lineHeight="1.43"
                      fontWeight="bold"
                      color="text.secondary"
                      fontSize={isMobile ? "0.7rem" : "0.55rem"}
                      sx={{
                        top: isMobile ? "-11px" : "-7px",
                        position: "relative",
                        userSelect: "none",
                        opacity: 0.7,
                        letterSpacing: "0.5px",
                      }}
                    >
                      CLICK ME
                    </Typography>
                  )}
                </Stack>
              }
              title={
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontWeight="bold"
                  fontSize="inherit"
                  sx={{
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                  }}
                >
                  {title}
                </Typography>
              }
              subheader={
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.secondary" fontSize="0.9rem" sx={{ opacity: 0.7 }}>
                    Published by Erick M. L. Pacheco
                  </Typography>
                </Stack>
              }
            />
            <CardContent sx={{ py: 3, flexGrow: 1, width: "100%" }}>{frontContent}</CardContent>
          </Fragment>
        )}

        {flipped && (
          <Fragment>
            <CardHeader
              sx={{
                transform: "scaleX(-1)",
                flexShrink: 0,
              }}
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
            <CardContent
              sx={{
                transform: "scaleX(-1)",
                flexGrow: 1,
                width: "100%",
              }}
            >
              {backContent}
            </CardContent>
          </Fragment>
        )}
      </FlippingCard>
    </Box>
  );
};

export default MainCard;
