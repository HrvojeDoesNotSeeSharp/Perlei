import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

type Props<T extends FieldValues> = {} & UseControllerProps<T>  & DateTimePickerProps<Date>

export default function DateTimeInput<T extends FieldValues>(props: Props<T>){
    const {field, fieldState} = useController({...props});

    const disableWeekends = (date: Date) => {
        //console.log(date)
        //date.getDate()
        const newDate = dayjs(date)
        return newDate.get('day') === 0 || newDate.get('day') === 6;
      };
    
    const nineAM = dayjs().set('hour', 9).startOf('hour');
    const fivePM = dayjs().set('hour', 17).startOf('hour');
    
    const today = dayjs().get('day') === 0 ?
    dayjs().add(1, 'day').set('hour', 9).startOf('hour') :
    dayjs().get('day') === 6 ?
    dayjs().add(1, 'day').set('hour', 9).startOf('hour') :
    dayjs();
    
    const today7 = dayjs().get('day') === 0 ?
    dayjs().add(8, 'day').set('hour', 9).startOf('hour') :
    dayjs().get('day') === 6 ?
    dayjs().add(8, 'day').set('hour', 9).startOf('hour') :
    dayjs().add(8, 'day');
    
    //const defaultDateTime = dayjs().add(1, 'day').set('hour', 9).startOf('hour');

    return (
        <DateTimePicker
            {...props}
            value={field.value ? new Date(field.value) : null}
            onChange={(value=>{
                field.onChange(new Date(value!))
            })}
            shouldDisableDate={disableWeekends}
            minDate={today.toDate()}
            maxDate={today7.toDate()}
            minTime={nineAM.toDate()}
            maxTime={fivePM.toDate()}
            sx={{widht: '100%'}}
            slotProps={{
                textField: {
                    onBlur: field.onBlur,
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message
                }
            }}

        />

    )
}  