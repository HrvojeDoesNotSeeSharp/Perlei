import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function RezUsluge() {

    return (
        <>
            <FormGroup>
                
                <FormControlLabel control={<Checkbox />} label="Trajni Lak" />
                <FormControlLabel control={<Checkbox />} label="Gradivni trajni lak S" />
                <FormControlLabel control={<Checkbox />} label="Gradivni trajni lak M" />
                <FormControlLabel control={<Checkbox />} label="Gradivni trajni lak L" />
                <FormControlLabel control={<Checkbox />} label="Gel na prirodne nokte" />
                <FormControlLabel control={<Checkbox />} label="Ugradnja na šablone S" />
                <FormControlLabel control={<Checkbox />} label="Ugradnja na šablone M" />
                <FormControlLabel control={<Checkbox />} label="Ugradnja na šablone L" />

                <FormControlLabel control={<Checkbox />} label="Korekcija gel S" />
                <FormControlLabel control={<Checkbox />} label="Korekcija gel M" />
                <FormControlLabel control={<Checkbox />} label="Korekcija gel L" />

                <FormControlLabel control={<Checkbox />} label="Skidanje trajnog laka" />
                <FormControlLabel control={<Checkbox />} label="Popravak nokta" />
                <FormControlLabel control={<Checkbox />} label="Korekcija tuđeg rada (1 kom)" />
                <FormControlLabel control={<Checkbox />} label="Skidanje tuđeg rada" />
                <FormControlLabel control={<Checkbox />} label="Comby manikura" />
                <FormControlLabel control={<Checkbox />} label="Manikura" />
                <FormControlLabel control={<Checkbox />} label="Trajni lak noge" />

            </FormGroup>
        </>
    )
}