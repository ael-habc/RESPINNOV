import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Reclamation.css";
import { NavLink } from "react-router-dom";

export default function Reclamation() {
  return (
    <form className="form">
      <label for="exampleFormControlTextarea1" class="form-label">
        ID responsable
      </label>
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example3"
        placeholder="ID responsable"
        required
      />
      <label for="exampleFormControlTextarea1" class="form-label">
        Symptomes Observes
      </label>
      <select class="form-select" aria-label="Symptomes Observes" required>
        <option value="1">Arrêt soudain du fonctionnement</option>
        <option value="2">Problèmes d&#39;alimentation électrique</option>
        <option>Alarmes fréquentes</option>
        <option>Bruits ou vibrations inhabituels</option>
        <option>Écrans d'affichage défectueux ou illisibles</option>
        <option>Fuites d'air ou de gaz</option>
        <option>Problèmes de réglage des paramètres</option>
        <option>Problèmes de ventilation</option>
        <option>Problèmes de contrôle de pression</option>
      </select>
      <br />
      <label for="basic-url" class="form-label">
        Your vanity URL
      </label>
      <div class="input-group mb-3">
        <input
          type="date"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          required
        />
      </div>
      <label for="exampleFormControlTextarea1" class="form-label">
        Niveau gravites
      </label>
      <select class="form-select" aria-label="Niveau gravites" required>
        <option value="1">Mineur</option>
        <option value="2">Modéré</option>
        <option value="4">Majeur</option>
        <option value="3">Critique</option>
      </select>
      <br />
      <label for="basic-url" class="form-label">
        piece jointe (optionnel)
      </label>
      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          required
        />
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Impact sur le patient/Actions entreprises (optionnel)"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">
          Impact sur le patient/Actions entreprises (optionnel)
        </label>
      </div>
      <br />
      <div class="d-grid gap-3 col-4 mx-auto ">
        <Example />
        <button type="submit" class="btn btn-success btn-lg">
          confirmer
        </button>
      </div>
    </form>
  );
}

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" className="btn-lg" onClick={handleShow}>
        Historique
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.fullDiscription}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
