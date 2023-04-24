import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import Modal from "react-bootstrap/Modal";
import ReactModal from "react-modal";

// Modal.setAppElement("#root");
const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(async () => {
    await axios.get("/api/villes").then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      await axios.delete(`/api/villes/delete/${id}`).then(() => {
        setCities(cities.filter((city) => city.id !== id));
      });
    }
  };

  // const handleOpenModal = () => {
  //   //setSelectedZone(zone);
  //   setModalIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   //setSelectedZone(null);
  //   setModalIsOpen(false);
  // };

  //   const handleEdit = (id) => {
  //     const newName = window.prompt("Enter the new name for this city:");
  //     if (newName) {
  //       axios.put(`/api/cities/${id}`, { name: newName }).then(() => {
  //         setCities(
  //           cities.map((city) => {
  //             if (city.id === id) {
  //               return { ...city, name: newName };
  //             }
  //             return city;
  //           })
  //         );
  //       });
  //     }
  //   };
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        id="small-dialog"
        className="zoom-anim-dialog mfp-hide dialog-with-tabs"
      >
        <div className="sign-in-form">
          <ul className="popup-tabs-nav">
            <li>
              <a
                href="#tab"
                // onClick={() => props.setIsOpen(false)}
              >
                Apply Now
              </a>
            </li>
          </ul>
          <div className="popup-tabs-container">
            <div className="popup-tab-content" id="tab">
              <div className="welcome-text">
                <h3>Attach File With CV</h3>
              </div>
              <form method="post" id="apply-now-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-account-circle" />
                  <input
                    type="text"
                    className="input-text with-border"
                    name="name"
                    id="name"
                    placeholder="First and Last Name"
                    required=""
                  />
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline" />
                  <input
                    type="text"
                    className="input-text with-border"
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="uploadButton">
                  <input
                    className="uploadButton-input"
                    type="file"
                    accept="image/*, application/pdf"
                    id="upload-cv"
                  />
                  <label
                    className="uploadButton-button ripple-effect"
                    htmlFor="upload-cv"
                  >
                    Select File
                  </label>
                  <span className="uploadButton-file-name">
                    Upload your CV / resume relevant file. <br /> Max. file
                    size: 50 MB.
                  </span>
                </div>
              </form>
              <button
                // onClick={() => props.setIsOpen(false)}
                className="button margin-top-35 full-width button-sliding-icon ripple-effect"
                type="submit"
                form="apply-now-form"
              >
                Apply Now
                <i className="icon-material-outline-arrow-right-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="col-xl-12 col-md-12">
          <div className="row">
            <div className="col-xl-9">
              <h2>List villes</h2>
            </div>

            <a
              onClick={toggleModal}
              href="villes"
              className="apply-now-button popup-with-zoom-anim"
            >
              Apply Now
              <i className="icon-material-outline-arrow-right-alt" />
            </a>
          </div>
          <table className="basic-table">
            <tr>
              <th>ID</th>
              <th>Ville</th>
              <th>Action</th>
            </tr>
            {cities.map((city) => (
              <tr key={city.id}>
                <td data-label="Column 1">{city.id}</td>
                <td data-label="Column 2">{city.nom}</td>
                <td data-label="Column 3">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(city.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary ml-2"
                    //   onClick={() => handleEdit(city.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div> */}

      <button className="open" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          
        </Modal> */}
      {/* </div> */}
    </>
  );
};

function TaskModal(props) {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
      contentLabel="Task Modal"
      className="content"
      overlayClassName="overlay"
    ></ReactModal>
  );
}

export default CityList;
