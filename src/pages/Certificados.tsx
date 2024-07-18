import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import certificates from "../data/certificates";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const generate = (element: React.ReactElement) => {
  return certificates.map((certificate) =>
    React.cloneElement(element, {
      key: certificate.id,
      children: (
        <>
          <ListItemAvatar>
            <Avatar src={certificate.logo} />
          </ListItemAvatar>
          <ListItemText
            primary={certificate.title}
            secondary={certificate.issuer}
          />
        </>
      ),
    })
  );
};

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Certificates: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <Demo>
            <List>
              {generate(
                <ListItem>
                  <ListItemText primary="Certificado genérico" />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          <Demo>
            <List>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Certificates;
