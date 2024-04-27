import React from "react";

import { Typography, Grid } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const WorkHistoryBackContent = () => {
  return (
    <Grid container sx={{ width: "100%", alignItems: "center" }}>
      <Grid item xs={1} textAlign="left" color="text.secondary">
        <KeyboardArrowLeftIcon />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Grid>
      <Grid item xs={1} textAlign="right" color="text.secondary">
        <KeyboardArrowRightIcon />
      </Grid>
    </Grid>
  );
};

export { WorkHistoryBackContent };
