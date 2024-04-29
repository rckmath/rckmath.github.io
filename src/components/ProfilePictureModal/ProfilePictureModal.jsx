import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Avatar, Modal, IconButton } from "@mui/material";

import { mainBox } from "./ProfilePictureModalStyles";

const ProfilePictureModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-resume"
      aria-describedby="modal-curriculum-vitae-display"
    >
      <Box sx={mainBox}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
          <IconButton aria-label="close" sx={{ p: 0, left: 5, color: "white" }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Avatar alt="Erick profile picture" src="/me.png" sx={{ width: 256, height: 256 }} />
      </Box>
    </Modal>
  );
};

export default ProfilePictureModal;
