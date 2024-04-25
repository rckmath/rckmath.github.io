import React from "react";

import { Grid, IconButton } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Grid
      gap={10}
      container
      component="footer"
      sx={{ display: "flex", marginY: 5, paddingBottom: "1rem", justifyContent: "center" }}
    >
      <IconButton
        size="large"
        color="inherit"
        aria-label="Email"
        onClick={() => (window.location.href = "mailto:ericklopes02@outlook.com")}
      >
        <EmailIcon sx={{ fontSize: "3.5rem" }} />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        aria-label="GitHub"
        onClick={() => window.open("https://github.com/rckmath", "_blank")}
      >
        <GitHubIcon sx={{ fontSize: "3.5rem" }} />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        aria-label="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/rckmath", "_blank")}
      >
        <LinkedInIcon sx={{ fontSize: "3.5rem" }} />
      </IconButton>
    </Grid>
  );
};

export default Footer;
