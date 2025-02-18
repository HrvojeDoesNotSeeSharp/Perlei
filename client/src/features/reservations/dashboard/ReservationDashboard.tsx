import { Grid2 } from "@mui/material";
import ReservationList from "./ReservationList";
import ReservationDetail from "../details/ReservationDetail";
import ReservationForm from "../form/ReservationForm";

type Props = {
  reservations: Reservation[]
  selectReservation: (id: string) => void
  cancelReservation: () => void
  selectedReservation?: Reservation
  editMode:boolean
  handleEditMode: (id: string) => void
  cancelEditMode: () => void
  SubmitForm: (reservation: Reservation) => void
  deleteReservation: (id:string) => void
}

export default function ReservationDashboard({ reservations, selectReservation, cancelReservation, selectedReservation, editMode, handleEditMode, cancelEditMode, SubmitForm, deleteReservation }: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ReservationList 
        reservations={reservations} 
        selectReservation={selectReservation}
        deleteReservation={deleteReservation}
        />
      </Grid2>
      <Grid2 size={5}>
        {selectedReservation && !editMode &&
        <ReservationDetail 
        reservation={selectedReservation}
        cancelReservation={cancelReservation}
        handleEditMode={handleEditMode} />}

        {editMode && 
        <ReservationForm 
        cancelEditMode={cancelEditMode} 
        reservation={selectedReservation}
        SubmitForm={SubmitForm}/>}
      </Grid2>
    </Grid2>
  )
}
