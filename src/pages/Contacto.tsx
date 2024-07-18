// Contacto.tsx
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const ContactContainer = styled(Box)({
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#fff",
  color: "#000",
  flexGrow: 1,
  marginBottom: "50px",
});

const ContactForm = styled(Box)({
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
});

const Contacto = () => {
  return (
    <ContactContainer>
      <Header />
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <ContactForm>
        <TextField fullWidth label="Name" margin="normal" variant="outlined" />
        <TextField fullWidth label="Email" margin="normal" variant="outlined" />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </ContactForm>
      <Footer />
    </ContactContainer>
  );
};

export default Contacto;
