import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleCard from "./SingleCard";

const Cards = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <SingleCard
            title={"People"}
            description={
              "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            }
            icon={"people"}
            buttonText={"Connect"}
          />
        </Col>
        <Col sm={6}>
          <SingleCard
            title={"Place"}
            description={
              "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            }
            icon={"place"}
            buttonText={"Meet up"}
          />
        </Col>
        <Col sm={6}>
          <SingleCard
            title={"Product"}
            description={
              "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            }
            icon={"product"}
            buttonText={"Get it"}
          />
        </Col>
        <Col sm={6}>
          <SingleCard
            title={"Program"}
            description={
              "Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            }
            icon={"program"}
            buttonText={"Attend"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
