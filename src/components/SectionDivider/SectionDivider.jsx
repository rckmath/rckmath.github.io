import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

const SectionDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, sm: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          width: "100%",
          maxWidth: "600px",
          px: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            background: (theme) =>
              `linear-gradient(90deg, transparent 0%, ${alpha(theme.palette.primary.main, 0.4)} 100%)`,
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? alpha(theme.palette.primary.main, 0.6)
                    : alpha(theme.palette.primary.main, 0.5),
                boxShadow: (theme) =>
                  `0 0 8px ${alpha(theme.palette.primary.main, 0.4)}`,
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            height: "1px",
            background: (theme) =>
              `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.4)} 0%, transparent 100%)`,
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionDivider;
