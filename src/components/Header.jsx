import React from "react";
import { useMediaQuery } from "react-responsive";

import { keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import TerminalIcon from "@mui/icons-material/Terminal";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

import { TypewriterText } from "./TypewriterText";

const blink = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }`;

const BlinkingTypography = styled(Typography)({
  animation: `${blink} 0.75s infinite`,
});

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", paddingY: isMobile ? "1dvh" : "1.25dvh" }}
    >
      <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
        <IconButton
          href="/cmd"
          edge="start"
          size="large"
          color="inherit"
          aria-label="terminal-icon"
          sx={{ marginRight: "1rem" }}
        >
          <TerminalIcon sx={{ fontSize: isMobile ? "4.75rem" : "5.75rem" }} />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: isMobile ? "60vw" : "25vw",
          }}
        >
          <Box component="div" sx={{ display: "inline-flex" }}>
            <TypewriterText text="Hi, my name is Erick." fontSize={isMobile ? "1.75rem" : "2.25rem"} variant="h4" />
            <BlinkingTypography variant="h4" color="inherit">
              |
            </BlinkingTypography>
          </Box>
          <Typography variant="h5" color="inherit">
            Nice to meet you.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
