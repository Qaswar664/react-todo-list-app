import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Axios from './Todo';
const Header =()=>{
    
    return(
      <div>
        <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className='text-danger'>todo list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {/* <Axios/> */}
      </div>
      </div>
      
    )
}

export default Header;