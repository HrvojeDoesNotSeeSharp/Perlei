import { Button, Container, Grid2, Link } from '@mui/material'

export default function LandingPage() {
    return (
        <Grid2 id="landing" size={12} maxWidth={'xl'} sx={{position:'relative'}}> 
        <Container maxWidth={'xl'}
            sx={{
                mt: "2%",
                flexGrow: 1,
                backgroundImage: 'radial-gradient(farthest-side, rgba(255, 255, 255, 0.1) 50%, rgb(255, 255, 255, 0.85)), url("/images/ofis1.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center center',
                height: { xs: '25vh', md: '50vh' },
                borderRadius: '10px',
            }} >
            <Link href="#reservation">
            <Button sx={{
                opacity:1.0,
                backgroundColor: 'rgba(214, 214, 207, 0.7)',
                color: 'rgb(68, 67, 66)',
                borderColor: 'rgba(205, 152, 123, 0.8)',
                borderStyle: 'solid',
                borderWidth: '5px',
                boxShadow: '2px 2px rgb(68, 67, 66)',
                textShadow: '1px 1px #888888',
                borderRadius: 5,
                padding: "18px 36px",
                fontSize: "22px",
                fontFamily: 'cursive',
                top:'40%',
                left:'50%',
                transform: 'translateX(-50%)',
                ':hover': {
                      bgcolor: 'rgba(205, 152, 123, 1)', // theme.palette.primary.main
                      color: 'white'}
                                        
            }}
                variant="outlined">
                REZERVACIJE
            </Button>
            </Link>
        </Container>
        </Grid2>
    )
}
