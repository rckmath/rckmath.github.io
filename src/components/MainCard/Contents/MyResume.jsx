import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

import ColoredButton from "../../ColoredButton";

const MyResumeFrontContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={1.22}>
        You can {isMobile ? "view" : "download"} résumé (curriculum vitae) below:
      </Typography>
      <ColoredButton
        variant="outlined"
        startIcon={isMobile ? <VisibilityIcon /> : <DownloadIcon />}
        backgroundColor="#00000070"
        fullWidth
      >
        {isMobile ? "Download it now" : "View it now"}
      </ColoredButton>
    </Fragment>
  );
};

export { MyResumeFrontContent };
