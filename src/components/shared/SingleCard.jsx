import { Button, Card } from "react-bootstrap";


// eslint-disable-next-line react/prop-types
const SingleCard = ({ title, description, buttonText, icon }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>
          {icon}
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
