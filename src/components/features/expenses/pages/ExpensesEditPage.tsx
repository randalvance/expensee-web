import React from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { useFormik } from 'formik';

import DatePicker from 'components/DatePicker';

export const ExpensesEditPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: 'My Expense',
      date: new Date(),
      amount: 300,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col sm={12} md={6}>
          <Row noGutters>
            <Col sm={12} className="p-1">
              <Form.Control
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Name"
              />
            </Col>
            <Col sm={12} className="p-1">
              <DatePicker
                value={formik.values.date}
                onChange={(value) => formik.setFieldValue('date', value)}
              />
            </Col>
            <Col sm={12} className="p-1">
              <Form.Control
                name="amount"
                type="number"
                value={formik.values.amount.toString()}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Amount"
              />
            </Col>
            <Col className="p-1 pt-3">
              <Button type="submit">Add</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
