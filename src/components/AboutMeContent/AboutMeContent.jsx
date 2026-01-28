import { Box, Typography, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import useTranslation from "../../hooks/useTranslation";

const AboutMeContent = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: { xs: 2, sm: 4 },
        borderRadius: 4,
        background: (theme) => alpha(theme.palette.background.paper, 0.5),
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("aboutTitle")}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          opacity: 0.8,
          lineHeight: 1.6,
        }}
      >
        {t("aboutContent")}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          opacity: 0.7,
          lineHeight: 1.5,
          fontSize: "1rem",
        }}
      >
        {t("aboutDescription")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          my: 1,
        }}
      >
        {["React/React Native", "Node.js", "TypeScript", "C#", "Python", "SQL", "Git", "Docker", "AWS", "Solidity", "C/C++"].map((skill, index) => (
          <Box
            key={index}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === "dark" ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.primary.main, 0.08),
              border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                background: (theme) =>
                  theme.palette.mode === "dark" ? alpha(theme.palette.primary.main, 0.25) : alpha(theme.palette.primary.main, 0.15),
                transform: "translateY(-2px)",
              },
            }}
          >
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.primary.dark),
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          fullWidth
          startIcon={<EmailIcon />}
          variant="contained"
          size="large"
          href="mailto:ericklopes02@outlook.com"
          sx={{
            py: 2,
            px: 4,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "1.1rem",
            background: (theme) =>
              theme.palette.mode === "dark"
                ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: (theme) => (theme.palette.mode === "dark" ? "#0A0F0D" : "#FFFFFF"),
            fontWeight: 600,
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? `0 4px 20px ${alpha(theme.palette.primary.main, 0.35)}`
                : `0 4px 16px ${alpha(theme.palette.primary.dark, 0.25)}`,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                  : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? `0 6px 24px ${alpha(theme.palette.primary.main, 0.45)}`
                  : `0 6px 20px ${alpha(theme.palette.primary.dark, 0.35)}`,
              transform: "translateY(-2px)",
            },
          }}
        >
          {t("contactMe").toUpperCase()}
        </Button>
      </Box>
    </Box>
  );
};

export default AboutMeContent;
