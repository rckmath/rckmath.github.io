import React, { useState, Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import { Grid, Container, Box } from "@mui/material";

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
      <Container maxWidth={false} sx={{ py: { xs: 4, md: 6, lg: 8 } }}>
        <Grid
          container
          component="main"
          spacing={{ xs: 4, md: 6, lg: 8 }}
          sx={{
            alignItems: "stretch",
            justifyContent: "center",
            transition: "all 0.5s ease",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {CardsTitles.map((title, index) => {
            const card = Cards(isMobile)[title];

            return (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    maxWidth: isMobile ? '345px' : '420px',
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      '& > *': {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }
                    }}
                  >
                    <MainCard
                      title={title}
                      headerIcon={card.icon}
                      flipEnabled={card.flipEnabled}
                      backContent={card.backContent}
                      frontContent={card.frontContent}
                      setExpandPicture={setExpandPicture}
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
      <ProfilePictureModal open={expandPicture} setOpen={setExpandPicture} />
    </Fragment>
  );
};

export default Home;
