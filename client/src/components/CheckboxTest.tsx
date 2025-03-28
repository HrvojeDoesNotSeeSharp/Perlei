import { useState } from "react";
import { services } from "../lib/utils/services";

export default function CheckboxText() {
    const [checkedState, setCheckedState] = useState<boolean[]>(
        new Array(services.length).fill(false));
    const [total, setTotal] = useState<number>(0);

    const handleOnChange = (position: number): void => {
        const updatedCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item;
        });
        setCheckedState(updatedCheckedState);
    }

    return (
        <div>
            <ul>
                {services.map(({ name, price }, index:number) => {
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
        </div>
    )
}