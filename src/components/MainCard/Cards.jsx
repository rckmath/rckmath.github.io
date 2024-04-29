import React, { Fragment } from "react";

import { Box } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ConstructionIcon from "@mui/icons-material/Construction";

import {
  AboutMeBackContent,
  AboutMeFrontContent,
  MySkillsBackContent,
  MySkillsFrontContent,
  EducationBackContent,
  MyResumeFrontContent,
  EducationFrontContent,
  WorkHistoryBackContent,
  WorkHistoryFrontContent,
  NextFeaturesBackContent,
  NextFeaturesFrontContent,
} from "./Contents";

export const Cards = (isMobile) => ({
  "About me": {
    flipEnabled: true,
    backContent: <AboutMeBackContent />,
    frontContent: <AboutMeFrontContent />,
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <PersonIcon fontSize="inherit" />
      </Box>
    ),
  },
  "My skills": {
    flipEnabled: true,
    backContent: <MySkillsBackContent />,
    frontContent: <MySkillsFrontContent />,
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <CodeIcon fontSize="inherit" />
      </Box>
    ),
  },
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
  "My resume": {
    flipEnabled: false,
    backContent: <Fragment></Fragment>,
    frontContent: <MyResumeFrontContent />,
    icon: <Fragment></Fragment>,
  },
  "Next features": {
    flipEnabled: true,
    backContent: <NextFeaturesBackContent />,
    frontContent: <NextFeaturesFrontContent />,
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <FiberNewIcon fontSize="inherit" />
      </Box>
    ),
  },
});

export const CardsTitles = Object.keys(Cards(false)).map((key) => key);
