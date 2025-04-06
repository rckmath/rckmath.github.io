import React from "react";
import { Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import { EducationBackContent, EducationFrontContent, WorkHistoryBackContent, WorkHistoryFrontContent } from "./Contents";
import useTranslation from "../../hooks/useTranslation";

export const Cards = (isMobile) => {
  const { t } = useTranslation();
  
  return {
    [t('workHistory')]: {
      flipEnabled: true,
      backContent: <WorkHistoryBackContent />,
      frontContent: <WorkHistoryFrontContent />,
      icon: (
        <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
          <ConstructionIcon fontSize="inherit" />
        </Box>
      ),
    },
    [t('education')]: {
      flipEnabled: true,
      backContent: <EducationBackContent />,
      frontContent: <EducationFrontContent />,
      icon: (
        <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
          <SchoolIcon fontSize="inherit" />
        </Box>
      ),
    },
  };
};

export const CardsTitles = (isMobile) => {
  const { t } = useTranslation();
  return [t('workHistory'), t('education')];
};
