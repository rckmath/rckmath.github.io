import React from "react";
import { Button, ButtonGroup, Menu, MenuItem, IconButton, Box } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import LanguageIcon from "@mui/icons-material/Language";
import { useMediaQuery } from "react-responsive";

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    toggleLanguage();
    handleClose();
  };

  const FlagIcon = ({ src, alt }) => (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: 24,
        height: 18,
        objectFit: "cover",
        borderRadius: "2px",
      }}
    />
  );

  if (isMobile) {
    return (
      <>
        <IconButton onClick={handleClick} color="inherit" aria-label="language-toggle" size="small">
          <LanguageIcon sx={{ fontSize: "1.9rem" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleLanguageChange} selected={language === "en"}>
            <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
              <FlagIcon src="/usa.svg" alt="USA Flag" />
            </Box>
            {t("english")}
          </MenuItem>
          <MenuItem onClick={handleLanguageChange} selected={language === "pt"}>
            <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
              <FlagIcon src="/br.svg" alt="Brazil Flag" />
            </Box>
            {t("portuguese")}
          </MenuItem>
        </Menu>
      </>
    );
  }

  return (
    <ButtonGroup variant="contained" size="small">
      <Button onClick={toggleLanguage} color={language === "en" ? "primary" : "inherit"} startIcon={<FlagIcon src="/usa.svg" alt="USA Flag" />}>
        {t("english")}
      </Button>
      <Button onClick={toggleLanguage} color={language === "pt" ? "primary" : "inherit"} startIcon={<FlagIcon src="/br.svg" alt="Brazil Flag" />}>
        {t("portuguese")}
      </Button>
    </ButtonGroup>
  );
};

export default LanguageToggle;
