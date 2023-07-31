import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
// import { CartContext } from "./App";

function BasicExample({ product }) {
  // const { cart, setCart } = useContext(CartContext);
  const { name, price, image, description} = product;
  // function hundleCart(product) {
  //   const exist = cart.find((item) => item.id === product.id);
  //   if (exist) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, qty: 1 }]);
  //   }
  //   console.log(cart);
  // }
  
  return (
    <Card style={{ width: "18rem" }} id="t">
      <Card.Img variant="top" src={require(`${image}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Example name={name} fullDiscription={description} />
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Description du produit
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
