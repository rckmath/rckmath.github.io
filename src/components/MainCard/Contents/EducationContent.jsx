import React, { useState } from "react";

import { Typography, Grid, Chip, Stack } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const educationList = [
  {
    at: "UniFECAF",
    grade: "10/10",
    finishedOn: "Dec 2023",
    degree: "Postgraduate",
    course: "Blockchain Development",
    where: "Taboão da Serra, SP, Brazil",
  },
  {
    at: "PUC Campinas",
    grade: "10/10",
    degree: "Bachelor",
    finishedOn: "Dec 2022",
    course: "Software Engineering",
    where: "Campinas, SP, Brazil",
  },
  {
    at: "ETEC de Hortolândia",
    grade: "08/10",
    degree: "Technical",
    finishedOn: "Dec 2017",
    course: "IT - Development",
    where: "Hortolândia, SP, Brazil",
  },
];

const EducationFrontContent = () => {
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      Graduate software engineer, post-graduate specialization in blockchain development. Started developing by an IT
      Technician course.
    </Typography>
  );
};

const EducationBackContent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const education = educationList[currentPage];

  const handleGoBackPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const handleGoNextPage = () => {
    if (currentPage === educationList.length - 1) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <Grid sx={{ width: "100%", alignItems: "center" }} container>
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
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
          <Chip label={education.degree} size="small" variant="outlined" />

          <Typography variant="caption" color="text.secondary" fontSize="0.8rem" align="justify">
            Finished on {education.finishedOn}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={0.5}>
          <b>{education.course}</b> at {education.at}
        </Typography>

        <Typography variant="body2" color="text.secondary" fontSize="0.8rem" align="justify">
          {education.where}
        </Typography>

        <Typography variant="body2" color="text.secondary" fontSize="0.8rem" align="justify">
          Grade: {education.grade}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          textAlign: "right",
          cursor: currentPage === educationList.length - 1 ? "normal" : "pointer",
          visibility: currentPage === educationList.length - 1 ? "hidden" : "visible",
          color: currentPage === educationList.length - 1 ? "text.disabled" : "text.secondary",
        }}
      >
        <KeyboardArrowRightIcon onClick={handleGoNextPage} />
      </Grid>
    </Grid>
  );
};

export { EducationBackContent, EducationFrontContent };
