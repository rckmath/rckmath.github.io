import React, { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Typography, Box, Modal, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

import ColoredButton from "../../ColoredButton";

const modalBoxStyles = {
  top: "50%",
  left: "50%",
  zIndex: 9999,
  width: "80vw",
  borderWidth: 0,
  display: "flex",
  outline: "none",
  userSelect: "none",
  overflow: "hidden",
  position: "absolute",
  flexDirection: "column",
  transform: "translate(-50%, -50%)",
};

const DisplayResumeModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-resume"
      aria-describedby="modal-curriculum-vitae-display"
    >
      <Box sx={modalBoxStyles}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
          <IconButton aria-label="close" sx={{ p: 0, left: 5, color: "white" }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <iframe src="./en-us_resume.pdf" style={{ height: "90vh", border: 0 }}></iframe>
      </Box>
    </Modal>
  );
};

const MyResumeFrontContent = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1224 });
  const [displayResume, setDisplayResume] = useState(false);

  const handleResumeAction = (e) => {
    e.preventDefault();

    if (isMobileOrTablet) {
      return fetch("./en-us_resume.pdf").then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);

          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CV ERICK M L PACHECO.pdf";
          alink.click();
        });
      });
    }

    setDisplayResume(true);
  };

  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" fontSize="inherit" align="justify" mb={1.22}>
        You can {isMobileOrTablet ? "download" : "view"} résumé (curriculum vitae) below:
      </Typography>
      <ColoredButton
        variant="outlined"
        onClick={handleResumeAction}
        backgroundColor="#00000080"
        startIcon={isMobileOrTablet ? <DownloadIcon /> : <VisibilityIcon />}
        fullWidth
      >
        {isMobileOrTablet ? "Download it now" : "View it now"}
      </ColoredButton>
      <DisplayResumeModal open={displayResume} setOpen={setDisplayResume} />
    </Fragment>
  );
};

export { MyResumeFrontContent };
