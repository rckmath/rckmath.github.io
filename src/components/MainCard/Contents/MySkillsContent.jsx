import React, { Fragment } from "react";
import LabeledLinearProgress from "../../LabeledLinearProgress";
import { Typography } from "@mui/material";

const MySkillsFrontContent = () => {
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      Used to work with the best practices of software development and architecture like design patterns, SOLID,
      TDD/BDD, Git Flow and more. Experienced with JavaScript stacks, C# (.NET Framework, .NET 8, EF Core), AWS tools,
      Docker and more.
    </Typography>
  );
};

const MySkillsBackContent = () => {
  return (
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
  );
};

export { MySkillsBackContent, MySkillsFrontContent };
