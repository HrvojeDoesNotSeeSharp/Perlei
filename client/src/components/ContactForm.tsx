import React, { FormEvent, useRef } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    emailjs
      .sendForm('service_lkitsns', 'contact_form', form.current!, {
        publicKey: 'M6oXjQT1zlhXx-pAn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    form.current!.reset();
  };



  return (
    <Container id="reservation" style={{ padding: '20px 0' }}>
      <Typography variant="h4" gutterBottom>
        Rezervacija
      </Typography>
      <form ref={form} noValidate autoComplete="off" onSubmit={sendEmail}>
        <TextField
          label="Ime"
          variant="outlined"
          fullWidth
          margin="normal"
          name="ime"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <DatePicker name="date" label="Datum Rezervacije" defaultValue={dayjs('2022-04-17')} />
        </LocalizationProvider>
        <TextField
          label="Poruka"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          name="poruka"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;