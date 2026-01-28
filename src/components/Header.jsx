import { useMediaQuery } from "react-responsive";

import { keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import TerminalIcon from "@mui/icons-material/Terminal";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppBar, Toolbar, Typography, IconButton, Box, Container, alpha } from "@mui/material";

import { TypewriterText } from "./TypewriterText";
import { useTheme } from "../context/ThemeContext";
import LanguageToggle from "./LanguageToggle";

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
  transition: "color 0.3s ease-in-out",
  color: theme.palette.text.primary,
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <StyledAppBar position="sticky" variant="dense" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
            minHeight: { xs: "48px", sm: "72px" },
            px: 0,
            position: "relative",
          }}
        >
          {/* Center content - absolutely positioned for true centering */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1 },
            }}
          >
            <IconButton
              href="/cmd"
              edge="start"
              size="large"
              aria-label="terminal-icon"
              sx={{
                "&:hover": {
                  transform: "none",
                  cursor: "pointer",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? alpha("#fff", 0.1) : alpha("#000", 0.1),
                },
              }}
            >
              <StyledTerminalIcon sx={{ fontSize: isMobile ? "2.25rem" : "3.25rem" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                lineHeight: 1,
                mt: 0,
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mb: 0,
                }}
              >
                <TypewriterText
                  text="Hi, my name is Erick."
                  fontSize={isMobile ? "1rem" : "1.5rem"}
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "linear-gradient(45deg, #E8F5E9 30%, #A5C4AC 90%)"
                        : "linear-gradient(45deg, #1A2E1F 30%, #4A6B52 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                <BlinkingTypography
                  variant="h4"
                  sx={{
                    opacity: 0.7,
                    fontWeight: 300,
                    fontSize: isMobile ? "1rem" : "1.5rem",
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  |
                </BlinkingTypography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  lineHeight: 1,
                  opacity: 0.8,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  fontSize: isMobile ? "0.8rem" : "1.1rem",
                  mt: 0,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Nice to meet you.
              </Typography>
            </Box>
          </Box>
          {/* Right side controls */}
          <Box sx={{ display: "flex", alignItems: "center", zIndex: 1 }}>
            <LanguageToggle />
            <IconButton
              onClick={toggleTheme}
              size={isMobile ? "small" : "medium"}
              aria-label="theme-toggle"
              sx={{
                ml: 1.5,
                color: (theme) => theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? alpha("#fff", 0.1) : alpha("#000", 0.1),
                },
              }}
            >
              {isDarkMode ? (
                <LightModeIcon sx={{ fontSize: isMobile ? "1.9rem" : "2.15rem" }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: isMobile ? "1.9rem" : "2.15rem" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
