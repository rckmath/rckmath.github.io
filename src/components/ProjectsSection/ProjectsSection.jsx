import { Box, Typography, Tooltip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import useTranslation from "../../hooks/useTranslation";

const projects = [
  {
    id: "imma-deploy",
    image: "/projects/imma-deploy.png",
    url: "https://github.com/rckmath/ImmaDeploy",
    nameKey: "immaDeploy.name",
  },
  {
    id: "iron-rifas",
    image: "/projects/iron-rifas.png",
    url: "https://gerenciador.ironrifas.com/",
    nameKey: "ironRifas.name",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        minHeight: { xs: "60vh", sm: "70vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        py: { xs: 8, sm: 12 },
        px: { xs: 2, sm: 4 },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? `radial-gradient(ellipse at center, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`
            : `radial-gradient(ellipse at center, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("myProjects")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.7,
            mb: { xs: 5, sm: 7 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {t("projectsSubtitle")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 4, sm: 6 },
            flexWrap: "wrap",
          }}
        >
          {projects.map((project) => (
            <Tooltip
              key={project.id}
              title={t(project.nameKey)}
              placement="bottom"
              arrow
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: (theme) =>
                      alpha(theme.palette.background.paper, 0.95),
                    color: "text.primary",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    py: 1,
                    px: 2,
                    backdropFilter: "blur(10px)",
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`
                        : `0 4px 16px ${alpha(theme.palette.primary.dark, 0.15)}`,
                    "& .MuiTooltip-arrow": {
                      color: (theme) =>
                        alpha(theme.palette.background.paper, 0.95),
                    },
                  },
                },
              }}
            >
              <Box
                component="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: "relative",
                  width: isMobile ? 120 : 150,
                  height: isMobile ? 120 : 150,
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: (theme) =>
                    alpha(theme.palette.background.paper, 0.7),
                  backdropFilter: "blur(16px)",
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? `0 8px 32px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 12px rgba(0, 0, 0, 0.25)`
                      : `0 8px 28px ${alpha(theme.palette.primary.dark, 0.1)}, 0 4px 10px rgba(0, 0, 0, 0.05)`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.08)",
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? `0 20px 50px ${alpha(theme.palette.primary.main, 0.3)}, 0 8px 20px rgba(0, 0, 0, 0.35)`
                        : `0 20px 45px ${alpha(theme.palette.primary.dark, 0.18)}, 0 8px 16px rgba(0, 0, 0, 0.08)`,
                    "& img": {
                      transform: "scale(1.15)",
                    },
                    "&::after": {
                      opacity: 1,
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: (theme) =>
                      `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 60%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease-in-out",
                    pointerEvents: "none",
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={t(project.nameKey)}
                  sx={{
                    width: "65%",
                    height: "65%",
                    objectFit: "contain",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: (theme) =>
                      theme.palette.mode === "dark"
                        ? "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))"
                        : "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2))",
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
