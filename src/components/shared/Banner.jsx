import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";

const Banner = () => {
  const [key, setKey] = useState("sign-in");

  return (
    <div style={{ backgroundColor: "#f7fdff" }} className="py-5 mb-5">
      <Container>
        <Row>
          <Col sm={8}>
            <h1>
              Explore your <span className="text-primary">Hobby</span> or{" "}
              <span className="text-primary">Passion</span>
            </h1>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <Image src="/public/assets/left-1.png" />
            <Image src="/public/assets/right-1.png" />
          </Col>
          <Col sm={4}>
            <Tabs
              id="controlled-tabs"
              className=""
              variant="underline"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="sign-in" title="Sign In">
                {/* Content for Sign In tab */}
                <div className="mt-3">
                  <div className="d-grid mb-3">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      type="submit"
                      className="mb-2"
                    >
                      Continue with Google
                    </Button>
                    <Button variant="outline-secondary" size="sm" type="submit">
                      Continue with Facebook
                    </Button>
                  </div>
                  <p className="text-sm-center">-----Or connect with-----</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="outline-primary" size="sm" type="submit">
                        Continue
                      </Button>
                    </div>
                  </Form>
                </div>
              </Tab>
              <Tab eventKey="join-in" title="Join In">
                {/* Content for Join In tab */}
                <div className="mt-3">
                  <div className="d-grid mb-3">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      type="submit"
                      className="mb-2"
                    >
                      Continue with Google
                    </Button>
                    <Button variant="outline-secondary" size="sm" type="submit">
                      Continue with Facebook
                    </Button>
                  </div>
                  <p className="text-center">-----Or connect with-----</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p className="text-xs-start">
                      By continuing, you agree to our{" "}
                      <span className="text-bold">Terms of Service</span> and
                      <span className="text-bold"> Privacy Policy.</span>
                    </p>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Agree and Continue
                      </Button>
                    </div>
                  </Form>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
