import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import { getAge } from "../../../utils";

const AboutMeBackContent = () => {
  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Full name:</b> Erick Matheus Lopes Pacheco
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Age:</b> {getAge()} years old
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Developer since:</b> 2016
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>A passion:</b> Blockchain
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Main hobbies:</b> Gaming & watching movies
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Marital status:</b> Married with a wonderful woman
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.575rem">
        <b>Favorite games:</b> Fallout, Resident Evil, Pokémon
      </Typography>
    </Fragment>
  );
};

export { AboutMeBackContent };
