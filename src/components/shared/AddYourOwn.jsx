import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const AddYourOwn = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f7fdff" }}>
      <Container>
        <Row>
          <Col sm={12}>
            <SingleCard
              title={"Add Your Own"}
              description={
                "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page"
              }
              icon={"add"}
              buttonText={"Add new"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddYourOwn;
