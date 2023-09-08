import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../images/logo.svg";
import "./Login.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    if (Cookies.get("login")) {
      window.location.href = "/";
    }
  }, []);

  const medcin = {
    nom: "medcin",
    password: "medcin",
  };

  const bio = {
    nom: "bio",
    password: "bio",
  };

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  
  const hundleLogin = () => {
    if (nom === medcin.nom && password === medcin.password) {
      Cookies.set("login", "medcin");
      window.location.href = "/";
    } else if (nom === bio.nom && password === bio.password) {
      Cookies.set("login", "bio");
      window.location.href = "/";
    } else {
      alert("nom ou mot de passe incorrect");
    }
  };
  
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <img src={logo} alt="logo" id="logoLogin" />

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">RESPINNOV</h1>

          <p
            className="px-3"
            style={{ color: "hsl(217, 10%, 60%)" }}
            id="titleLogin"
          >
            Un souffle d'excellence technologique pour une éxperience de
            respirateur d'anesthésie repensée
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Login"
                id="form1"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="btn btn-primary"
                onClick={hundleLogin}
              >
                Log in
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
