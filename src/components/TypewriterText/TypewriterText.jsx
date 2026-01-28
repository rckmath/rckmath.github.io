import { Typography } from "@mui/material";

import { useTypewriter } from "../../hooks";

const TypewriterText = ({ text, speed, variant = "body2", color = "inherit", fontSize = "1rem", sx }) => {
  const displayText = useTypewriter(text, speed);

  return (
    <Typography variant={variant} color={color} fontSize={fontSize} sx={sx}>
      {displayText}
    </Typography>
  );
};

export default TypewriterText;
