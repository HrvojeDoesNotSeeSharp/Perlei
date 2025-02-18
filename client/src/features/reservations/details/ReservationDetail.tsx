import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    reservation: Reservation
    cancelReservation: () => void
    handleEditMode: (id:string)=>void
}

export default function ReservationDetails({reservation, handleEditMode, cancelReservation}: Props) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia 
            component='img'
            src={`/images/categoryImages/${reservation.usluga}.jpg`}    
        />
        <CardContent>
            <Typography variant='h5'>{reservation.ime}</Typography>
            <Typography variant='subtitle1' fontWeight={'light'}>{reservation.dateTime}</Typography>
            <Typography variant='body1'>{reservation.usluga}</Typography>
            <Typography variant='body1'>{reservation.napomena}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => handleEditMode(reservation.id)} color='primary'>Edit</Button>
            <Button onClick={cancelReservation} color='inherit'>Cancel</Button>
        </CardActions>

    </Card>
  )
}
