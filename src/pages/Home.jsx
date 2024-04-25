import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";

import { Grid } from "@mui/material";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={2} component="main" justifyContent="center" alignItems="center">
        <MainCard title="About me" />
        <MainCard title="Languages" />
        <MainCard title="Frameworks" />
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
