import { Box } from "@mui/system";
import {
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    DatePicker as MuiDatePicker,
    type DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import  { type Dayjs } from "dayjs";
import { type ForwardedRef} from "react";
import { forwardRef } from "react";


export interface DatePickerProps {
    muiDatePickerProps?: Omit<MuiDatePickerProps<Dayjs, false>, "label" | "value">;
}

const DatePicker = forwardRef((props: DatePickerProps, reference: ForwardedRef<typeof Box>) => {
    const {
        muiDatePickerProps,
    } = props;

    return (
        <Box ref={reference}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiDatePicker
                    {...muiDatePickerProps}
                />
            </LocalizationProvider>
        </Box>
    );
});

DatePicker.displayName = "DatePicker";

export default DatePicker;