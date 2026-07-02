import { Box, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import useTranslation from "../hooks/useTranslation";
import { guiTokens, fonts } from "../theme";
import { PROJECTS } from "../data/portfolio";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SKILLS = ["react", "react-native", "node", "typescript", "c#/.net", "python", "aws", "docker", "sql", "solidity"];
const NOW_TAGS = ["agents", "llm-apps", "ai-ux"];

const mono = (fontSize, fontWeight = 400) => ({ fontFamily: fonts.mono, fontSize, fontWeight });

const SectionHeader = ({ label, hint, mb = 3.25 }) => (
  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.75, mb }}>
    <Typography sx={{ ...mono(13, 500), color: "var(--accent)" }}>{label}</Typography>
    <Box sx={{ flex: 1, height: "1px", bgcolor: "var(--line)" }} />
    {hint && <Typography sx={{ ...mono(11), color: "var(--faint)" }}>{hint}</Typography>}
  </Box>
);

const HashTags = ({ items }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", ...mono(13), color: "var(--dim)" }}>
    {items.map((item) => (
      <Box component="span" key={item}>
        <Box component="span" sx={{ color: "var(--accent)" }}>
          #
        </Box>
        {item}
      </Box>
    ))}
  </Box>
);

const Hero = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pt: { xs: 6, sm: 9.5 }, pb: 7.5 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3.75, flexWrap: "wrap" }}>
      <Box
        component="img"
        src="/me.png"
        alt="Erick"
        sx={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--line)" }}
      />
      <Box>
        <Typography
          component="h1"
          sx={{
            fontFamily: fonts.sans,
            fontWeight: 700,
            fontSize: "clamp(30px, 7vw, 44px)",
            lineHeight: 1.05,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
          }}
        >
          Erick Pacheco
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: 14,
              height: 36,
              bgcolor: "var(--accent)",
              ml: 1.5,
              verticalAlign: "-4px",
              animation: "blink 1.1s step-end infinite",
            }}
          />
        </Typography>
        <Typography sx={{ mt: 1.25, fontSize: 17, lineHeight: 1.5, color: "var(--dim)" }}>
          {t("hero.tagline")}
        </Typography>
      </Box>
    </Box>
    <Typography sx={{ mb: 3.25, ...mono(13), lineHeight: 1.7, color: "var(--faint)" }}>{t("hero.meta")}</Typography>
    <HashTags items={SKILLS} />
  </Box>
);

const NowSection = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pb: 7 }}>
    <SectionHeader label="~/now" hint={t("now.hint")} mb={3} />
    <Box sx={{ border: "1px solid var(--line)", borderRadius: "12px", p: "26px 28px" }}>
      <Typography sx={{ mb: 1.75, fontSize: 15.5, lineHeight: 1.65, color: "var(--ink)", maxWidth: 760 }}>
        {t("now.p1")}
      </Typography>
      <Typography sx={{ mb: 2.25, fontSize: 13.5, lineHeight: 1.6, color: "var(--dim)", maxWidth: 760 }}>
        {t("now.p2")}
      </Typography>
      <HashTags items={NOW_TAGS} />
    </Box>
  </Box>
);

const ExperienceSection = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pb: 7 }}>
    <SectionHeader label="~/experience" hint={t("experience.hint")} />
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "130px 1fr" },
        rowGap: { xs: 1, sm: 3.75 },
        columnGap: 2.5,
      }}
    >
      {t("experience.entries").map((entry) => (
        <Box key={`${entry.period}-${entry.company}`} sx={{ display: "contents" }}>
          <Typography sx={{ ...mono(13), lineHeight: 1.9, color: "var(--faint)" }}>{entry.period}</Typography>
          <Box sx={{ mb: { xs: 2.5, sm: 0 } }}>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
              {entry.role}{" "}
              <Box component="span" sx={{ color: "var(--accent)" }}>
                {entry.company}
              </Box>
              {entry.meta && (
                <Box component="span" sx={{ ...mono(11), color: "var(--faint)", ml: 1 }}>
                  {entry.meta}
                </Box>
              )}
            </Typography>
            {entry.subtitle && (
              <Typography sx={{ ...mono(12), color: "var(--faint)", mt: 0.75, mb: 1 }}>{entry.subtitle}</Typography>
            )}
            <Typography sx={{ mt: entry.subtitle ? 0 : 0.75, fontSize: 14, lineHeight: 1.65, color: "var(--dim)", maxWidth: 640 }}>
              {entry.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const ProjectsSection = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pb: 7 }}>
    <SectionHeader label="~/projects" />
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
      {PROJECTS.map((project) => (
        <Box
          key={project.id}
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: "18px 20px",
            border: "1px solid var(--line)",
            borderRadius: "10px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "var(--accent-brd)" },
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt=""
            sx={{ width: 44, height: 44, borderRadius: "10px", objectFit: "cover" }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ ...mono(14, 500), color: "var(--ink)" }}>{project.name}</Typography>
            <Typography sx={{ fontSize: 13, color: "var(--faint)" }}>{t(project.descKey)}</Typography>
          </Box>
          <Box component="span" sx={{ color: "var(--accent)", fontSize: 16 }}>
            →
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const AwardsSection = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pb: 7 }}>
    <SectionHeader label="~/awards" mb={2.75} />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
      {t("awards.entries").map((award) => (
        <Box key={award.title} sx={{ display: "flex", gap: 1.75, alignItems: "baseline" }}>
          <Box component="span" sx={{ color: "var(--accent)" }}>
            ★
          </Box>
          <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "var(--dim)" }}>
            <Box component="span" sx={{ color: "var(--ink)", fontWeight: 600 }}>
              {award.title}
            </Box>{" "}
            {award.detail}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const EducationSection = ({ t }) => (
  <Box sx={{ px: { xs: 2.5, sm: 6 }, pb: 7 }}>
    <SectionHeader label="~/education" mb={2.75} />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, fontSize: 13.5, lineHeight: 1.6, color: "var(--dim)" }}>
      {t("education.entries").map((item) => (
        <Typography key={item.title} sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
          <Box component="span" sx={{ color: "var(--ink)" }}>
            {item.title}
          </Box>{" "}
          {item.inst}{" "}
          <Box component="span" sx={{ ...mono(11.5), color: "var(--faint)" }}>
            {item.period}
          </Box>
        </Typography>
      ))}
    </Box>
  </Box>
);

const Home = ({ onOpenTerminal }) => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const tokens = guiTokens[isDarkMode ? "dark" : "light"];

  return (
    <Box
      sx={{
        ...tokens,
        minHeight: "100vh",
        bgcolor: "var(--bg)",
        color: "var(--ink)",
        fontFamily: fonts.sans,
        transition: "background 0.25s",
      }}
    >
      <Box sx={{ maxWidth: 1080, mx: "auto" }}>
        <Header onOpenTerminal={onOpenTerminal} />
        <Hero t={t} />
        <NowSection t={t} />
        <ExperienceSection t={t} />
        <ProjectsSection t={t} />
        <AwardsSection t={t} />
        <EducationSection t={t} />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
