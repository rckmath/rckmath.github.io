import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { Box, Container, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SteamIcon from "/steam.svg";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { isDarkMode } = useTheme();
  const fontSize = isMobile ? "2rem" : "2.25rem";

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        py: { xs: 1 },
        px: { xs: 2, sm: 3 },
        background: (theme) =>
          alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(10px)",
        borderTop: (theme) =>
          `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, sm: 4 },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Tooltip title="mailto:ericklopes02@outlook.com" placement="top" arrow>
            <StyledIconButton
              size="large"
              color="inherit"
              aria-label="Email"
              onClick={() => (window.location.href = "mailto:ericklopes02@outlook.com")}
            >
              <EmailIcon sx={{ fontSize }} />
            </StyledIconButton>
          </Tooltip>

          <Tooltip title="https://github.com/rckmath" placement="top" arrow>
            <StyledIconButton
              size="large"
              color="inherit"
              aria-label="GitHub"
              onClick={() => window.open("https://github.com/rckmath", "_blank")}
            >
              <GitHubIcon sx={{ fontSize }} />
            </StyledIconButton>
          </Tooltip>

          <Tooltip title="https://linkedin.com/in/rckmath" placement="top" arrow>
            <StyledIconButton
              size="large"
              color="inherit"
              aria-label="LinkedIn"
              onClick={() => window.open("https://linkedin.com/in/rckmath", "_blank")}
            >
              <LinkedInIcon sx={{ fontSize }} />
            </StyledIconButton>
          </Tooltip>

          <Tooltip title="https://steamcommunity.com/id/rckmath" placement="top" arrow>
            <StyledIconButton
              size="large"
              color="inherit"
              aria-label="Steam"
              onClick={() => window.open("https://steamcommunity.com/id/rckmath", "_blank")}
            >
              <img 
                src={SteamIcon} 
                alt="Steam" 
                style={{ 
                  width: fontSize,
                  height: fontSize,
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)'
                }} 
              />
            </StyledIconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
