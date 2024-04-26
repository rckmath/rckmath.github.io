import React, { Fragment } from "react";

import { Typography, Box } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";

export const Cards = (isMobile) => ({
  "About me": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Fragment>
    ),
    frontContent: "Passionate full-stack developer with a knack for innovation and discovering things.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <PersonIcon fontSize="inherit" />
      </Box>
    ),
  },
  "My skills": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Fragment>
    ),
    frontContent: "Experienced with JavaScript (Node.js, React.Js, React Native), C# .NET, Solidity, C/C++ and more.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <CodeIcon fontSize="inherit" />
      </Box>
    ),
  },
  "Work history": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Typography>
      </Fragment>
    ),
    frontContent: "Worked with many multi-sized projects. Did many API integrations work.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <ConstructionIcon fontSize="inherit" />
      </Box>
    ),
  },
  "Another card": {
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
