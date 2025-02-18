import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type Props = {
    cancelEditMode: () => void
    reservation?: Reservation
    SubmitForm: (reservation:Reservation) => void
}

export default function ReservationForm({ cancelEditMode, reservation, SubmitForm }: Props) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: FormDataEntryValue } = {}

        formData.forEach((value, key) => {
            data[key] = value;
        });

        if(reservation) data.id = reservation.id

        SubmitForm(data as unknown as Reservation)

    }

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant='h5' gutterBottom color='primary'>
                Create reservation
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name='ime' label='Ime' defaultValue={reservation?.ime} />
                <TextField name='napomena' label='Napomena' defaultValue={reservation?.napomena} multiline rows={3} />
                <TextField name='dateTime' label='Datum' defaultValue={reservation?.dateTime} type='date' />
                <TextField name='brojMobitela' label='Mobitel' defaultValue={reservation?.brojMobitela} />
                <TextField name='email' label='Email' defaultValue={reservation?.email} />
                <TextField name='usluga' label='Usluga' defaultValue={reservation?.usluga} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={cancelEditMode} color='inherit'>Cancel</Button>
                    <Button type="submit" color='success' variant='contained'>Submit</Button>
                </Box>
            </Box>
        </Paper>


    )
}
