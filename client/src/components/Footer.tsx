import React from "react";
import { Box, Container, Typography, IconButton, Grid2 } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Grid2
        id="footer" position="static" size={12}
      component="footer"
      sx={{
        backgroundImage: 'linear-gradient(.25turn, #8d5c35, 40%, #F3BDA5)', top:'0%',
        color: "white",
        py: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">© 2025 M_Per_Lei</Typography>
        <Box mt={1}>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/m_per_lei_/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </Grid2>
  );
};

export default Footer;
