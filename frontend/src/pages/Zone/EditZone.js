import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditZone({ fid, closeEvent }) {
  useEffect(() => {
    setNom(fid.nom);
    setId(fid.id);
  }, []);

  const [nom, setNom] = useState("");
  const [id, setId] = useState("");

  async function editData(data) {
    try {
      const response = await axios.put("/api/zones/update", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const createZone = (e) => {
    e.preventDefault();
    const data = {
      nom: nom,
      id: id,
    };
    editData(data)
      .then(() => {
        // Handle success
        Swal.fire({
          title: "Success!",
          text: "Data edited successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch(() => {
        // Handle error
        Swal.fire({
          title: "Error!",
          text: "Failed to edited data.",
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
