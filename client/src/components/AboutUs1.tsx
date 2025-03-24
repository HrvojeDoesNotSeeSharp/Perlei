import React from 'react';
import { Card, CardActionArea, CardContent, Grid2, Stack, Typography } from '@mui/material';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';




const AboutUs: React.FC = () => {
  return (
    <Grid2 container id="about" size={12} maxWidth={'xl'}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt: {xs:"6%", md:"3%"},
        mb: {xs:"6%", md:"4%"},
        flexDirection: { xs: "column", md: 'row' }
      }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{xs:5, md:20}}>
        <Card sx={{
          borderStyle: 'solid', borderWidth: 'thin', borderColor: '#E0E0E0',transition: 'transform .3s ease-out',
          ':hover': {
            transform: 'translate(0, -5px)',
            borderColor: 'black',
            boxShadow: 6
          }
        }}>
          <CardActionArea
            href="tel:00385996807878"
            sx={{ padding: 2, display: 'inline-flex' }}>
            <CardContent>
              <PhoneInTalkTwoToneIcon sx={{ width: 60, height: 60 }} />
            </CardContent>
            <CardContent>
              <Typography>TELEFON</Typography>
              <Typography>+385996807878</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{
          borderStyle: 'solid', borderWidth: 'thin', borderColor: '#E0E0E0', transition: 'transform .3s ease-out',
          ':hover': {
            transform: 'translate(0, -5px)',
            borderColor: 'black',
            boxShadow: 6
          }
        }}>
          <CardActionArea
            href="https://www.google.com/maps/dir/43.5060392,16.4994892/Janjevska+ul.+23,+21000,+Split"
            sx={{ padding: 2, display: 'inline-flex' }}>
            <CardContent>
              <LocationOnOutlinedIcon sx={{ width: 60, height: 60 }} />
            </CardContent>
            <CardContent>
              <Typography>LOKACIJA</Typography>
              <Typography>Janjevska 23, Split</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Grid2>
  );
};

export default AboutUs;