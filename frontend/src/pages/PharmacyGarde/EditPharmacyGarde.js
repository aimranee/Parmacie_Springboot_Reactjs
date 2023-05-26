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

export default function EditPharmacyGarde({ fid, closeEvent }) {
  useEffect(() => {
    setPharmacie(fid.pharmacie);
    setGarde(fid.garde);
  }, []);

  const [pharmacie, setPharmacie] = useState([]);
  const [garde, setGarde] = useState([]);
  const [selectedDateD, setSelectedDateD] = useState(null);
  const [selectedDateF, setSelectedDateF] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put("/api/pharmacieGarde/update", {
        pk: {
          pharmacie: 16,
          garde: 2,
          date_debut: "2023-05-01",
        },
        pharmacie: {
          id: 16,
        },
        garde: {
          id: 1,
        },
        date_fin: "2023-10-10",
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

  const handleGardeChange = (event) => {
    // setGarde(event.target.value);
  };

  const handlePharmacieChange = (event) => {
    // setPharmacie(event.target.value);
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Ajouter Pharmacie de Garde
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
            value={pharmacie && pharmacie.nom}
            onChange={handlePharmacieChange}
            sx={{ minWidth: "100%" }}
          >
            {fid.pharmacies.map((pharmacie) => (
              <MenuItem key={pharmacie.id} value={pharmacie.id}>
                {pharmacie.nom}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Garde"
            select
            variant="outlined"
            size="small"
            value={fid.garde }
            onChange={handleGardeChange}
            sx={{ minWidth: "100%" }}
          >
            {fid.gardes.map((garde) => (
              <MenuItem key={garde.id} value={garde.id}>
                {garde.nom}
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
