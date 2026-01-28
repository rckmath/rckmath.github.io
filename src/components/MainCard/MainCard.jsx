import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { styled } from "@mui/material/styles";
import { Stack, Box, Card, CardHeader, CardContent, IconButton, Typography, alpha } from "@mui/material";

import FlipIcon from "@mui/icons-material/Flip";

import useTranslation from "../../hooks/useTranslation";

const FlipCardButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "flip",
})(({ theme, flip }) => ({
  transform: !flip ? "scaleX(1)" : "scaleX(-1)",
  marginLeft: "auto",
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FlippingCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "flip",
})(({ theme, flip }) => ({
  transform: !flip ? "scaleX(1)" : "scaleX(-1)",
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.shortest,
  }),
  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.paper, 0.85)
      : alpha(theme.palette.background.paper, 0.9),
  backdropFilter: "blur(12px)",
  border: `1px solid ${theme.palette.custom?.cardBorder || alpha(theme.palette.primary.main, 0.15)}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? `0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 ${alpha(theme.palette.primary.main, 0.1)}`
      : `0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
  "&:hover": {
    boxShadow:
      theme.palette.mode === "dark"
        ? `0 8px 32px rgba(16, 185, 129, 0.2), 0 4px 16px rgba(0, 0, 0, 0.4)`
        : `0 8px 28px rgba(5, 150, 105, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)`,
  },
}));

const MainCard = ({ title, headerIcon, flipEnabled, backContent = "", frontContent = "" }) => {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleFlipCard = () => {
    setFlipped(!flipped);
  };

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
                      {t("clickMe")}
                    </Typography>
                  )}
                </Stack>
              }
              title={
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontWeight="bold"
                  sx={{
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                  }}
                >
                  {title}
                </Typography>
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
