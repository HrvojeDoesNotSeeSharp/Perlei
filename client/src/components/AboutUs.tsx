import React from 'react';
import { Grid2, List, ListItem, Paper, Typography } from '@mui/material';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import GoogleMap from './GoogleMap';

const AboutUs: React.FC = () => {
  return (
    <Grid2 container id="about" size={12} maxWidth={'xl'}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt: "2%",
        flexDirection: { xs: "column", md: 'row' }
      }}>
      <Grid2 size={{ xs: 12, md: 6 }} padding={'20px'} >
        <Paper elevation={1} sx={{
          backgroundColor: '	#F0F0F0',
          paddingTop: 2,
          paddingBottom: 2
        }}>
            <List >
              <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body1'}><WorkIcon></WorkIcon>&nbsp;Salon:</Typography><Typography pr={'1%'} variant={'body1'}>M Per Lei</Typography>
              </ListItem>
              <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body1'}><BusinessIcon></BusinessIcon>&nbsp;Adresa:  </Typography><Typography pr={'1%'} variant={'body1'}>Grabova 16, Split</Typography>
              </ListItem>
              <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body1'}><SmartphoneIcon></SmartphoneIcon>&nbsp;Mobitel:</Typography><Typography pr={'1%'} variant={'body1'}>099 680 7878</Typography>
              </ListItem>
              <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body1'}><EmailIcon></EmailIcon>&nbsp;Email:</Typography><Typography pr={'1%'} variant={'body1'}>test@test.com</Typography>
              </ListItem>
              <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body1'}><PunchClockIcon></PunchClockIcon>&nbsp;Radno Vrijeme:</Typography><Typography pr={'1%'} variant={'body1'}>09:00-17:00</Typography>
              </ListItem>
            </List>
        </Paper>

      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} padding={'20px'}>
        <Paper elevation={3}>
          <GoogleMap />
        </Paper>

      </Grid2>
    </Grid2>
  );
};

export default AboutUs;