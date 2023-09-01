
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({ product }) {
  const { name, image, description } = product;

  return (
    <Card style={{ width: "18rem" }} id="t">
      <Card.Img variant="top" src={require(`${image}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <a
          href={require(`${description}`)}
          download={description}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Download details</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
