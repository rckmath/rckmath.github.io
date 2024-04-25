import React, { useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { Grid } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfilePictureModal from "../components/ProfilePictureModal";

import { MainCard, CardContent, CardContentTitles } from "../components/MainCard";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [expandPicture, setExpandPicture] = useState(false);

  return (
    <Fragment>
      <Header />
      <Grid
        container
        component="main"
        gap={isMobile ? 5 : 10}
        sx={{ alignItems: "center", justifyContent: "center", marginTop: "3vh" }}
      >
        {CardContentTitles.map((title, index) => {
          return (
            <MainCard
              key={index}
              title={title}
              content={CardContent[title].content}
              setExpandPicture={setExpandPicture}
            />
          );
        })}
      </Grid>
      <Footer />
      <ProfilePictureModal open={expandPicture} setOpen={setExpandPicture} />
    </Fragment>
  );
};

export default Home;
