import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav style ={{padding:"24px 40px 20px 40px", fontsize:"18px", fontWeight:"bolder", lineHeiht:"26px", display:"flex"}}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success" style={{fontsize: "20px"}}>Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;