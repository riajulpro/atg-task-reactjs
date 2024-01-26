import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className="py-5">
      <Container>
        <Card className="mb-2" style={{ backgroundColor: "#f7fdff" }}>
          <Card.Body>
            <Card.Title>icon Testimonial</Card.Title>
            <Card.Text>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </Card.Text>
            <Row>
              <Col sm={7}>
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">First item</div>
                  <div className="p-2">Second item</div>
                  <div className="p-2">
                    <Image
                      src="/public/assets/profile.png"
                      className="w-50 h-50"
                    />
                  </div>
                </Stack>
              </Col>
              <Col sm={5}>
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <Image src="/public/assets/profile.png" />
                  </div>
                  <div className="p-2">
                    <h4 className="text-primary">Shubha Nagarajan</h4>
                    <p>Classical Dancer</p>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Testimonial;
