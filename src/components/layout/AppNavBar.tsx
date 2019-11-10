import React, { useCallback } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const AppNavBar = () => {
  const history = useHistory();
  const navigateToHome = useCallback(() => {
    history.push('/');
  }, [history]);
  const navigateToExpenses = useCallback(() => {
    history.push('/expenses');
  }, [history]);
  const navigateToBudgets = useCallback(() => {
    history.push('/budgets');
  }, [history]);
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#" onClick={navigateToHome}>
        ExpenSee
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={navigateToHome}>
            Home
          </Nav.Link>
          <Nav.Link href="#" onClick={navigateToExpenses}>
            Expenes
          </Nav.Link>
          <Nav.Link href="#" onClick={navigateToBudgets}>
            Budgets
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
