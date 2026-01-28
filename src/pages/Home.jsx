import { Box, Container, Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { alpha } from "@mui/material/styles";
import { MainCard } from "../components/MainCard";
import { Cards, CardsTitles } from "../components/MainCard/Cards";
import AboutMeContent from "../components/AboutMeContent/AboutMeContent";
import ProjectsSection from "../components/ProjectsSection";
import ScrollIndicator from "../components/ScrollIndicator";
import SectionDivider from "../components/SectionDivider";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main About Section */}
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.background.paper, 0.98)} 50%, ${theme.palette.background.default} 100%)`
              : `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 50%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Container
            maxWidth="xl"
            sx={{
              pt: { xs: 3 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -30,
                      left: -30,
                      right: -30,
                      bottom: -30,
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 50%, transparent 70%)`
                          : `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 50%, transparent 70%)`,
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
              <Grid size={{ xs: 12, md: 6 }}>
                <AboutMeContent />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="xl" sx={{ pt: 2, pb: { xs: 2} }}>
            <Grid container spacing={4} alignItems="stretch">
              {CardsTitles().map((title) => (
                <Grid size={{ xs: 12, md: 6 }} key={title}>
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

          {/* Scroll Indicator */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: { xs: 4, sm: 6 },
            }}
          >
            <ScrollIndicator targetId="projects" />
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.background.paper,
        }}
      >
        <SectionDivider />
      </Box>

      {/* Projects Section */}
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.background.paper, 0.5)} 50%, ${theme.palette.background.default} 100%)`
              : `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.main, 0.02)} 50%, ${theme.palette.background.default} 100%)`,
          pb: { xs: 10, sm: 14 },
        }}
      >
        <ProjectsSection />
      </Box>
    </Box>
  );
};

export default Home;
