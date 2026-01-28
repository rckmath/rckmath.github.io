import { Box, Typography } from "@mui/material";
import { alpha, keyframes } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useTranslation from "../../hooks/useTranslation";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

const ScrollIndicator = ({ targetId = "projects" }) => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      onClick={handleScroll}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        py: 3,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          "& .scroll-button": {
            background: (theme) =>
              theme.palette.mode === "dark"
                ? alpha(theme.palette.primary.main, 0.25)
                : alpha(theme.palette.primary.main, 0.15),
            borderColor: (theme) => theme.palette.primary.main,
          },
          "& .scroll-text": {
            opacity: 1,
          },
        },
      }}
    >
      <Typography
        className="scroll-text"
        variant="body2"
        sx={{
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontSize: "0.75rem",
          opacity: 0.7,
          transition: "opacity 0.3s ease-in-out",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {t("viewProjects")}
      </Typography>

      <Box
        className="scroll-button"
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? alpha(theme.palette.primary.main, 0.15)
              : alpha(theme.palette.primary.main, 0.08),
          border: (theme) =>
            `2px solid ${alpha(theme.palette.primary.main, 0.4)}`,
          transition: "all 0.3s ease-in-out",
          animation: `${pulse} 2s infinite`,
          "&:hover": {
            animation: "none",
          },
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: 28,
            color: (theme) => theme.palette.primary.main,
            animation: `${bounce} 2s infinite`,
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollIndicator;
