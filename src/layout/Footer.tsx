import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContainer = styled(Box)({
  backgroundColor: "#0F73D8",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  marginTop: "auto",
  position: "relative",
  bottom: 0,
  width: "100%",
});

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
}));
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <SocialMediaIcons>
            <IconButton
              target="_blank"
              href="https://www.facebook.com/arturo.montalvo.3954"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.instagram.com/arturomontalvo2003/"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/dimas-arturo-l%C3%B3pez-montalvo-7701bb285/"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
          </SocialMediaIcons>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Copyright ©2024; By Dimas Arturo Lopez Montalvo with REACT.JS
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
