import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    axios.get<Reservation[]>('https://localhost:5001/api/reservations')
      .then(response => setReservations(response.data));
  }, [])


  return (
    <>
      <Typography variant="h3">Reservations</Typography>
      <List>
        {reservations.map((reservation) => (
          <ListItem key={reservation.id}>
            <ListItemText>{reservation.ime}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
