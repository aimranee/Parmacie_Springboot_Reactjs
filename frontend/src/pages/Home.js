import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  const [cards, setRows] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("/api/pharmacies")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredPharmacies = cards.filter((pharmacy) =>
    pharmacy.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}

        <Container sx={{ py: 8 }} maxWidth="md">
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filteredPharmacies.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={card.id}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={`data:image;base64,${card.photo}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nom}
                    </Typography>
                    <Typography>{card.adresse}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        navigate(`/map/${card.id}`);
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

// import {
//   Container,
//   Grid,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   makeStyles,
//   TextField,
// } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 345,
//     marginBottom: theme.spacing(3),
//   },
//   cardMedia: {
//     height: 200,
//   },
// }));

// const Home = () => {
//   const classes = useStyles();
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = () => {
//     axios
//       .get("/api/pharmacies")
//       .then((response) => {
//         setRows(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
//   const filteredPharmacies = rows.filter((pharmacy) =>
//     pharmacy.nom.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container>
//       <TextField
//         label="Search"
//         variant="outlined"
//         fullWidth
//         className={classes.searchField}
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <Grid container spacing={3}>
//         {filteredPharmacies.map((pharmacy) => (
//           <Grid item xs={12} sm={6} md={4} key={pharmacy.id}>
//             <Card className={classes.card}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.cardMedia}
//                   component="img"
//                   image={`data:image;base64,${pharmacy.photo}`}
//                   alt={pharmacy.nom}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {pharmacy.nom}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Adresse : {pharmacy.adresse}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Home;
