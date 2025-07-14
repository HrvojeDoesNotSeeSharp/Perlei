import { useState } from "react";
import { serv } from "../lib/utils/services";
import { Button } from "@mui/material";

interface ReservationNew {
    id: string
    name: string
    service: string[]
    dateOfReservation: string
    email: string
    phone: string
    note: string
  }

type Props = {
    toggleSteps: () => void
    reservation: ReservationNew | undefined
    setReservation: (reservation:ReservationNew) => void
}

interface Service {
    name: string;
    price: number;
}

export default function CheckboxText({ toggleSteps, reservation, setReservation }: Props) {

    const services:Service[] = serv as Service[];
    const [checkedState, setCheckedState] = useState<boolean[]>(
        new Array(services.length).fill(false));
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [total, setTotal] = useState<number>(0);

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
    }

    const addServices = (a:Service[]) =>{
        a.forEach((a)=>{
            reservation?.service.fill(a.name)
        });
        console.log(reservation);
    }

    return (
        <div>
            <ul>
                {services.map(({ name, price }, index: number) => {
                    return (
                        <li key={index}>
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            <div>{price}</div>
                        </li>
                    );
                })}
            </ul>
            <Button onClick= {() => {toggleSteps();addServices(selectedServices)}}>Iduci korak</Button>
        </div>
    )
}