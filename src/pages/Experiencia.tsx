import React from "react";
import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const ExperienceContainer = styled(Box)({
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#fff", // Cambiado a blanco
  color: "#000", // Cambiado a negro
  flexGrow: 1,
  marginBottom: "50px",
});

const ExperienceItem = styled(Paper)({
  padding: "20px",
  margin: "10px 0",
  textAlign: "left",
  position: "relative",
  backgroundColor: "#f5f5f5", // Color de fondo de las tarjetas
  color: "#000", // Color del texto de las tarjetas
  minHeight: "250px", // Altura mínima para las tarjetas
});

const AvatarContainer = styled(Box)({
  position: "absolute",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "10px",
});

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  paddingBottom: "50px",
});

const Experience: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Grid container justifyContent="center" sx={{ padding: "20px 0" }}>
        <Typography variant="h5" gutterBottom>
          Experiencia
        </Typography>
      </Grid>
      <ContentContainer>
        <ExperienceContainer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <ExperienceItem>
                <AvatarContainer>
                  <Avatar src="https://ii.ct-stc.com/2/logos/empresas/2021/03/23/b6a990cbf8a44214bc52182613404thumbnail.JPG" />
                  <Avatar src="https://media.licdn.com/dms/image/D560BAQGOfYOwZUzDyg/company-logo_200_200/0/1683828249675?e=2147483647&v=beta&t=3l1SU-2ztA6vj9niL-_BcPB-oZIV-Gz7dIXxdyBQbwM" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    SISTEMAS
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "0.9rem" }}>
                    INSTITUTO CESARE - CORPORATIVO GRUPO MAGNO
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *AGOSTO 2023 - ACTUALIDAD
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Soporte técnivo de nivel 1 a nivel 4
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Cámaras de seguridad IP y Analógicas
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Redes y Telecomunicaciones
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Mantenimiento preventivo y correctivo a equipos
                    tecnológicos
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    <p>
                      DESEMPEÑO MIS SERVICIOS COMO PROFESIONISTA DE TECNOLOGÍAS
                      DE LA INFORMACIÓN PARA EL COLEGIO COMO PARA EL CORPORATIVO
                      GRUPO MAGNO
                    </p>
                  </Typography>
                </Box>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <ExperienceItem>
                <AvatarContainer>
                  <Avatar
                    alt="Junior Developer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIhY5ZPkUe8bVPHkAdspLqKidO_2GhLI9_A&s"
                  />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    AUXILIAR DE SISTEMAS
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "0.9rem" }}>
                    EL DORADO ROYALE
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    MAYO - AGOSTO 2023
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Soporte técnico nivel 1
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Desarrollo web con framework LARAVEL
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Atención de llamadas teléfonicas y tickets
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    <p>CONTRATO DE PRÁCTICAS</p>
                  </Typography>
                </Box>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <ExperienceItem>
                <AvatarContainer>
                  <Avatar
                    alt="Junior Developer"
                    src="https://scontent.fcjs3-1.fna.fbcdn.net/v/t1.6435-9/117039480_157639029322517_5852190968113839098_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2Nj6TLW82B8SELZztvY5qIy0UZDFgR3AjLRRkMWBHcBp4dEkX4zmnHRv-mBLzQVXWhFAq6euPqwFWjdRgl652&_nc_ohc=s7FuFcK1l5cQ7kNvgHehTxe&_nc_ht=scontent.fcjs3-1.fna&oh=00_AYAyNBcR5TuPrT0p3SDTV5oDV1JS8XdvT7IEgtl-ZuOLYg&oe=66CB9775"
                  />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    INSTALADOR TÉCNICO
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "0.9rem" }}>
                    PUNTO WIFI CANCÚN
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    SEPTIEMBRE 2020 - MARZO 2021
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Instalación de servicio de internet
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Manejo de equipos de red y configuración de las mismas
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    *Soporte al cliente
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    <p>JORNADA PARCIAL </p>
                  </Typography>
                </Box>
              </ExperienceItem>
            </Grid>
          </Grid>
        </ExperienceContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Experience;
