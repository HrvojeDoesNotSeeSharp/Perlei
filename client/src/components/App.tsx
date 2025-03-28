import React from 'react';
//import ContactForm from './ContactForm';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { Divider, Grid2 } from '@mui/material';
import Footer from './Footer';
import AboutUs1 from './AboutUs1';
import Usluge from './Usluge';
//import RezUsluge from './RezUsluge';
import CheckboxTest from './CheckboxTest';


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
      <Usluge />
      <CheckboxTest />
      <AboutUs1 />
      <Footer />
      
    </Grid2>

  );
};

export default App;