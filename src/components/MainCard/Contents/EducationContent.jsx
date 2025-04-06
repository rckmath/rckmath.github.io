import React, { useState } from "react";
import { Typography, Grid, Chip, Stack, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useTranslation from "../../../hooks/useTranslation";

const EducationFrontContent = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      {t('educationDescription')}
    </Typography>
  );
};

const EducationBackContent = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const educationList = [
    {
      at: "UniFECAF",
      grade: t('unifecaf.grade'),
      finishedOn: t('unifecaf.period'),
      degree: t('unifecaf.degree'),
      course: t('unifecaf.course'),
      where: t('unifecaf.location'),
    },
    {
      at: "PUC Campinas",
      grade: t('puc.grade'),
      degree: t('puc.degree'),
      finishedOn: t('puc.period'),
      course: t('puc.course'),
      where: t('puc.location'),
    },
    {
      at: "ETEC de Hortolândia",
      grade: t('etecEducation.grade'),
      degree: t('etecEducation.degree'),
      finishedOn: t('etecEducation.period'),
      course: t('etecEducation.course'),
      where: t('etecEducation.location'),
    },
  ];

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
    <Box sx={{ width: "100%" }}>
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
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
            <Chip label={education.degree} size="small" variant="outlined" />

            <Typography variant="caption" color="text.secondary" align="justify">
              {t('finishedOn')} {education.finishedOn}
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={0.5}>
            <b>{education.course}</b> {t('at')} {education.at}
          </Typography>

          <Typography variant="body2" color="text.secondary" fontSize="0.8rem" align="justify">
            {education.where}
          </Typography>

          <Typography variant="body2" color="text.secondary" fontSize="0.8rem" align="justify">
            {t('grade')}: {education.grade}
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
    </Box>
  );
};

export { EducationBackContent, EducationFrontContent };
