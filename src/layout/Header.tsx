import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Divider,
  ListItem,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import ReactLogo from "../components/ReactLogo"; // Importa el nuevo componente

const data = [
  { icon: <SchoolIcon />, label: "Educacion", path: "/Educacion" },
  { icon: <WorkIcon />, label: "Experiencia", path: "/Experiencia" },
  { icon: <BuildIcon />, label: "Skills", path: "/Skills" },
  { icon: <VerifiedIcon />, label: "Certificados", path: "/Certificados" },
  { icon: <ContactMailIcon />, label: "Contacto", path: "/Contacto" },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#0F73D8", color: "#fff" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Deja este espacio vacío si no quieres un título aquí */}
          </Typography>
          <IconButton component={Link} to="/" color="inherit">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: "dark",
                primary: { main: "rgb(102, 157, 246)" },
                background: { paper: "rgb(5, 30, 52)" },
              },
            })}
          >
            <Paper elevation={0} sx={{ width: "100%", height: "100vh" }}>
              <ListItemButton component="a" href="#">
                <ListItemIcon sx={{ fontSize: 20 }}>
                  <ReactLogo />
                </ListItemIcon>
                <ListItemText
                  sx={{ my: 0 }}
                  primary="Menu"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
              <Divider />
              <ListItem component="div" disablePadding>
                <ListItemButton component={Link} to="/" sx={{ height: 56 }}>
                  <ListItemIcon>
                    <HomeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <Box
                sx={{
                  bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: open ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Sobre Mi..."
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                    }}
                    secondary="Educacion, Experiencia, Skills, Certificados, Contacto"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: open ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {open &&
                  data.map((item) => (
                    <ListItemButton
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: "rgba(255,255,255,.8)",
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
            </Paper>
          </ThemeProvider>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
