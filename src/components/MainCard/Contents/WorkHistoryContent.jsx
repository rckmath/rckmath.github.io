import React, { useState } from "react";

import { Typography, Grid, Box, Chip } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const workExperiences = [
  {
    at: "Softwrench",
    role: "Full-stack Engineer",
    howLong: "Sep 2021 - Present",
    stack: ["C# .NET", "AngularJS", "React Native", "AWS"],
    briefDescription: "Architecture and development of APIs, front-end development (mobile & web) and many more.",
  },
  {
    at: "Centro Paula Souza - ETEC",
    role: "IT Teacher",
    howLong: "Aug 2023 - Present",
    stack: ["Shell script", "Linux", "MS Office", "Virtualization"],
    briefDescription: "Teaching subjects like MS Office, Linux, cloud computing & bash; network computer and more.",
  },
  {
    at: "MB Labs",
    role: "Back-end Developer",
    howLong: "Aug 2020 - Aug 2021",
    stack: ["Node.js", "TypeScript", "AWS", "Nginx"],
    briefDescription: "Was a 'go-to person' developer there, I contributed to over than 7 projects in many ways.",
  },
];

const WorkHistoryBackContent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const work = workExperiences[currentPage];

  const handleGoBackPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const handleGoNextPage = () => {
    if (currentPage === workExperiences.length - 1) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <Grid container sx={{ width: "100%", alignItems: "center" }}>
      <Grid
        item
        xs={1}
        sx={{
          textAlign: "left",
          cursor: currentPage === 0 ? "normal" : "pointer",
          visibility: currentPage === 0 ? "hidden" : "visible",
          color: currentPage === 0 ? "text.disabled" : "text.secondary",
        }}
      >
        <KeyboardArrowLeftIcon onClick={handleGoBackPage} />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="caption" color="text.secondary" fontSize="0.8rem" align="justify">
          {work.howLong}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={0.5}>
          <b>{work.role}</b> at {work.at}
        </Typography>
        <Box display="flex" alignItems="center" gap={0.5} width="100%" mb={4}>
          {work.stack.map((technology, key) => {
            return <Chip key={key} label={technology} size="small" variant="outlined" />;
          })}
        </Box>
        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
          {work.briefDescription}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          textAlign: "right",
          cursor: currentPage === workExperiences.length - 1 ? "normal" : "pointer",
          visibility: currentPage === workExperiences.length - 1 ? "hidden" : "visible",
          color: currentPage === workExperiences.length - 1 ? "text.disabled" : "text.secondary",
        }}
      >
        <KeyboardArrowRightIcon onClick={handleGoNextPage} />
      </Grid>
    </Grid>
  );
};

export { WorkHistoryBackContent };
