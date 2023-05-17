import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddPharmacie({ closeEvent }) {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [villes, setVilles] = useState([]);
  const [ville, setVille] = useState([]);
  const [zones, setZones] = useState([]);
  const [zone, setZone] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getVilles();
  }, []);

  async function getVilles() {
    axios
      .get("/api/villes")
      .then((response) => setVilles(response.data))
      .catch((error) => console.error(error));
  }

  async function getZones(v) {
    axios
      .get("/api/zones/ville/" + v)
      .then((response) => setZones(response.data))
      .catch((error) => console.error(error));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("adresse", adresse);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("zone", 1);
    formData.append("image", image);
    // const file = event.target.files[0];
    // formData.append("image", file);
    // const file = event.target.image.files[0];
    // if (file) {
    //   formData.append("image", file);
    // }

    try {
      await axios.post("/api/pharmacies/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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

  const handleNameChange = (event) => {
    setNom(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleVilleChange = (event) => {
    setVille(event.target.value);
    getZones(event.target.value);
  };

  const handleZoneChange = (event) => {
    setZone(event.target.value);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Ajouter Pharmacie
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
            label="Nom"
            variant="outlined"
            size="small"
            value={nom}
            onChange={handleNameChange}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Adresse"
            variant="outlined"
            size="small"
            value={adresse}
            onChange={handleAdresseChange}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Latitude"
            variant="outlined"
            size="small"
            type="number"
            value={latitude}
            onChange={handleLatitudeChange}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Longitude"
            variant="outlined"
            size="small"
            type="number"
            value={longitude}
            onChange={handleLongitudeChange}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Ville"
            select
            variant="outlined"
            size="small"
            value={ville}
            onChange={handleVilleChange}
            sx={{ minWidth: "100%" }}
          >
            {villes.map((ville) => (
              <MenuItem key={ville.id} value={ville.nom}>
                {ville.nom}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Zone"
            select
            variant="outlined"
            size="small"
            value={zone}
            onChange={handleZoneChange}
            sx={{ minWidth: "100%" }}
          >
            {zones.map((zone) => (
              <MenuItem key={zone.id} value={zone.nom}>
                {zone.nom}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Box sx={{ m: 2 }} />
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button variant="contained" component="label">
            Upload Image
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handleImageUpload}
            />
          </Button>
        </Typography>
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
