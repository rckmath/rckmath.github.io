import React from "react";
import { useMediaQuery } from "react-responsive";

import "./HeaderStyles.css";

import TerminalIcon from "@mui/icons-material/Terminal";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", paddingTop: "2rem" }}>
      <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
        <IconButton
          size="large"
          href="/cmd"
          edge="start"
          color="inherit"
          aria-label="terminal-icon"
          sx={{ marginRight: "1rem" }}
        >
          <TerminalIcon sx={{ fontSize: isMobile ? "4.75rem" : "5.75rem" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h4" color="inherit" fontSize={isMobile ? "1.75rem" : "2.25rem"}>
            Hi, my name is Erick.
          </Typography>
          <Typography variant="h5" color="inherit">
            Nice to meet you.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
