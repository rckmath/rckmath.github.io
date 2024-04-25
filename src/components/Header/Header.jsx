import React from "react";

import "./Header.css";

import TerminalIcon from "@mui/icons-material/Terminal";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", paddingTop: "1rem" }}>
      <Toolbar sx={{ justifyContent: "center", alignItems: "center", padding: "0.5rem 1rem" }}>
        <IconButton
          size="large"
          href="/cmd"
          edge="start"
          color="inherit"
          aria-label="terminal-icon"
          sx={{ marginRight: "1rem" }}
        >
          <TerminalIcon sx={{ fontSize: "5.5rem" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h4" color="inherit">
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
