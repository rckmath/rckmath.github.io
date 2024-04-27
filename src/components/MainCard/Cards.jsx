import React, { Fragment } from "react";

import { Typography, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";

import { getAge } from "../../utils";
import LabeledLinearProgress from "../LabeledLinearProgress/LabeledLinearProgress";

export const Cards = (isMobile) => ({
  "About me": {
    backContent: (
      <Fragment>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>Full name:</b> Erick Matheus Lopes Pacheco
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>Age:</b> {getAge()} years old
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>Developer since:</b> 2016
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>A passion:</b> Blockchain
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>Main hobbies:</b> Gaming & watching movies
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit">
          <b>Marital status:</b> Married with a wonderful woman
        </Typography>
      </Fragment>
    ),
    frontContent:
      "Graduate software engineer, passionate full-stack developer with +4 years of experience and a knack for innovation and discovering new technologies. Eager to specialize in Blockchain, Web3, and smart contracts development over the next three years.",
    icon: (
      <Box component="div" color="text.secondary" fontSize={isMobile ? "1.75rem" : "1.5rem"} sx={{ display: "flex" }}>
        <PersonIcon fontSize="inherit" />
      </Box>
    ),
  },
  "My skills": {
    backContent: (
      <Fragment>
        <LabeledLinearProgress value={71} label="React.js" labelPos="start" />
        <LabeledLinearProgress value={64} label="React Native" labelPos="start" />
        <LabeledLinearProgress value={83} label="Node.js" labelPos="start" />
        <LabeledLinearProgress value={52} label="C# .NET" labelPos="start" />
        <LabeledLinearProgress value={31} label="C/C++" labelPos="start" />
        <LabeledLinearProgress value={17} label="Solidity" labelPos="start" />
        <LabeledLinearProgress value={37} label="Docker" labelPos="start" />
        <LabeledLinearProgress value={47} label="AWS" labelPos="start" />
        <LabeledLinearProgress value={60} label="SQL" labelPos="start" />
      </Fragment>
    ),
    frontContent:
      "Used to work with the best practices of software development and architecture like design patterns, SOLID, TDD/BDD, Git Flow and more. Experienced with Javascript stack (Node, React), C# (.NET Framework, .NET 8, EF Core), AWS tools, Docker and more.",
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
    frontContent:
      "Worked in many multi-sized projects; well-versed in developing and integrating RESTful and SOAP APIs, especially using JavaScript and .NET. Experienced with many projects, front-end development and in providing infrastructure (DevOps) support.",
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
