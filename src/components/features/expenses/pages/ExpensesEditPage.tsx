import React from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';

import { DatePicker } from 'components';

export const ExpensesEditPage: React.FC = () => (
  <Form>
    <Row>
      <Col sm={12} md={6}>
        <Row noGutters>
          <Col sm={12} className="p-1">
            <Form.Control type="text" placeholder="Name" />
          </Col>
          <Col sm={12} className="p-1">
            <DatePicker />
          </Col>
          <Col sm={12} className="p-1">
            <Form.Control type="number" placeholder="Amount" />
          </Col>
          <Col className="p-1 pt-3"><Button>Add</Button></Col>
        </Row>
      </Col>
    </Row>
  </Form>
);
