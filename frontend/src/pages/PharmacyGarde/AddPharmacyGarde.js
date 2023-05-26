import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import axios from "axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function AddPharmacieGarde({ closeEvent }) {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [pharmacie, setPharmacie] = useState("");
  const [pharmacies, setPharmacies] = useState([]);
  const [gardes, setGardes] = useState([]);
  const [garde, setGarde] = useState("");
  const [selectedDateD, setSelectedDateD] = useState(null);
  const [selectedDateF, setSelectedDateF] = useState(null);

  useEffect(() => {
    getPharmacies();
    getGardes();
  }, []);

  async function getPharmacies() {
    axios
      .get("/api/pharmacies")
      .then((response) => setPharmacies(response.data))
      .catch((error) => console.error(error));
  }

  async function getGardes() {
    axios
      .get("/api/gardes")
      .then((response) => setGardes(response.data))
      .catch((error) => console.error(error));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/pharmacieGarde/save", {
        pk: {
          pharmacie: pharmacie,
          garde: garde,
          date_debut: selectedDateD,
        },
        pharmacie: {
          id: pharmacie,
        },
        garde: {
          id: garde,
        },
        date_fin: selectedDateF,
      });
      Swal.fire({
        title: "Success!",
        text: "Data added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      closeEvent();
      // Handle success
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add data.",
        icon: "error",
        confirmButtonText: "OK",
      });
      closeEvent();
      // Handle error
    }
  };

  const handleDateDChange = (date) => {
    setSelectedDateD(date);
  };

  const handleDateFChange = (date) => {
    setSelectedDateF(date);
  };

  const handleNameChange = (event) => {
    setNom(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };

  const handleGardeChange = (event) => {
    setGarde(event.target.value);
  };

  const handlePharmacieChange = (event) => {
    setPharmacie(event.target.value);
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Ajouter PharmacieGarde
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Pharmacie"
            select
            variant="outlined"
            size="small"
            value={pharmacie}
            onChange={handlePharmacieChange}
            sx={{ minWidth: "100%" }}
          >
            {pharmacies.map((pharmacie) => (
              <MenuItem key={pharmacie.id} value={pharmacie.id}>
                {pharmacie.nom}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Type"
            select
            variant="outlined"
            size="small"
            value={garde}
            onChange={handleGardeChange}
            sx={{ minWidth: "100%" }}
          >
            {gardes.map((garde) => (
              <MenuItem key={garde.id} value={garde.id}>
                {garde.type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DatePicker
                label="Select date debut"
                value={selectedDateD}
                onChange={handleDateDChange}
                inputFormat="yyyy-MM-dd"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DatePicker
                label="Select date fin"
                value={selectedDateF}
                onChange={handleDateFChange}
                inputFormat="yyyy-MM-dd"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Box sx={{ m: 2 }} />
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Enregistre
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
