import React, { FormEvent, useRef } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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

  const disableWeekends = (date: Dayjs) => {
    return date.get('day') === 0 || date.get('day') === 6;
  };

  const nineAM = dayjs().set('hour', 9).startOf('hour');
  const fivePM = dayjs().set('hour', 17).startOf('hour');

  const today = dayjs().get('day') === 0 ?
    dayjs().add(1, 'day').set('hour', 9).startOf('hour') :
    dayjs().get('day') === 6 ?
      dayjs().add(1, 'day').set('hour', 9).startOf('hour') :
      dayjs();

  const today7 = dayjs().get('day') === 0 ?
    dayjs().add(8, 'day').set('hour', 9).startOf('hour') :
    dayjs().get('day') === 6 ?
      dayjs().add(8, 'day').set('hour', 9).startOf('hour') :
      dayjs().add(8, 'day');

  const defaultDateTime = dayjs().add(1, 'day').set('hour', 9).startOf('hour');

  return (
    <Container id="reservation" sx={{ padding: '20px 0', backgroundColor: 'rgba(250, 242, 232, 0.7)' }} >
      <Typography align="center" variant="h4" gutterBottom>
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
          label="Broj mobitela"
          variant="outlined"
          fullWidth
          margin="normal"
          name="mobitel"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <DateTimePicker
            sx={{ marginTop: '16px', marginBottom: '8px' }}
            shouldDisableDate={disableWeekends}
            minDate={today}
            maxDate={today7}
            minTime={nineAM}
            maxTime={fivePM}
            name="date"
            label="Datum Rezervacije"
            defaultValue={defaultDateTime} />
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
        <Button startIcon={<EmailOutlinedIcon/>} variant="contained" color="primary" type="submit" sx={{left:{xs:'35%', md:'40%'}, width:{xs:'30%', md:'20%'}}}>
          Pošalji
        </Button>
      </form>
    </Container>
  );
};
//'2022-04-17T00:00:00'
export default ContactForm;