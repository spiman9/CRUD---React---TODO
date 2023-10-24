import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{fontSize: '25px' , color: 'red' , fontWeight: 'bold'}}>Todo-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold' , textDecoration: 'none' , color:'black' , marginLeft: '20px'}}>Home</Link>
            <Link to="/about" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold' , textDecoration: 'none' , color:'black' , marginLeft: '20px'}}>About</Link>
            <Link to="/contact" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold' , textDecoration: 'none' , color:'black' , marginLeft: '20px'}}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;