import React from 'react';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { Divider, Grid2 } from '@mui/material';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Grid2 id="main" container
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mb: "2%"
      }}>
      <NavBar />
      <LandingPage />
      <AboutUs />
      <Divider orientation="vertical" variant="middle" flexItem />
      <Gallery />
      <ContactForm />
      <Footer />
      
    </Grid2>

  );
};

export default App;