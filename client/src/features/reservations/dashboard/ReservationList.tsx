import { Box } from "@mui/material";
import ReservationCard from "./ReservationCard";

type Props = {
    reservations: Reservation[],
    selectReservation: (id:string) => void;
    deleteReservation: (id:string) => void;
}

export default function ReservationList({reservations, selectReservation, deleteReservation}: Props) {
  return (
    <Box sx={{display:'flex', flexDirection: 'column', gap: 3}}>
        {reservations.map(reservation => (
            <ReservationCard 
            key={reservation.id} 
            reservation={reservation}
            selectReservation={selectReservation}
            deleteReservation={deleteReservation}
            />
        ))}
    </Box>
  )
}
