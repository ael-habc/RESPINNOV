import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MDBInput } from "mdb-react-ui-kit";
import "./Reclamation.css";

export default function Reclamation() {
  const [reclamation, setReclamation] = useState([]);
  const [idResponsable, setIdResponsable] = useState("");
  const [symptomes, setSymptomes] = useState("");
  const [date, setDate] = useState("");
  const [gravite, setGravite] = useState("");
  const [pieceJointe, setPieceJointe] = useState("");
  const [impact, setImpact] = useState("");

  const hundleSubmit = () => {
    if(!idResponsable || !symptomes || !date || !gravite) {
      alert("Please fill all the fields");
      return;
    }

    const newReclamation = {
      idResponsable,
      symptomes,
      date,
      gravite,
      pieceJointe,
      impact
    }
    setReclamation([...reclamation, newReclamation]);
    setIdResponsable("");
    setSymptomes("");
    setDate("");
    setGravite("");
    setPieceJointe("");
    setImpact("");
    newReclamation.idResponsable = "";
    newReclamation.symptomes = "";
    newReclamation.date = "";
    newReclamation.gravite = "";
    newReclamation.pieceJointe = "";
    newReclamation.impact = "";
    console.log(reclamation);

  };

  return (
    <div className="form">
      <label htmlFor="exampleFormControlTextarea1" className="form-label" >
        ID responsable
      </label>
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example3"
        placeholder="ID responsable"
        value={idResponsable}
        onChange={(e) => setIdResponsable(e.target.value)}
        required
      />
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Symptomes Observes
      </label>
      <select
        className="form-select"
        aria-label="Symptomes Observes"
        value={symptomes}
        onChange={(e) => setSymptomes(e.target.value)}
        required
      >
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
      <label htmlFor="basic-url" className="form-label">
        Your vanity URL
      </label>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Niveau gravites
      </label>
      <select className="form-select" aria-label="Niveau gravites" required value={gravite} onChange={(e)=>setGravite(e.target.value)}>
        <option value="1">Mineur</option>
        <option value="2">Modéré</option>
        <option value="4">Majeur</option>
        <option value="3">Critique</option>
      </select>
      <br />
      <label htmlFor="basic-url" className="form-label">
        piece jointe (optionnel)
      </label>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={pieceJointe}
          onChange={(e) => setPieceJointe(e.target.value)}
          required

        />
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Impact sur le patient/Actions entreprises (optionnel)"
          id="floatingTextarea"
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea">
          Impact sur le patient/Actions entreprises (optionnel)
        </label>
      </div>
      <br />
      <div className="d-grid gap-3 col-4 mx-auto ">
        <Example />
        <button
          type="submit"
          className="btn btn-success btn-lg"
          onClick={() => hundleSubmit()}
        >
          confirmer
        </button>
      </div>
    </div>
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
