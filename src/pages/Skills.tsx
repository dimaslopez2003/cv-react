import React from "react";
import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import SliderSkills from "../components/SliderSkills"; // Asegúrate de que la ruta es correcta

const SkillsContainer = styled(Box)({
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#fff",
  color: "#000",
  flexGrow: 1,
  marginBottom: "50px",
});

const SkillItem = styled(Paper)({
  padding: "20px",
  margin: "10px 0",
  textAlign: "left",
  position: "relative",
  backgroundColor: "#f5f5f5",
  color: "#000",
  minHeight: "300px",
});

const AvatarContainer = styled(Box)({
  position: "absolute",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
});

const StyledAvatar = styled(Avatar)({
  width: "50px",
  height: "50px",
  margin: "5px",
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

const Skills: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Grid container justifyContent="center" sx={{ padding: "20px 0" }}>
        <Typography variant="h5" gutterBottom>
          Habilidades
        </Typography>
      </Grid>
      <ContentContainer>
        <SkillsContainer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <SkillItem>
                <AvatarContainer>
                  <StyledAvatar src="https://icorp.com.mx/wp-content/uploads/2015/05/Enlaces-telecomunicaciones-y-redes-scaled.webp" />
                  <StyledAvatar src="https://i0.wp.com/appix.mx/wp-content/uploads/2022/08/image-6.png?resize=482%2C296&ssl=1" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    SISTEMAS
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    Experiencia en mantenimiento preventivo y correctivo a
                    equipos de computo, instalación de software y hardware,
                    configuración de redes, soporte técnico a usuarios, manejo
                    de sistemas operativos Windows, Linux y Mac OS, sistemas
                    audiovisuales y cámaras de seguridad.
                  </Typography>
                </Box>
                <SliderSkills />
              </SkillItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillItem>
                <AvatarContainer>
                  <StyledAvatar src="https://peopleworks.com.do/wp-content/uploads/2023/11/azure-sql-database6354.jpg" />
                  <StyledAvatar src="https://aspnetcoremaster.com/img/csharp.webp" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    Desarrollo Back-End
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    Conocimientos en bases de datos SQL, manejo de API con .NET
                    y C# y Conocimientos basicos de bases de datos no
                    relacionales con MongoDB y FireBase.
                  </Typography>
                </Box>
                <SliderSkills />
              </SkillItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillItem>
                <AvatarContainer>
                  <StyledAvatar src="https://cdn.worldvectorlogo.com/logos/react-1.svg" />
                  <StyledAvatar src="https://cdn-icons-png.flaticon.com/512/919/919832.png" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    Desarrollo Front-End
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    Conocimientos en HTML, CSS, Typescrip, React y React Native.
                  </Typography>
                </Box>
                <SliderSkills />
              </SkillItem>
            </Grid>
          </Grid>
        </SkillsContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Skills;
