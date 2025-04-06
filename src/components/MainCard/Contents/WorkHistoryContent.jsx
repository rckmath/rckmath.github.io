import React, { useState } from "react";
import { Typography, Grid, Stack, Chip, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useTranslation from "../../../hooks/useTranslation";

const WorkHistoryFrontContent = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      {t('workHistoryDescription')}
    </Typography>
  );
};

const WorkHistoryBackContent = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const workExperiences = [
    {
      at: "Softwrench",
      role: t('softwrench.role'),
      howLong: t('softwrench.period'),
      stack: t('softwrench.stack'),
      briefDescription: t('softwrench.description'),
    },
    {
      at: "ETEC de Hortolândia",
      role: t('etec.role'),
      howLong: t('etec.period'),
      stack: t('etec.stack'),
      briefDescription: t('etec.description'),
    },
    {
      at: "MB Labs",
      role: t('mblabs.role'),
      howLong: t('mblabs.period'),
      stack: t('mblabs.stack'),
      briefDescription: t('mblabs.description'),
    },
  ];

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
          <Typography variant="caption" color="text.secondary" align="justify">
            {work.howLong}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={0.5}>
            <b>{work.role}</b> {t('at')} {work.at}
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
    </Box>
  );
};

export { WorkHistoryBackContent, WorkHistoryFrontContent };
