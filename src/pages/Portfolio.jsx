import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Home from "./Home";
import Terminal from "./Terminal";

const TRANSITION_MS = 240;

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
  const [fading, setFading] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const switchMode = (next) => {
    if (next === mode || fading) return;
    setFading(true);
    timer.current = setTimeout(() => {
      setMode(next);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => setFading(false));
    }, TRANSITION_MS);
  };

  return (
    <Box
      sx={{
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(0.99)" : "none",
        transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
      }}
    >
      {mode === "gui" ? (
        <Home onOpenTerminal={() => switchMode("term")} />
      ) : (
        <Terminal onExit={() => switchMode("gui")} />
      )}
    </Box>
  );
};

export default Portfolio;
