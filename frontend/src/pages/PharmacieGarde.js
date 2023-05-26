import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import ListPharmacieGarde from "./PharmacyGarde/ListPharmacyGarde";

export default function PharmacieGarde() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ListPharmacieGarde />
        </Box>
      </Box>
    </>
  );
}
