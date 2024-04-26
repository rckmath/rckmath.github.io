import React from "react";

import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const LabeledLinearProgress = ({ value, label, labelPos = "end" }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {labelPos === "start" && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>
      )}
      <Box sx={{ width: "100%", ml: labelPos === "start" ? 3 : 0, mr: labelPos === "end" ? 3 : 0 }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
      {labelPos === "end" && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LabeledLinearProgress;
