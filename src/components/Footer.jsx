import { Box } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import { fonts } from "../theme";
import { SOCIALS, EMAIL } from "../data/portfolio";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
        px: { xs: 2.5, sm: 6 },
        py: 3.25,
        borderTop: "1px solid var(--line)",
      }}
    >
      <Box sx={{ display: "flex", gap: 2.75, fontFamily: fonts.mono, fontSize: 12.5 }}>
        {SOCIALS.map(({ label, href }) => (
          <Box
            key={label}
            component="a"
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            sx={{
              color: "var(--dim)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 0.2s",
              "&:hover": { color: "var(--accent)" },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
      <Box
        component="a"
        href={`mailto:${EMAIL}`}
        sx={{
          fontFamily: fonts.mono,
          fontSize: 13,
          fontWeight: 500,
          color: "var(--accent)",
          border: "1px solid var(--accent-brd)",
          borderRadius: "7px",
          px: 2.25,
          py: 1.25,
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": { bgcolor: "var(--accent)", color: "var(--bg)" },
        }}
      >
        {t("footer.hello")}
      </Box>
    </Box>
  );
};

export default Footer;
