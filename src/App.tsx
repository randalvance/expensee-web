import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';

const App: React.FC = () => (
  <div className="App">
    <Container fluid>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 2</Col>
      </Row>
      <Row>
        <Col><Button>Test</Button></Col>
      </Row>
    </Container>
  </div>
);

export default App;
