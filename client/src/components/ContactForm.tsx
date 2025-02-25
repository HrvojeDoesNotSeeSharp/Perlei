import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <Container id="reservation" style={{ padding: '20px 0' }}>
      <Typography variant="h4" gutterBottom>
        Rezervacija
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;