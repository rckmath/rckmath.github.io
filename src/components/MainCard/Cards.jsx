import React from "react";

import { Box } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";

import { EducationBackContent, EducationFrontContent, WorkHistoryBackContent, WorkHistoryFrontContent } from "./Contents";

export const Cards = (isMobile) => ({
  "Work history": {
    flipEnabled: true,
    backContent: <WorkHistoryBackContent />,
    frontContent: <WorkHistoryFrontContent />,
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <ConstructionIcon fontSize="inherit" />
      </Box>
    ),
  },
  Education: {
    flipEnabled: true,
    backContent: <EducationBackContent />,
    frontContent: <EducationFrontContent />,
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <SchoolIcon fontSize="inherit" />
      </Box>
    ),
  },
});

export const CardsTitles = Object.keys(Cards(false)).map((key) => key);
