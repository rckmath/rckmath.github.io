import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import { fonts } from "../theme";
import { PROJECTS, SOCIALS } from "../data/portfolio";
import en from "../translations/en";
import pt from "../translations/pt";

const CMDS = [
  "about", "ai", "awards", "career", "cat", "cd", "clear", "coffee", "color", "contact",
  "cowsay", "crt", "date", "echo", "edu", "exit", "fortune", "git", "hack", "help",
  "history", "lang", "ls", "matrix", "neofetch", "open", "ping", "projects", "pwd",
  "resume", "snake", "sudo", "uptime", "ver", "vim", "weather", "whoami",
];

const ACCENTS = { green: "#5DDEA6", amber: "#FFB000", cyan: "#4AD8DE", white: "#E8EDE9" };

const BANNER = [
  "███████╗██████╗ ██╗ ██████╗██╗  ██╗",
  "██╔════╝██╔══██╗██║██╔════╝██║ ██╔╝",
  "█████╗  ██████╔╝██║██║     █████╔╝",
  "██╔══╝  ██╔══██╗██║██║     ██╔═██╗",
  "███████╗██║  ██║██║╚██████╗██║  ██╗",
  "╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝",
];

const NEOFETCH_ART =
  " ┌─────────────┐\n │  >_         │\n │             │\n │   erickOS   │\n │             │\n │             │\n └─────────────┘";
const NEOFETCH_PALETTE = ["#0B0E0C", "#DE5D5D", "#5DDEA6", "#FFB000", "#4AD8DE", "#8A5DDE", "#DE5D8A", "#E8EDE9"];

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>/{};$#@*+=";

const SW = 30;
const SH = 13;

const fill = (template, vars) => template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));

const PromptEcho = ({ cmd }) => (
  <Box sx={{ color: "var(--tdim)" }}>
    <Box component="span" sx={{ color: "var(--tacc)" }}>
      rckmath@portfolio:~$
    </Box>{" "}
    <Box component="span" sx={{ color: "var(--tink)" }}>
      {cmd}
    </Box>
  </Box>
);

const Output = ({ children, sx }) => (
  <Box sx={{ mt: 0.5, color: "var(--tdim)", whiteSpace: "pre-wrap", fontSize: 13, lineHeight: 1.85, ...sx }}>
    {children}
  </Box>
);

const BootSession = ({ t }) => (
  <Box>
    <Box sx={{ color: "var(--tacc)", fontSize: { xs: 10, sm: 12 }, lineHeight: 1.3, mb: 1.75 }}>
      {BANNER.map((line) => (
        <Box key={line} sx={{ whiteSpace: "pre" }}>
          {line}
        </Box>
      ))}
    </Box>
    <Box sx={{ mb: 3, color: "var(--tfaint)", whiteSpace: "pre-wrap" }}>{t("term.intro")}</Box>

    <PromptEcho cmd="whoami" />
    <Output sx={{ mb: 3.25, maxWidth: 700 }}>{t("term.whoami")}</Output>

    <PromptEcho cmd="ai --status" />
    <Output sx={{ mb: 3.25 }}>{t("term.aiStatus")}</Output>

    <PromptEcho cmd="open erick.png" />
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        border: "1px solid rgba(232,237,233,.12)",
        borderRadius: "8px",
        overflow: "hidden",
        m: "10px 0 26px",
      }}
    >
      <Box
        sx={{
          p: "6px 10px",
          bgcolor: "#0C110E",
          fontSize: 10.5,
          color: "var(--tfaint)",
          borderBottom: "1px solid rgba(232,237,233,.08)",
        }}
      >
        {t("term.photoCaption")}
      </Box>
      <Box component="img" src="/me.png" alt="Erick" sx={{ width: 132, height: 132, objectFit: "cover", display: "block" }} />
    </Box>

    <PromptEcho cmd="cat career.log" />
    <Box sx={{ m: "6px 0 26px", overflowX: "auto" }}>
      <Box sx={{ minWidth: 620, fontSize: 13, lineHeight: 2, display: "flex", flexDirection: "column" }}>
        {t("term.careerRows").map((row) => (
          <Box
            key={`${row.year}-${row.role}`}
            sx={{
              display: "grid",
              gridTemplateColumns: "64px 176px 170px 1fr",
              columnGap: 1,
              color: "var(--tdim)",
            }}
          >
            <Box component="span" sx={{ color: row.current ? "var(--tacc)" : "var(--tfaint)", whiteSpace: "pre" }}>
              {row.year}
            </Box>
            <Box component="span">{row.role}</Box>
            <Box component="span" sx={{ color: "var(--tink)" }}>
              {row.company}
            </Box>
            <Box component="span" sx={{ color: "var(--tfaint)" }}>
              {row.note}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>

    <PromptEcho cmd="ls ~/projects" />
    <Box sx={{ display: "flex", gap: 1.75, m: "10px 0 26px", flexWrap: "wrap" }}>
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
            gap: 1.5,
            border: "1px solid rgba(232,237,233,.12)",
            borderRadius: "8px",
            p: "12px 16px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "var(--tacc-brd)" },
          }}
        >
          <Box component="img" src={project.image} alt="" sx={{ width: 36, height: 36, borderRadius: "8px", objectFit: "cover" }} />
          <Box>
            <Box sx={{ color: "var(--tacc)", fontSize: 13 }}>{project.name}/</Box>
            <Box sx={{ color: "var(--tfaint)", fontSize: 11.5 }}>{t(project.descKey)}</Box>
          </Box>
        </Box>
      ))}
    </Box>

    <PromptEcho cmd="./contact --all" />
    <Box sx={{ display: "flex", gap: 2.5, m: "8px 0 26px", fontSize: 13, flexWrap: "wrap" }}>
      {SOCIALS.map(({ label, href }) => (
        <Box
          key={label}
          component="a"
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          sx={{
            color: "var(--tdim)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            cursor: "pointer",
            transition: "color 0.2s",
            "&:hover": { color: "var(--tacc)" },
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  </Box>
);

const Terminal = ({ onExit }) => {
  const { setLanguage, t } = useLanguage();

  const [history, setHistory] = useState([]);
  const [cleared, setCleared] = useState(false);
  const [crt, setCrt] = useState(false);
  const [termAcc, setTermAcc] = useState(ACCENTS.green);
  const [matrixOn, setMatrixOn] = useState(false);
  const [snakeOn, setSnakeOn] = useState(false);
  const [snakeFrame, setSnakeFrame] = useState("");

  const inputRef = useRef(null);
  const cmdStack = useRef([]);
  const histIdx = useRef(null);
  const typeTimer = useRef(null);

  const sn = useRef(null);
  const snTimer = useRef(null);
  const snakeKeyHandler = useRef(null);

  const mCanvas = useRef(null);
  const mTimer = useRef(null);
  const mDrops = useRef([]);
  const matrixKeyHandler = useRef(null);

  // Live refs so window listeners and intervals never read stale state
  const tRef = useRef(t);
  const termAccRef = useRef(termAcc);
  const busyRef = useRef(false);

  useEffect(() => {
    tRef.current = t;
    termAccRef.current = termAcc;
    busyRef.current = snakeOn || matrixOn;
  }, [t, termAcc, snakeOn, matrixOn]);

  useEffect(() => {
    const prevBackground = document.body.style.background;
    document.body.style.background = "#060908";
    inputRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.background = prevBackground;
      clearInterval(snTimer.current);
      clearInterval(mTimer.current);
      clearTimeout(typeTimer.current);
      if (snakeKeyHandler.current) window.removeEventListener("keydown", snakeKeyHandler.current);
      if (matrixKeyHandler.current) window.removeEventListener("keydown", matrixKeyHandler.current);
    };
  }, []);

  useEffect(() => {
    if (history.length === 0 && !snakeFrame) return;
    window.scrollTo(0, document.body.scrollHeight);
  }, [history, snakeFrame]);

  const print = (c, o, node = null) => {
    setHistory((h) => [...h, { c, o: o || "", node }]);
  };

  const typeOut = (cmd, lines, delay = 380) => {
    setHistory((h) => [...h, { c: cmd, o: "", node: null }]);
    let i = 0;
    const step = () => {
      if (i >= lines.length) return;
      const line = lines[i];
      i += 1;
      setHistory((h) => {
        const copy = [...h];
        const last = { ...copy[copy.length - 1] };
        last.o = last.o ? `${last.o}\n${line}` : line;
        copy[copy.length - 1] = last;
        return copy;
      });
      typeTimer.current = setTimeout(step, delay);
    };
    step();
  };

  // ---------- matrix ----------
  const stopMatrix = () => {
    clearInterval(mTimer.current);
    if (matrixKeyHandler.current) {
      window.removeEventListener("keydown", matrixKeyHandler.current);
      matrixKeyHandler.current = null;
    }
    setMatrixOn(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const startMatrix = () => {
    matrixKeyHandler.current = () => stopMatrix();
    window.addEventListener("keydown", matrixKeyHandler.current);
    inputRef.current?.blur();
    setMatrixOn(true);
  };

  const initMatrixCanvas = (el) => {
    if (!el) {
      mCanvas.current = null;
      clearInterval(mTimer.current);
      return;
    }
    mCanvas.current = el;
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    const ctx = el.getContext("2d");
    ctx.fillStyle = "#060908";
    ctx.fillRect(0, 0, el.width, el.height);
    const cols = Math.floor(el.width / 14);
    mDrops.current = new Array(cols).fill(1).map(() => Math.floor(Math.random() * 40));
    clearInterval(mTimer.current);
    mTimer.current = setInterval(() => {
      const canvas = mCanvas.current;
      if (!canvas) return;
      const x = canvas.getContext("2d");
      x.fillStyle = "rgba(6,9,8,0.08)";
      x.fillRect(0, 0, canvas.width, canvas.height);
      x.fillStyle = termAccRef.current;
      x.font = '13px "JetBrains Mono", monospace';
      for (let i = 0; i < mDrops.current.length; i += 1) {
        const ch = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        x.fillText(ch, i * 14, mDrops.current[i] * 16);
        if (mDrops.current[i] * 16 > canvas.height && Math.random() > 0.975) mDrops.current[i] = 0;
        mDrops.current[i] += 1;
      }
    }, 50);
  };

  // ---------- snake ----------
  const drawSnake = () => {
    const s = sn.current;
    const grid = [];
    for (let y = 0; y < SH; y += 1) grid.push(new Array(SW).fill(" "));
    grid[s.f[1]][s.f[0]] = "◆";
    s.b.forEach((p, i) => {
      grid[p[1]][p[0]] = i === 0 ? "█" : "▓";
    });
    const top = `┌${"─".repeat(SW)}┐`;
    const bottom = `└${"─".repeat(SW)}┘`;
    const rows = grid.map((r) => `│${r.join("")}│`);
    return `${top}\n${rows.join("\n")}\n${bottom}\n${fill(tRef.current("term.cmd.snakeControls"), { score: s.score })}`;
  };

  const endSnake = () => {
    clearInterval(snTimer.current);
    if (snakeKeyHandler.current) {
      window.removeEventListener("keydown", snakeKeyHandler.current);
      snakeKeyHandler.current = null;
    }
    const score = sn.current ? sn.current.score : 0;
    const translate = tRef.current;
    const snacks = translate(score === 1 ? "term.cmd.snakeSnack" : "term.cmd.snakeSnacks");
    setSnakeOn(false);
    setSnakeFrame("");
    setHistory((h) => [...h, { c: "snake", o: fill(translate("term.cmd.snakeOver"), { score, snacks }), node: null }]);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const tickSnake = () => {
    const s = sn.current;
    s.d = s.nd;
    const head = [s.b[0][0] + s.d[0], s.b[0][1] + s.d[1]];
    if (
      head[0] < 0 ||
      head[0] >= SW ||
      head[1] < 0 ||
      head[1] >= SH ||
      s.b.some((p) => p[0] === head[0] && p[1] === head[1])
    ) {
      endSnake();
      return;
    }
    s.b.unshift(head);
    if (head[0] === s.f[0] && head[1] === s.f[1]) {
      s.score += 1;
      let f;
      do {
        f = [Math.floor(Math.random() * SW), Math.floor(Math.random() * SH)];
      } while (s.b.some((p) => p[0] === f[0] && p[1] === f[1]));
      s.f = f;
    } else {
      s.b.pop();
    }
    setSnakeFrame(drawSnake());
  };

  const startSnake = () => {
    if (busyRef.current) return;
    sn.current = { b: [[6, 6], [5, 6], [4, 6]], d: [1, 0], nd: [1, 0], f: [16, 6], score: 0 };
    snakeKeyHandler.current = (e) => {
      const moves = {
        ArrowUp: [0, -1], w: [0, -1],
        ArrowDown: [0, 1], s: [0, 1],
        ArrowLeft: [-1, 0], a: [-1, 0],
        ArrowRight: [1, 0], d: [1, 0],
      };
      if (moves[e.key]) {
        e.preventDefault();
        const nd = moves[e.key];
        const cd = sn.current.d;
        if (nd[0] !== -cd[0] || nd[1] !== -cd[1]) sn.current.nd = nd;
      }
      if (e.key === "q" || e.key === "Escape") endSnake();
    };
    window.addEventListener("keydown", snakeKeyHandler.current);
    inputRef.current?.blur();
    clearInterval(snTimer.current);
    snTimer.current = setInterval(tickSnake, 140);
    setSnakeOn(true);
    setSnakeFrame(drawSnake());
  };

  // ---------- neofetch ----------
  const neofetchNode = () => {
    const nf = t("term.cmd.neofetch");
    return (
      <Box sx={{ display: "flex", gap: 4, m: "8px 0 10px", alignItems: "flex-start", flexWrap: "wrap" }}>
        <Box sx={{ whiteSpace: "pre", color: "var(--tacc)", fontSize: 13, lineHeight: 1.35 }}>{NEOFETCH_ART}</Box>
        <Box>
          <Box sx={{ color: "var(--tacc)", mb: 0.75, fontSize: 13 }}>{nf.title}</Box>
          {nf.rows.map(([key, value]) => (
            <Box key={key} sx={{ fontSize: 13, lineHeight: 1.7 }}>
              <Box component="span" sx={{ color: "var(--tacc)" }}>
                {key}
              </Box>
              <Box component="span" sx={{ color: "var(--tfaint)" }}>
                {" :: "}
              </Box>
              <Box component="span" sx={{ color: "var(--tdim)" }}>
                {value}
              </Box>
            </Box>
          ))}
          <Box sx={{ display: "flex", gap: "2px", mt: 1.25 }}>
            {NEOFETCH_PALETTE.map((color) => (
              <Box key={color} component="span" sx={{ width: 22, height: 12, bgcolor: color, display: "inline-block" }} />
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  // ---------- commands ----------
  const runCmd = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    cmdStack.current.push(cmd);
    histIdx.current = null;
    const parts = cmd.split(/\s+/);
    const n = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    if (n === "clear" || n === "cls") {
      setHistory([]);
      setCleared(true);
      return;
    }
    if (n === "exit" || n === "gui" || n === "q") {
      onExit();
      return;
    }
    if (n === "neofetch") {
      print(cmd, "", neofetchNode());
      return;
    }
    if (n === "matrix") {
      print(cmd, t("term.cmd.matrixEnter"));
      setTimeout(() => startMatrix(), 400);
      return;
    }
    if (n === "snake") {
      startSnake();
      return;
    }
    if (n === "hack") {
      const host = arg || t("term.cmd.hackDefaultHost");
      typeOut(cmd, t("term.cmd.hack").map((line) => fill(line, { host })));
      return;
    }
    if (n === "ping") {
      const host = arg || "claude.ai";
      typeOut(cmd, t("term.cmd.ping").map((line) => fill(line, { host })), 300);
      return;
    }

    let o;
    switch (n) {
      case "help":
        o = t("term.cmd.help");
        break;
      case "about":
      case "whoami":
        o = t("term.cmd.about");
        break;
      case "career":
      case "work":
        o = t("term.cmd.career");
        break;
      case "git":
        o = t("term.cmd.git");
        break;
      case "ai":
        o = t("term.cmd.ai");
        break;
      case "projects":
        o = t("term.cmd.projects");
        break;
      case "ls":
        o = arg.indexOf("-la") >= 0 ? t("term.cmd.lsLa") : t("term.cmd.ls");
        break;
      case "cat":
        if (arg === ".plan") o = t("term.cmd.catPlan");
        else if (arg === ".secrets") o = t("term.cmd.catSecrets");
        else if (arg === "career.log") o = t("term.cmd.catCareer");
        else if (arg === "awards.txt") o = t("term.cmd.catAwards");
        else if (arg === "education.txt") o = t("term.cmd.catEdu");
        else o = arg ? fill(t("term.cmd.catNotFound"), { file: arg }) : t("term.cmd.catUsage");
        break;
      case "awards":
        o = t("term.cmd.awards");
        break;
      case "edu":
      case "education":
        o = t("term.cmd.edu");
        break;
      case "contact":
        o = t("term.cmd.contact");
        break;
      case "resume":
      case "cv":
        o = t("term.cmd.resume");
        break;
      case "open": {
        if (!arg) {
          o = t("term.cmd.openUsage");
          break;
        }
        const url = `https://${arg.replace(/^https?:\/\//, "")}`;
        window.open(url, "_blank", "noopener");
        o = fill(t("term.cmd.opening"), { url });
        break;
      }
      case "echo":
        o = arg || "";
        break;
      case "date":
        o = new Date().toString();
        break;
      case "uptime": {
        const years = ((Date.now() - new Date(2020, 7, 1).getTime()) / 3.156e10).toFixed(1);
        o = fill(t("term.cmd.uptime"), { years });
        break;
      }
      case "ver":
      case "version":
        o = t("term.cmd.ver");
        break;
      case "weather":
        o = t("term.cmd.weather");
        break;
      case "fortune": {
        const fortunes = t("term.cmd.fortune");
        o = fortunes[Math.floor(Math.random() * fortunes.length)];
        break;
      }
      case "cowsay": {
        const msg = arg || t("term.cmd.cowsayDefault");
        const bar = "-".repeat(msg.length + 2);
        o =
          ` ${"_".repeat(msg.length + 2)}\n< ${msg} >\n ${bar}\n` +
          "        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||";
        break;
      }
      case "coffee":
      case "brew":
        o = `      ( (\n       ) )\n    ..........\n    |        |]\n    \\        /\n     \`------´\n\n${t("term.cmd.coffee")}`;
        break;
      case "crt":
        setCrt((prev) => !prev);
        o = crt ? t("term.cmd.crtOff") : t("term.cmd.crtOn");
        break;
      case "color":
      case "theme": {
        const c = (arg || "").toLowerCase();
        if (ACCENTS[c]) {
          setTermAcc(ACCENTS[c]);
          o = fill(t("term.cmd.colorSet"), { color: c });
        } else {
          o = t("term.cmd.colorUsage");
        }
        break;
      }
      case "lang":
      case "language": {
        const lang = (arg || "").toLowerCase();
        if (lang === "en" || lang === "pt") {
          setLanguage(lang);
          o = (lang === "pt" ? pt : en).term.cmd.langSet;
        } else {
          o = t("term.cmd.langUsage");
        }
        break;
      }
      case "history":
        o = cmdStack.current.map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`).join("\n");
        break;
      case "sudo":
        o = t("term.cmd.sudo");
        break;
      case "rm":
        o = arg.indexOf("-rf") >= 0 ? t("term.cmd.rmRf") : t("term.cmd.rm");
        break;
      case "vim":
      case "vi":
      case "nano":
      case "emacs":
        o = fill(t("term.cmd.editor"), { editor: n });
        break;
      case "pwd":
        o = t("term.cmd.pwd");
        break;
      case "cd":
        o = t("term.cmd.cd");
        break;
      default:
        o = fill(t("term.cmd.notFound"), { cmd: n });
    }
    print(cmd, o);
  };

  const onTermKey = (e) => {
    if (busyRef.current) {
      e.preventDefault();
      return;
    }
    if (e.key === "Enter") {
      const value = e.target.value;
      e.target.value = "";
      runCmd(value);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const value = e.target.value.trim().toLowerCase();
      if (!value) return;
      const matches = CMDS.filter((c) => c.indexOf(value) === 0);
      if (matches.length === 1) e.target.value = `${matches[0]} `;
      else if (matches.length > 1) print(value, matches.join("   "));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdStack.current.length) return;
      histIdx.current = histIdx.current === null ? cmdStack.current.length - 1 : Math.max(0, histIdx.current - 1);
      e.target.value = cmdStack.current[histIdx.current];
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx.current === null) return;
      histIdx.current += 1;
      if (histIdx.current >= cmdStack.current.length) {
        histIdx.current = null;
        e.target.value = "";
      } else {
        e.target.value = cmdStack.current[histIdx.current];
      }
    }
  };

  const focusTerm = () => {
    if (inputRef.current && !snakeOn && !matrixOn) inputRef.current.focus({ preventScroll: true });
  };

  return (
    <Box
      onClick={focusTerm}
      sx={{
        "--tacc": termAcc,
        "--tacc-brd": `color-mix(in srgb, ${termAcc} 50%, transparent)`,
        "--tink": "#E8EDE9",
        "--tdim": "#9AA69E",
        "--tfaint": "#5A655D",
        "--tglow": crt ? `0 0 6px color-mix(in srgb, ${termAcc} 55%, transparent)` : "none",
        minHeight: "100vh",
        bgcolor: "#060908",
        fontFamily: fonts.mono,
        cursor: "text",
      }}
    >
      {crt && (
        <>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 150,
              background:
                "repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0px, rgba(0,0,0,.22) 1px, transparent 1px, transparent 3px)",
              animation: "crtflicker .12s infinite",
            }}
          />
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 151,
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.5) 100%)",
            }}
          />
        </>
      )}

      {matrixOn && (
        <>
          <Box
            component="canvas"
            ref={initMatrixCanvas}
            onClick={stopMatrix}
            sx={{ position: "fixed", inset: 0, zIndex: 200, cursor: "pointer", bgcolor: "#060908" }}
          />
          <Box
            sx={{
              position: "fixed",
              bottom: 22,
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 201,
              pointerEvents: "none",
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(232,237,233,.55)",
            }}
          >
            {t("term.matrixWake")}
          </Box>
        </>
      )}

      <Box sx={{ maxWidth: 1080, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            p: "13px 18px",
            bgcolor: "#0C110E",
            borderBottom: "1px solid rgba(232,237,233,.07)",
          }}
        >
          <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#3a423c" }} />
          <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#3a423c" }} />
          <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "var(--tacc)" }} />
          <Box sx={{ flex: 1, textAlign: "center", fontSize: 12, color: "var(--tfaint)" }}>
            {t("term.windowTitle")}
          </Box>
          <Box
            onClick={onExit}
            role="button"
            sx={{
              fontSize: 11,
              fontWeight: 500,
              color: "var(--tfaint)",
              border: "1px solid rgba(232,237,233,.15)",
              borderRadius: "5px",
              p: "4px 9px",
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": { color: "var(--tacc)", borderColor: "var(--tacc-brd)" },
            }}
          >
            {t("term.guiMode")}
          </Box>
        </Box>

        <Box sx={{ p: { xs: "24px 16px 60px", sm: "34px 40px 60px" }, fontSize: 13.5, lineHeight: 1.75, textShadow: "var(--tglow)" }}>
          {!cleared && <BootSession t={t} />}

          {history.map((entry, index) => (
            <Box key={index} sx={{ mb: 1.75 }}>
              <PromptEcho cmd={entry.c} />
              {entry.o !== "" && <Output>{entry.o}</Output>}
              {entry.node && <Box>{entry.node}</Box>}
            </Box>
          ))}

          {snakeOn && (
            <Box sx={{ whiteSpace: "pre", fontSize: 13, lineHeight: 1.3, color: "var(--tink)", mb: 1.75 }}>
              {snakeFrame}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="span" sx={{ color: "var(--tacc)", whiteSpace: "nowrap" }}>
              rckmath@portfolio:~$
            </Box>
            <Box
              component="input"
              ref={inputRef}
              onKeyDown={onTermKey}
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
              sx={{
                flex: 1,
                bgcolor: "transparent",
                border: "none",
                outline: "none",
                color: "var(--tink)",
                fontFamily: fonts.mono,
                fontSize: 13.5,
                caretColor: "var(--tacc)",
                p: 0,
              }}
            />
          </Box>
          <Box sx={{ mt: 2, color: "#3a423c", fontSize: 11.5 }}>{t("term.hint")}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;
