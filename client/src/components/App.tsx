import React from 'react';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { Divider, Grid2 } from '@mui/material';
import Footer from './Footer';
import AboutUs1 from './AboutUs1';

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
      
      <Divider orientation="vertical" variant="middle" flexItem />
      <Gallery />
      <ContactForm />
      <AboutUs1 />
      <Footer />
      
    </Grid2>

  );
};

export default App;