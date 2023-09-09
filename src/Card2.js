import Card from "react-bootstrap/Card";

function BasicExample({ product }) {
  const { name, image} = product;
  
  return (
    <Card style={{ maxWidth: "18rem" }} id="t">
      <Card.Img variant="top" src={require(`${image}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

