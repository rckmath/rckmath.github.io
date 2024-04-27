import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import { getAge } from "../../../utils";

const AboutMeBackContent = () => {
  return (
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
  );
};

export { AboutMeBackContent };
