

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function BasicExample({product}) {
  const {name, price, image} = product
  const [fullDiscription, setfullDiscription] = useState("lorem ipsum dolor sit amet cons ffffffffffffffffffffffffffffffffffffffffffffff")
  console.log(fullDiscription);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`${image}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Example name={name} fullDiscription={fullDiscription}/>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;



function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.fullDiscription);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More About the product
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
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

