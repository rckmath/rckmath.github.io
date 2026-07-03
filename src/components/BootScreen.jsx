import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import { fonts } from "../theme";

// Staggered reveal times (ms) for each boot line — slightly irregular on purpose
const LINE_DELAYS = [250, 700, 1150, 1500, 1950, 2400, 2800, 3300];
const TOTAL_MS = 4100;
const BAR_SLOTS = 20;

const BootLine = ({ line }) => {
  const okIndex = line.indexOf("[ok]");
  if (okIndex === -1) return <Box sx={{ whiteSpace: "pre-wrap" }}>{line}</Box>;
  return (
    <Box sx={{ whiteSpace: "pre-wrap" }}>
      {line.slice(0, okIndex)}
      <Box component="span" sx={{ color: "#5DDEA6" }}>
        [ok]
      </Box>
    </Box>
  );
};

const BootScreen = ({ onDone }) => {
  const { t } = useLanguage();
  const lines = t("term.boot");

  const [visible, setVisible] = useState(0);
  const [progress, setProgress] = useState(0);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisible(i + 1), LINE_DELAYS[i] ?? 300 + i * 420)
    );
    timers.push(setTimeout(() => onDoneRef.current(), TOTAL_MS));

    const start = performance.now();
    const barTimer = setInterval(() => {
      const pct = Math.min(100, Math.round(((performance.now() - start) / (TOTAL_MS - 500)) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(barTimer);
    }, 80);

    const prevBackground = document.body.style.background;
    document.body.style.background = "#060908";
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(barTimer);
      document.body.style.background = prevBackground;
    };
  }, [lines]);

  const filled = Math.round((progress / 100) * BAR_SLOTS);

  return (
    <Box
      onClick={() => onDoneRef.current()}
      title="skip"
      sx={{
        minHeight: "100vh",
        bgcolor: "#060908",
        fontFamily: fonts.mono,
        fontSize: 13.5,
        lineHeight: 2,
        color: "#9AA69E",
        cursor: "pointer",
      }}
    >
      <Box sx={{ maxWidth: 1080, mx: "auto", p: { xs: "24px 16px", sm: "34px 40px" } }}>
        {lines.slice(0, visible).map((line) => (
          <BootLine key={line} line={line} />
        ))}
        <Box sx={{ mt: 1.5, color: "#5DDEA6" }}>
          [{"▓".repeat(filled)}
          {"░".repeat(BAR_SLOTS - filled)}] {progress}%
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: 8,
              height: 15,
              bgcolor: "#5DDEA6",
              ml: 1,
              verticalAlign: "-2px",
              animation: "blink 0.9s step-end infinite",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BootScreen;
