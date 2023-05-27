import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Box, Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";
import AddPharmacie from "./AddPharmacie";
import EditPharmacie from "./EditPharmacie";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ListPharmacie() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

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
  const reloadData = () => {
    axios
      .get("/api/pharmacies")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editData = (id, nom, adresse, latitude, longitude, photo, zone) => {
    const data = {
      id: id,
      nom: nom,
      adresse: adresse,
      latitude: latitude,
      longitude: longitude,
      photo: photo,
      zone: zone,
    };
    setFormid(data);
    handleEditOpen();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/pharmacies/delete/${id}`)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        reloadData();
      }
    });
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddPharmacie closeEvent={handleClose} onClick={reloadData} />
          </Box>
        </Modal>
        <Modal
          open={editopen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditPharmacie
              closeEvent={handleEditClose}
              onClick={reloadData}
              fid={formid}
            />
          </Box>
        </Modal>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box height={10} />
        <Stack direction={"row"} spacing={2} className="my-2 mb-2">
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Ajouter
          </Button>
        </Stack>
        <Box height={10} />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: "70px" }}>
                  Id
                </TableCell>
                <TableCell align="left" style={{ minWidth: "60px" }}>
                  Image
                </TableCell>
                <TableCell align="left" style={{ minWidth: "60px" }}>
                  Adresse
                </TableCell>
                <TableCell align="left" style={{ minWidth: "60px" }}>
                  Latitude
                </TableCell>
                <TableCell align="left" style={{ minWidth: "60px" }}>
                  Longitude
                </TableCell>
                <TableCell align="left" style={{ minWidth: "60px" }}>
                  Nom
                </TableCell>
                <TableCell align="left" style={{ minWidth: "30px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell key={row.id} align="left">
                      {row.id}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      <img
                        src={`data:image;base64,${row.photo}`}
                        alt="Image"
                        style={{ maxWidth: "70px" }}
                      />
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.adresse}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.latitude}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.longitude}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      {row.nom}
                    </TableCell>
                    <TableCell key={row.id} align="left">
                      <Stack spacing={2} direction={"row"}>
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="cursor-pointer"
                          onClick={() => {
                            editData(
                              row.id,
                              row.nom,
                              row.adresse,
                              row.latitude,
                              row.longitude,
                              row.photo,
                              row.zone
                            );
                          }}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleDelete(row.id);
                          }}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          // page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
