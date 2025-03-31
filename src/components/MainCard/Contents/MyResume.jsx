import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import ColoredButton from "../../ColoredButton";

const emailTo = "ericklopes02@outlook.com";
const emailSubject = "Hi, I saw your web portfolio...";
const emailBody =
  "...and I want to know more about you. Could you please me send your resume?%0D%0A%0D%0A<write here more details>";

const MyResumeFrontContent = () => {
  const handleResumeAction = (e) => {
    e.preventDefault();

    location.href = "mailto:" + emailTo + "?subject=" + emailSubject + "&body=" + emailBody;
  };

  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={1.22}>
        You can request my résumé below:
      </Typography>
      <ColoredButton
        variant="contained"
        onClick={handleResumeAction}
        backgroundColor="#3b82f6"
        endIcon={<SendIcon />}
        fullWidth
        sx={{
          py: 1,
          fontWeight: 500,
          letterSpacing: '0.01em',
          '&:hover': {
            backgroundColor: '#2563eb',
          }
        }}
      >
        Request it now
      </ColoredButton>
    </Fragment>
  );
};

export { MyResumeFrontContent };
