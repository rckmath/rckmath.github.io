import React from "react";
import { useMediaQuery } from "react-responsive";

import { keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import TerminalIcon from "@mui/icons-material/Terminal";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppBar, Toolbar, Typography, IconButton, Box, Container, alpha } from "@mui/material";

import { TypewriterText } from "./TypewriterText";
import { useTheme } from "../context/ThemeContext";

const blink = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }`;

const BlinkingTypography = styled(Typography)({
  animation: `${blink} 0.75s infinite`,
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: "blur(10px)",
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: alpha(theme.palette.background.paper, 0.9),
  },
}));

const StyledTerminalIcon = styled(TerminalIcon)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <StyledAppBar
      position="sticky"
      variant="dense"
      sx={{
        boxShadow: "none",
        py: { xs: 1, sm: 1.5 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: "64px", sm: "72px" },
            px: 0,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
              flex: 1,
              justifyContent: "center",
              position: "relative",
            }}
          >
            <IconButton
              href="/cmd"
              edge="start"
              size="large"
              color="inherit"
              aria-label="terminal-icon"
              sx={{
                "&:hover": {
                  backgroundColor: alpha("#fff", 0.1),
                },
              }}
            >
              <StyledTerminalIcon sx={{ fontSize: isMobile ? "3rem" : "4rem" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                lineHeight: 1,
                mt: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0,
                }}
              >
                <TypewriterText
                  text="Hi, my name is Erick."
                  fontSize={isMobile ? "1.25rem" : "1.5rem"}
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    background: "linear-gradient(45deg, #fff 30%, #e0e0e0 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                <BlinkingTypography
                  variant="h4"
                  color="inherit"
                  sx={{
                    opacity: 0.7,
                    fontWeight: 300,
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                  }}
                >
                  |
                </BlinkingTypography>
              </Box>
              <Typography
                variant="h5"
                color="inherit"
                sx={{
                  lineHeight: 1,
                  opacity: 0.8,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  mt: 0,
                }}
              >
                Nice to meet you.
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={toggleTheme}
            size="large"
            color="inherit"
            aria-label="theme-toggle"
            sx={{
              position: "absolute",
              right: 0,
              "&:hover": {
                backgroundColor: alpha("#fff", 0.1),
              },
            }}
          >
            {isDarkMode ? (
              <LightModeIcon sx={{ fontSize: isMobile ? "2rem" : "2.25rem" }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: isMobile ? "2rem" : "2.25rem" }} />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
