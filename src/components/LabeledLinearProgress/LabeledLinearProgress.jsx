import React, { useCallback } from "react";
import { useMediaQuery } from 'react-responsive';

import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme, progressColor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: progressColor,
  },
}));

const LabeledLinearProgress = ({ value, label, labelPos = "end" }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const interpolateColor = useCallback((color1, color2, factor = 0.5) => {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map(function (hex) {
        return parseInt(hex, 16);
      })
      .map(function (value, index) {
        return Math.round(value + factor * (parseInt(color2.slice(1).match(/.{2}/g)[index], 16) - value));
      });

    return (
      "#" +
      result
        .map(function (value) {
          return ("0" + value.toString(16)).slice(-2); // pad with zero if needed
        })
        .join("")
    );
  }, []);

  const getProgressColor = useCallback((percentage) => {
    // Validate input
    if (percentage < 0 || percentage > 100) {
      return "#FFF0"; // Handle out of range input
    }

    // Color definitions
    const colors = [
      { pct: 0, color: "#800000" }, // Darker Red
      { pct: 25, color: "#e47a00" }, // Darker Orange
      { pct: 50, color: "#dfdf00" }, // Darker Yellow
      { pct: 75, color: "#008000" }, // Darker Green
      { pct: 100, color: "#005700" }, // Very Dark Green
    ];

    // Find where the percentage fits in
    for (let i = 1; i < colors.length; i++) {
      if (percentage <= colors[i].pct) {
        const lower = colors[i - 1];
        const upper = colors[i];
        const range = upper.pct - lower.pct;
        const rangePct = (percentage - lower.pct) / range;
        return interpolateColor(lower.color, upper.color, rangePct);
      }
    }
    return "#005700"; // Should not be reached, unless pct is 100
  }, []);

  return (
    <Grid container sx={{ width: "100%", alignItems: "center" }}>
      {labelPos === "start" && (
        <Grid xs={4} md={3}>
          <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight={isMobile ? "1.53rem" : "1.22rem"}>
            {label}
          </Typography>
        </Grid>
      )}
      <Grid xs={8} md={9}>
        <BorderLinearProgress variant="determinate" value={value} progressColor={getProgressColor(value)} />
      </Grid>
      {labelPos === "end" && (
        <Grid sx={4} md={3}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default LabeledLinearProgress;
