import { Container, Typography, TextField, Button, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
import 'dayjs/locale/de';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useForm } from 'react-hook-form'
import { useRef } from 'react';
import { reservationSchema } from '../lib/schemas/reservationSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from './TextInput';
import DateTimeInput from './DateTimeInput';

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

type Props = {
  toggleSteps: (a:number)=>void
  reservation: ReservationNew
  setReservation: (reservation:ReservationNew) => void
}

export default function ContactForm({toggleSteps, reservation, setReservation}:Props) {
  const formRef = useRef<HTMLFormElement>(null);
  
  const  { control, handleSubmit } = useForm<reservationSchema>({
    mode: 'onTouched',
    resolver: zodResolver(reservationSchema)
  });


  const onSubmit = async (data: reservationSchema) => {
    const newReservation = {...reservation, name:data.ime, 
                                            dateOfReservation:data.date, 
                                            email:data.email, 
                                            phone:data.mobitel, 
                                            note:data.poruka ?? ""}
    setReservation(newReservation);
    console.log(newReservation)

    emailjs
      .sendForm('service_lkitsns', 'contact_form', formRef.current!, {
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
    toggleSteps(1)
  }


  const serviceSingleString = () => {
    var final = ""
    reservation?.service.forEach((a) => {
      final += a + ', '

    })
    final = final.substring(0, final.length - 2);
    //console.log(final)
    return final;
  }

  return (
    <Container id="reservation" sx={{ padding: '20px 0', backgroundColor: 'rgba(250, 242, 232, 0.7)' }} >
      <Typography align="center" variant="h4" gutterBottom>
        Rezervacija
      </Typography>
      <Box ref={formRef} component='form' noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Ime" control={control} name="ime" />
        <TextInput label="Mobitel" control={control} name="mobitel" />
        <TextInput label="Email" control={control} name="email" />
        <DateTimeInput label="Datum" 
                       control={control} 
                       name="date"
                        />
        <TextInput label="Poruka" 
                   control={control} 
                   name="poruka" 
                   multiline 
                   rows={3}/>
        <TextField sx={{
                      display: "none"
                    }} 
                    label="Usluge" 
                    //control={control}
                    defaultValue={`${serviceSingleString()}`}
                    name="services" 
          />

        <TextField
          fullWidth
          multiline
          margin="normal"
          defaultValue={`Odabrane usluge: ${serviceSingleString()} \n\nUkupna cijena: ${reservation?.totalPrice} eur`}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          //name="services" 
        />
        <Button  startIcon={<EmailOutlinedIcon/>} variant="contained" color="primary" type="submit" sx={{left:{xs:'35%', md:'40%'}, width:{xs:'30%', md:'20%'}}}>
          Pošalji
        </Button>
      </Box>
    </Container>
  );
};
//'2022-04-17T00:00:00'