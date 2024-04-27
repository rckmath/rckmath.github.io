import React, { Fragment } from "react";

import { Typography, Box } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";

import { WorkHistoryBackContent, AboutMeBackContent, MySkillsBackContent, EducationContent } from "./Contents";

export const Cards = (isMobile) => ({
  "About me": {
    backContent: <AboutMeBackContent />,
    frontContent:
      "Passionate full-stack developer with +4 years of experience and a knack for innovation and discovering new technologies. Eager to specialize in Blockchain, Web3, and smart contracts development over the next three years.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <PersonIcon fontSize="inherit" />
      </Box>
    ),
  },
  "My skills": {
    backContent: <MySkillsBackContent />,
    frontContent:
      "Used to work with the best practices of software development and architecture like design patterns, SOLID, TDD/BDD, Git Flow and more. Experienced with JavaScript stacks, C# (.NET Framework, .NET 8, EF Core), AWS tools, Docker and more.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <CodeIcon fontSize="inherit" />
      </Box>
    ),
  },
  "Work history": {
    backContent: <WorkHistoryBackContent />,
    frontContent:
      "Worked in many multi-sized projects; well-versed in developing and integrating RESTful and SOAP APIs, especially using JavaScript and .NET. Experienced with many projects, front-end development and in providing infrastructure (DevOps) support.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <ConstructionIcon fontSize="inherit" />
      </Box>
    ),
  },
  Education: {
    backContent: <EducationContent />,
    frontContent:
      "Graduate software engineer, post-graduate specialization in blockchain development. Started developing by an IT Technician course.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <SchoolIcon fontSize="inherit" />
      </Box>
    ),
  },

  "My resume": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Fragment>
    ),
    frontContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <ConstructionIcon fontSize="inherit" />
      </Box>
    ),
  },
  "Next features": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Fragment>
    ),
    frontContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <ConstructionIcon fontSize="inherit" />
      </Box>
    ),
  },
});

export const CardsTitles = Object.keys(Cards(false)).map((key) => key);
