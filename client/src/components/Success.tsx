import { Button, Container, Typography } from '@mui/material';

type Props = {
    toggleSteps:(a:number)=>void;
}

export default function Success({toggleSteps}:Props) {
  return (
    <Container id="reservation" sx={{ padding: '20px 0', backgroundColor: 'rgba(250, 242, 232, 0.7)' }} >
      <Typography align="center" variant="h4" gutterBottom>
        Uspjesno ste rezervirali termin!
      </Typography>
      <Button variant="contained" color="primary" sx={{ left: { xs: '35%', md: '40%', marginTop:'2%' }, width: { xs: '30%', md: '20%' } }}
                onClick={() => { toggleSteps(-2) }}>Nova rezervacija</Button>
    </Container>
  )
}