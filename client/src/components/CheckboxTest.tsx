import { useState } from "react";
import { serv } from "../lib/utils/services";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid2, List, ListItem, Typography } from "@mui/material";

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
    toggleSteps: (a:number) => void
    reservation: ReservationNew
    setReservation: (reservation: ReservationNew) => void
}

interface Service {
    name: string;
    price: number;
}

export default function CheckboxText({ toggleSteps, reservation, setReservation }: Props) {

    const services: Service[] = serv as Service[];
    const [checkedState, setCheckedState] = useState<boolean[]>(
        new Array(services.length).fill(false));
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [total, setTotal] = useState<number>(0);

    const [error, setError] = useState(false);

    const handleOnChange = (position: number): void => {
        const updatedCheckedState = checkedState.map((item, index) => {

            return index === position ? !item : item;
        });
        setCheckedState(updatedCheckedState);

        const totalprice = updatedCheckedState.reduce((acc, curr, index) => {
            if (curr === true) {
                return acc + services[index].price;
            }
            return acc;
        }, 0

        );
        setSelectedServices([...selectedServices, { name: services[position].name, price: services[position].price }])
        setTotal(totalprice);
        setError(false);
    }

    const addServices = (a: Service[]) => {
        if (total == 0) {
            setError(true);
            return;
        }


        const newReservation = { ...reservation, service: a.map(r => r.name), totalPrice: total }
        //console.log(newReservation);
        setReservation(newReservation);
        toggleSteps(1);
    }


    return (
        <Container id="reservation" sx={{ boxShadow: 2, padding: '20px 0', backgroundColor: 'rgba(250, 242, 232, 0.7)' }} >
            <Typography align="center" variant="h4" gutterBottom>
                Rezervacija
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(250, 242, 232, 0.7)',
                    borderRadius: 2,
                    border: error ? '2px solid red' : 'none',
                }}
            >
                <Grid2 container spacing={2}>
                    {services.map(({ name, price }, index: number) => (
                        <Grid2 size={{ xs: 12, md: 6 }} key={index}>
                            <List disablePadding>
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        py: 1,
                                        borderBottom: '2px solid #eee',
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                                name={name}
                                                id={`custom-checkbox-${index}`}
                                            />
                                        }
                                        label={
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {name}
                                            </Typography>
                                        }
                                        sx={{ marginLeft: 0 }}
                                    />

                                    <Typography variant="body2" color="text.secondary">
                                        ${price}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
            {error && (
                <Typography color="error" sx={{ mt: 2, textAlign: 'center'}}>
                    Molimo odaberite barem jednu uslugu.
                </Typography>
            )}

            <Button variant="contained" color="primary" sx={{ left: { xs: '35%', md: '40%', marginTop:'2%' }, width: { xs: '30%', md: '20%' } }}
                onClick={() => { addServices(selectedServices) }}>Iduci korak</Button>
        </Container>
    )
}