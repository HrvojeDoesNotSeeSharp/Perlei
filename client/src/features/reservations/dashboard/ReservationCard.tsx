import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    reservation: Reservation,
    selectReservation: (id:string) => void
    deleteReservation: (id:string) => void
}

export default function ReservationCard({reservation, selectReservation, deleteReservation}: Props) {
    return (
        <Card sx={{borderRadius: 3}}>
            <CardContent>
                <Typography variant='h5'>{reservation.ime}</Typography>
                <Typography sx={{color: 'text.secondary', mb: 1}}>{reservation.dateTime}</Typography>
                <Typography variant='body2'>{reservation.brojMobitela}</Typography>
                <Typography variant='body2'>{reservation.email}</Typography>
                <Typography variant='subtitle1'>{reservation.napomena}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent: 'space-between', pb: 2}}>
                <Chip label={reservation.usluga} variant='outlined'/>
                <Box display='flex' gap={3}>
                <Button onClick={() => selectReservation(reservation.id)} size='medium' variant='contained'>View</Button>
                <Button onClick={() => deleteReservation(reservation.id)} color='error' size='medium' variant='contained'>Delete</Button>
                </Box>
                
            </CardActions>
        </Card>
    )
}
