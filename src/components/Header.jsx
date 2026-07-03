import { Box, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { fonts } from "../theme";

const langSx = (active) => ({
  color: active ? "var(--accent)" : "var(--faint)",
  borderBottom: `1px solid ${active ? "var(--accent)" : "transparent"}`,
  pb: "2px",
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": { color: "var(--accent)" },
});

const Header = ({ onOpenTerminal }) => {
  const { toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2.5, sm: 6 },
        py: 2.25,
        borderBottom: "1px solid var(--line)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
        <Box
          component="button"
          type="button"
          onClick={onOpenTerminal}
          title={t("header.terminalTitle")}
          aria-label={t("header.terminalTitle")}
          sx={{
            width: 30,
            height: 30,
            bgcolor: "transparent",
            border: "1px solid var(--accent-brd)",
            borderRadius: "7px",
            display: "grid",
            placeItems: "center",
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 700,
            color: "var(--accent)",
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": { bgcolor: "var(--accent)", color: "var(--bg)" },
          }}
        >
          &gt;_
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 500, color: "var(--faint)" }}>
          rckmath@dev:~
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
        <Box sx={{ display: "flex", gap: 1.25, fontFamily: fonts.mono, fontSize: 12, fontWeight: 500 }}>
          <Box component="span" onClick={() => setLanguage("en")} sx={langSx(language === "en")}>
            EN
          </Box>
          <Box component="span" onClick={() => setLanguage("pt")} title="Português" sx={langSx(language === "pt")}>
            PT
          </Box>
        </Box>
        <Box
          onClick={toggleTheme}
          title={t("header.themeTitle")}
          aria-label={t("header.themeTitle")}
          role="button"
          sx={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: "1.5px solid var(--dim)",
            background: "linear-gradient(90deg, var(--dim) 50%, transparent 50%)",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
