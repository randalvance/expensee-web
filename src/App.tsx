import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import TopLevelRoutes from './routes';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">ExpenSee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-3">
        <TopLevelRoutes />
      </Container>
    </Router>
  </div>
);

export default App;
