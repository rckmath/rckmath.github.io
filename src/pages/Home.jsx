import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { alpha } from "@mui/material/styles";
import { MainCard } from "../components/MainCard";
import { Cards, CardsTitles } from "../components/MainCard/Cards";
import AboutMeContent from "../components/AboutMeContent/AboutMeContent";

const Home = () => {
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
          <Container maxWidth="xl" sx={{ pt: 2, pb: { xs: 8, sm: 10 } }}>
            <Grid container spacing={4} alignItems="stretch">
              {CardsTitles(isMobile).map((title) => (
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
                      headerIcon={Cards(isMobile)[title].icon}
                      flipEnabled={Cards(isMobile)[title].flipEnabled}
                      backContent={Cards(isMobile)[title].backContent}
                      frontContent={Cards(isMobile)[title].frontContent}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
