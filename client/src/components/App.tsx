import React, { useState } from 'react';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { Divider, Grid2 } from '@mui/material';
import Footer from './Footer';
import AboutUs1 from './AboutUs1';
import Usluge from './Usluge';
//import RezUsluge from './RezUsluge';
import CheckboxTest from './CheckboxTest';
import Success from './Success';
//import uuid from 'react-uuid';

interface ReservationNew {
  id: string
  name: string
  service: string[]
  dateOfReservation: string
  email: string
  phone: string
  note: string
}

export default function App() {
  const [reservationStep, setReservationStep] = useState(0);

  const toggleSteps = () => {
    setReservationStep(reservationStep + 1)
  }

  const [reservation, setReservation] = useState<ReservationNew>();

  /*const handleReservation = (reservation:ReservationNew) => {
    setReservation(reservation)
  }*/

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
      {reservationStep === 0 &&
        <CheckboxTest 
        reservation={reservation}
        setReservation={setReservation}
        toggleSteps={toggleSteps} />}
      {reservationStep === 1 &&
        <ContactForm 
        reservation={reservation}
        toggleSteps={toggleSteps} />}
      {reservationStep === 2 &&
        <Success toggleSteps={toggleSteps} />}
      <AboutUs1 />
      <Footer />

    </Grid2>

  );
};