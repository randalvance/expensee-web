import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Button,
  Jumbotron,
} from 'react-bootstrap';

const App: React.FC = () => (
  <div className="App">
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
      <Jumbotron>
        <h1>ExpenSee</h1>
      </Jumbotron>
    </Container>
  </div>
);

export default App;
