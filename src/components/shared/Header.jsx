import { Button, Form, Image, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoMdBookmark } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <Navbar id="top" collapseOnSelect expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="https://i.ibb.co/rM0T3Kf/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <InputGroup className="d-flex w-25">
            <Form.Control
              placeholder="Search here.."
              aria-label="Search here.."
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <CiSearch />
            </Button>
          </InputGroup>
          <Nav className="ms-auto">
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                People - Community
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Places - Venues
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Programs - Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Products - Store
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hobbies" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#bookmark">
              <IoMdBookmark />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#notification">
              <IoNotifications />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
              <FaCartShopping />
            </Nav.Link>
            <Button variant="outline-primary" size="sm" className="px-4">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
