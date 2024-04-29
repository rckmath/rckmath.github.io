import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import { getAge } from "../../../utils";

const AboutMeFrontContent = () => {
  return (
    <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify">
      Passionate full-stack developer with +4 years of experience and a knack for innovation and discovering new
      technologies. Eager to specialize in Blockchain, Web3, and smart contracts development over the next three years.
    </Typography>
  );
};

const AboutMeBackContent = () => {
  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Full name:</b> Erick Matheus Lopes Pacheco
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Age:</b> {getAge()} years old
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Developer since:</b> 2016
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>A passion:</b> Blockchain
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Main hobbies:</b> Gaming and watching movies
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Marital status:</b> Married with a wonderful woman
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" lineHeight="1.572rem">
        <b>Favorite games:</b> Fallout, Resident Evil, Pokémon
      </Typography>
    </Fragment>
  );
};

export { AboutMeBackContent, AboutMeFrontContent };
