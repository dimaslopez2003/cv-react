import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import certificates from "../data/certificates";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const groupedCertificates = certificates.reduce((acc, certificate) => {
  if (!acc[certificate.issuer]) {
    acc[certificate.issuer] = [];
  }
  acc[certificate.issuer].push(certificate);
  return acc;
}, {} as { [key: string]: typeof certificates });

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Certificates: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {Object.keys(groupedCertificates).map((issuer) => (
          <Grid item xs={12} md={4} key={issuer}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {issuer}
            </Typography>
            <Demo>
              <List>
                {groupedCertificates[issuer].map((certificate) => (
                  <ListItem key={certificate.id}>
                    <ListItemAvatar>
                      <Avatar src={certificate.logo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={certificate.title}
                      secondary={certificate.issuer}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default Certificates;
