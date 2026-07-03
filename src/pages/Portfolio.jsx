import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Home from "./Home";
import Terminal from "./Terminal";
import BootScreen from "../components/BootScreen";

const FADE_MS = 240;

// Old bookmarks may still point at /cmd (previously a separate repo):
// boot straight into terminal mode and clean the URL.
const initialMode = () => {
  if (window.location.pathname.replace(/\/+$/, "") === "/cmd") {
    window.history.replaceState(null, "", "/");
    return "term";
  }
  return "gui";
};

const Portfolio = () => {
  const [mode, setMode] = useState(initialMode);
  const [booting, setBooting] = useState(false);
  const [fading, setFading] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // GUI → terminal: quick fade out, then the boot sequence plays before the terminal appears
  const openTerminal = () => {
    if (mode === "term" || booting || fading) return;
    setFading(true);
    timer.current = setTimeout(() => {
      setBooting(true);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => setFading(false));
    }, FADE_MS);
  };

  const finishBoot = () => {
    setMode("term");
    setBooting(false);
    window.scrollTo(0, 0);
  };

  // Terminal → GUI: instant power-off feel, just a quick fade
  const exitTerminal = () => {
    if (mode === "gui" || booting || fading) return;
    setFading(true);
    timer.current = setTimeout(() => {
      setMode("gui");
      window.scrollTo(0, 0);
      requestAnimationFrame(() => setFading(false));
    }, FADE_MS);
  };

  let content;
  if (booting) content = <BootScreen onDone={finishBoot} />;
  else if (mode === "gui") content = <Home onOpenTerminal={openTerminal} />;
  else content = <Terminal onExit={exitTerminal} />;

  return (
    <Box
      sx={{
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(0.99)" : "none",
        transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
      }}
    >
      {content}
    </Box>
  );
};

export default Portfolio;
