import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddVille({ closeEvent }) {
  const [nom, setNom] = useState("");
  async function addData(data) {
    try {
      const response = await axios.post("/api/villes/save", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const createVille = (e) => {
    e.preventDefault();
    const data = {
      nom: nom,
    };

    addData(data)
      .then(() => {
        // Handle success
        Swal.fire({
          title: "Success!",
          text: "Data added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch(() => {
        // Handle error
        Swal.fire({
          title: "Error!",
          text: "Failed to add data.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
    closeEvent();
  };
  const handleNameChange = (event) => {
    setNom(event.target.value);
  };
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Ajouter Ville
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          size="small"
          value={nom}
          onChange={handleNameChange}
          sx={{ minWidth: "100%" }}
        />
      </Grid>
      <Box sx={{ m: 2 }} />

      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button variant="contained" onClick={createVille}>
            Enregistre
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
