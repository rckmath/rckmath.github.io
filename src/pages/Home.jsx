import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { alpha } from "@mui/material/styles";
import { useTheme } from "../context/ThemeContext";
import { MainCard } from "../components/MainCard";
import { Cards } from "../components/MainCard";
import AboutMeContent from "../components/AboutMeContent/AboutMeContent";

const Home = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });
  const { isDarkMode } = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.95)} 0%, ${alpha(theme.palette.background.paper, 0.95)} 100%)`,
      }}
    >
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, minHeight: "100vh" }}>
          <Container
            maxWidth="xl"
            sx={{
              pt: { xs: 3 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -20,
                      left: -20,
                      right: -20,
                      bottom: -20,
                      background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
                      zIndex: -1,
                      borderRadius: "50%",
                    },
                  }}
                >
                  <img
                    src="/me.png"
                    alt="Erick"
                    style={{
                      width: "100%",
                      maxWidth: "510px",
                      borderRadius: "20px",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <AboutMeContent />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="xl" sx={{ pt: 2 }}>
            <Grid container spacing={4} alignItems="stretch">
              {Object.entries(Cards(isMobile)).map(([title, card], index) => (
                <Grid item xs={12} md={6} key={title}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <MainCard
                      title={title}
                      headerIcon={card.icon}
                      flipEnabled={card.flipEnabled}
                      backContent={card.backContent}
                      frontContent={card.frontContent}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box
        component="section"
        id="future"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
          position: "relative",
          background: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)`,
          scrollMarginTop: "80px",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: (theme) => alpha(theme.palette.background.paper, 0.5),
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Coming Soon
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {["Direct contact form", "Interactive project showcase"].map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: (theme) => alpha(theme.palette.background.paper, 0.3),
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateX(10px)",
                          background: (theme) => alpha(theme.palette.background.paper, 0.5),
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        }}
                      />
                      <Typography variant="h6">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
