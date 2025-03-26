import { Card, CardMedia, Container, Grid2, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Usluge() {

    const images = [
        { title: "Nature", src: "https://i.imgur.com/ajzKVO8.jpg" },
        { title: "City", src: "https://i.imgur.com/kZ7jfFN.jpg" },
        { title: "Mountains", src: "https://i.imgur.com/xp1w9pV.jpg" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        accessibility: true,
        //autoplay: true,
        //autoplaySpeed: 3000,
    };

    return (
        <Grid2 spacing={3} container id="about" size={12} maxWidth={'xl'}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: "2%",
                mb: "4%",
                flexDirection: { xs: "column", md: 'row' }
            }}>
            <Grid2 size={12} sx={{ display: "flex" }} maxWidth="xl" offset={{md:1}} textAlign={{xs:"center"}}>
                <Typography variant='h4' sx={{
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                }}>Umjetni nokti i trajni lak</Typography></Grid2>
            <Grid2 size={11} sx={{ display: "flex", flexDirection: { xs: "column", md: 'row' } }}  maxWidth="xl">
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Container>
                        <Slider {...settings}>
                            {images.map((item, index) => (
                                <Card key={index}>
                                    <CardMedia component="img" height="400" image={item.src} alt={item.title} />
                                </Card>
                            ))}
                        </Slider>
                    </Container>

                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: {xs:5, md:1}}} textAlign={"justify"}>
                    <Typography gutterBottom sx={{fontSize: {xs:'16px', md:'22px'}}}>
                        Salon nudi profesionalne usluge od geliranja i korekcije noktiju, trajnog laka, gradivnog trajnog laka, nail arta, ukrašavanja šljokicama, chrome, ugradnje na šablone,
                        babyboomer, dual nail forme, skidanja gela, trajnog laka, popravaka, sve do estetske manikure i njege stopala.
                    </Typography>
                    <Typography gutterBottom sx={{fontSize: {xs:'16px', md:'22px'}}}>
                        Posvećenost kvaliteti i individualiziranoj njezi svakog klijenta i klijentice.
                        Praćenje trendova u nail industriji i intenzivne edukacije kako bi tretman bio sto bolje prilagođen svakom klijentu.
                        Visoka kvaliteta, stalno usavršavanje, prilagođavanje potrebama opisuju salon M-Per-Lei.
                    </Typography>
                </Grid2>
            </Grid2>

        </Grid2>
    );
}