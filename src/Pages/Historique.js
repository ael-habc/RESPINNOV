import React from "react";
import Table from "react-bootstrap/Table";

import "./Historique.css";
export default function Historique() {
    const myStyle = {
        
    };
  return (
    <div className="historique">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Num de demande</th>
            <th>ID responsable </th>
            <th>Numéro de série S/N:</th>
            <th>Type de P.R (pièce de rechange)</th>
            <th>Quantité</th>
            <th>Date</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#124578</td>
            <td>1547</td>
            <td>Dôme de clapet anti-retour</td>
            <td>2</td>
            <td>12/12/2020</td>
            <td>En cours</td>
          </tr>
          <tr>
            <td>2</td>
            <td>#124578</td>
            <td>1547</td>
            <td>Dôme de clapet anti-retour</td>
            <td>2</td>
            <td>12/12/2020</td>
            <td >En cours</td>
          </tr>
          <tr>
            <td>3</td>
            <td>#124578</td>
            <td>1547</td>
            <td>Dôme de clapet anti-retour</td>
            <td>2</td>
            <td>12/12/2020</td>
            <td>En cours</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
