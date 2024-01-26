import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { IoMdMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col sm={3}>
            <b>Hobbycue</b>
            <br />
            <a href="#">About Us</a>
            <br />
            <a href="#">Our Services</a>
            <br />
            <a href="#">Work with Us</a>
            <br />
            <a href="#">FAQ</a>
            <br />
            <a href="#">Contact Us</a>
            <br />
          </Col>
          <Col sm={3}>
            <b>How do I</b>
            <br />
            <a href="#">Sign Up</a>
            <br />
            <a href="#">Add a Listing</a>
            <br />
            <a href="#">Claim Listing</a>
            <br />
            <a href="#">Post a Query</a>
            <br />
            <a href="#">Add a Blog Post</a>
            <br />
            <a href="#">Other Queries</a>
            <br />
          </Col>
          <Col sm={2}>
            <b>Quick Links</b>
            <br />
            <a href="#">Listings</a>
            <br />
            <a href="#">Blog Posts</a>
            <br />
            <a href="#">Shop / Store</a>
            <br />
            <a href="#">Community</a>
            <br />
          </Col>
          <Col sm={4}>
            <b>Social Media</b>
            <Stack direction="horizontal" gap={2}>
              <FaFacebook />
              <AiFillTwitterCircle />
              <FaInstagram />
              <IoLogoPinterest />
              <FaGooglePlus />
              <FaYoutube />
              <FaTelegram />
              <IoMdMail />
            </Stack>
            <div className="mt-5">
              <b>Invite Friends</b>
              <InputGroup className="d-flex">
                <Form.Control
                  placeholder="Email ID"
                  aria-label="Email ID"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  Invite
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#f7fdff" }} className="p-3 text-center">
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
