import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{fontSize: '35px' , color: 'red' , fontWeight: 'bold'}}>Todo-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold'}}>Home</Nav.Link>
            <Nav.Link href="/about" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold'}}>About</Nav.Link>
            <Nav.Link href="/contact" className='text-center' style={{fontSize: '30px' , fontWeight: 'bold'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;