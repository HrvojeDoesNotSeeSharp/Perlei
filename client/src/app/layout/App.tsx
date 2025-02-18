import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ReservationDashboard from "../../features/reservations/dashboard/ReservationDashboard";

function App() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Reservation[]>('https://localhost:5001/api/reservations')
      .then(response => setReservations(response.data));
  }, [])

  const handleSelectedReservation = (id: string) =>{
    setSelectedReservation(reservations.find(x => x.id === id));
  }

  const handleCancelSelectedReservation = () =>{
    setSelectedReservation(undefined);
  }

  const handleEditMode = (id?: string) =>{ 
    if (id) handleSelectedReservation(id) 
    else handleCancelSelectedReservation()
    setEditMode(true);
  }

  const cancelEditMode = () =>{
    setEditMode(false);
    setSelectedReservation(undefined);
  }

  const handleSubmitForm = (reservation: Reservation) =>{
    if (reservation.id) {
      setReservations(reservations.map(x => x.id === reservation.id ? reservation : x))
    } else {
      const newReservation = {...reservation, id: reservations.length.toString()}
      setSelectedReservation(newReservation);
      setReservations([...reservations, newReservation])
    }
    setEditMode(false);
  }

  const handleDelete = (id:string) => {
    setReservations(reservations.filter(x => x.id !== id))
  }


  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline />
      <NavBar 
      handleEditMode={handleEditMode}/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ReservationDashboard 
        reservations={reservations}
        selectReservation={handleSelectedReservation}
        cancelReservation={handleCancelSelectedReservation}
        selectedReservation={selectedReservation}
        editMode={editMode}
        handleEditMode={handleEditMode}
        cancelEditMode={cancelEditMode}
        SubmitForm={handleSubmitForm}
        deleteReservation={handleDelete}
        />   
      </Container>
    </Box>
  )
}

export default App
