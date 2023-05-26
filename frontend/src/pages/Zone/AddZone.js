import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Swal from "sweetalert2";
import axios from "axios";

export default function AddZone({ closeEvent }) {
  const [nom, setNom] = useState("");
  const [villes, setVilles] = useState([]);
  const [ville, setVille] = useState([]);
  const [villeId, setVilleId] = useState("");
  useEffect(() => {
    getVilles();
  }, []);
  async function getVilles() {
    axios
      .get("/api/villes")
      .then((response) => setVilles(response.data))
      .catch((error) => console.error(error));
  }

  async function addData(data) {
    try {
      const response = await axios.post("/api/zones/save", data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const createZone = (e) => {
    e.preventDefault();
    const data = {
      nom: nom,
      ville: {
        id: villeId,
      },
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
  const handleVilleChange = (event) => {
    setVilleId(event.target.value);
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Ajouter Zone
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

      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Ville"
          select
          variant="outlined"
          size="small"
          value={villeId}
          onChange={handleVilleChange}
          sx={{ minWidth: "100%" }}
        >
          {villes.map((ville) => (
            <MenuItem key={ville.id} value={ville.id}>
              {ville.nom}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Box sx={{ m: 2 }} />

      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button variant="contained" onClick={createZone}>
            Enregistre
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
