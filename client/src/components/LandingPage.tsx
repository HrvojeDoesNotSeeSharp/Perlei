import { Button, Grid2 } from '@mui/material'

export default function LandingPage() {
    return (
        <Grid2 id="landing" size={12} maxWidth={'xl'}
            sx={{
                mt: "2%",
                flexGrow: 1,
                //backgroundImage: "url('/images/nailRoom.jpg')",
                backgroundImage: 'radial-gradient(farthest-side, rgba(255, 255, 255, 0.1) 50%, rgb(255, 255, 255, 0.85)), url("/images/hm.avif")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center center',
                height: { xs: '25vh', md: '50vh' },
                borderRadius: '10px',
            }} >
            <Button sx={{
                opacity:1.0,
                backgroundColor: 'rgba(205, 152, 123, 0.7)',
                color: 'rgb(142, 93, 55)',
                borderColor: 'rgba(205, 152, 123, 0.8)',
                borderStyle: 'solid',
                borderWidth: '5px',
                boxShadow: '2px 2px rgb(142, 93, 55)',
                textShadow: '1px 1px #888888',
                borderRadius: 5,
                padding: "18px 36px",
                fontSize: "22px",
                fontFamily: 'cursive',
                top:'50%',
                left:'50%',
                ':hover': {
                      bgcolor: 'rgba(205, 152, 123, 1)', // theme.palette.primary.main
                      color: 'white'}
                                        
            }}
                variant="outlined">
                REZERVACIJE
            </Button>
        </Grid2>
    )
}
