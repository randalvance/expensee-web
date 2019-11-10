import React from 'react';
import { Col, Row } from 'react-bootstrap';

type Props = {
  pageHeading: string;
};

export const ContentPage: React.FC<Props> = ({ pageHeading, children }) => (
  <Row className="bg-light p-2">
    <Col>
      <h2>{pageHeading}</h2>
      {children}
    </Col>
  </Row>
);
