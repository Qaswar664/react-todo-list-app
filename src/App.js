import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios from './component/Todo';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className='text-white'>todo list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Axios/>
      </div>
       
    </div>
  );
}

export default App;