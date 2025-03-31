import React, { useState } from "react";

import { Typography, Grid, Stack, Chip } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const workExperiences = [
  {
    at: "Softwrench",
    role: "Senior Software Engineer",
    howLong: "Sep 2021 - Present",
    stack: ["C# .NET", "AngularJS", "React Native", "AWS"],
    briefDescription: "Architecture and development of APIs, front-end development (mobile & web), team leading and many more.",
  },
  {
    at: "ETEC de Hortolândia",
    role: "IT Teacher",
    howLong: "Aug 2023 - Aug 2025",
    stack: ["Shell script", "Linux", "MS Office", "React Native"],
    briefDescription: "Teaching subjects like React Native, MS Office, Linux, cloud computing & bash; network computer and more.",
  },
  {
    at: "MB Labs",
    role: "Back-end Developer",
    howLong: "Aug 2020 - Aug 2021",
    stack: ["Node.js", "TypeScript", "AWS", "Nginx"],
    briefDescription: "Was a 'go-to person' developer there, I contributed to over than 7 projects in many ways.",
  },
];

const WorkHistoryFrontContent = () => {
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      Worked in many multi-sized projects; well-versed in developing and integrating RESTful and SOAP APIs, especially
      using JavaScript and .NET. Experienced with many projects, front-end development and in providing infrastructure
      (DevOps) support.
    </Typography>
  );
};

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
        xs={1}
        sx={{
          textAlign: "left",
          cursor: currentPage === 0 ? "normal" : "pointer",
          visibility: currentPage === 0 ? "hidden" : "visible",
          color: currentPage === 0 ? "text.disabled" : "text.secondary",
        }}
        item
      >
        <KeyboardArrowLeftIcon onClick={handleGoBackPage} />
      </Grid>
      <Grid xs={10} item>
        <Typography variant="caption" color="text.secondary" align="justify">
          {work.howLong}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={0.5}>
          <b>{work.role}</b> at {work.at}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5} mb={4}>
          {work.stack.map((technology, key) => {
            return <Chip key={key} label={technology} size="small" variant="outlined" />;
          })}
        </Stack>
        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
          {work.briefDescription}
        </Typography>
      </Grid>
      <Grid
        xs={1}
        sx={{
          textAlign: "right",
          cursor: currentPage === workExperiences.length - 1 ? "normal" : "pointer",
          visibility: currentPage === workExperiences.length - 1 ? "hidden" : "visible",
          color: currentPage === workExperiences.length - 1 ? "text.disabled" : "text.secondary",
        }}
        item
      >
        <KeyboardArrowRightIcon onClick={handleGoNextPage} />
      </Grid>
    </Grid>
  );
};

export { WorkHistoryBackContent, WorkHistoryFrontContent };
