import React, { useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { Grid } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfilePictureModal from "../components/ProfilePictureModal";
import { MainCard, Cards, CardsTitles } from "../components/MainCard";

const Home = () => {
  const [expandPicture, setExpandPicture] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  return (
    <Fragment>
      <Header />
      <Grid
        container
        component="main"
        gap={isMobile ? 4 : 8}
        sx={{
          marginTop: "3dvh",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.5s ease",
          paddingX: isMobile ? 1 : isBigScreen ? 7 : 4,
        }}
      >
        {CardsTitles.map((title, index) => {
          const card = Cards(isMobile)[title];

          return (
            <MainCard
              key={index}
              title={title}
              headerIcon={card.icon}
              backContent={card.backContent}
              frontContent={card.frontContent}
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
