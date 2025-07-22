import { useState } from 'react';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { Divider, Grid2 } from '@mui/material';
import Footer from './Footer';
import AboutUs1 from './AboutUs1';
import Usluge from './Usluge';
import CheckboxTest from './CheckboxTest';
import Success from './Success';
import ContactFormNew from './ContactFormNew';
import dayjs from 'dayjs';

interface ReservationNew {
  id: string
  name: string
  service: string[]
  totalPrice: number
  dateOfReservation: Date
  email: string
  phone: string
  note: string
}


export default function App() {
  const [reservationStep, setReservationStep] = useState(0);

  const toggleSteps = (a:number) => {
    setReservationStep(reservationStep + a)
  }

  const [reservation, setReservation] = useState<ReservationNew>(
    {id:"", name:"", service:[], totalPrice:0, dateOfReservation:dayjs().toDate(), email:"",phone:"",note:""}
  );


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
        <ContactFormNew 
        setReservation={setReservation}
        reservation={reservation}
        toggleSteps={toggleSteps} />}
      {reservationStep === 2 &&
        <Success toggleSteps={toggleSteps} />}
      <AboutUs1 />
      <Footer />

    </Grid2>

  );
};