import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import TopLevelRoutes from './routes';

import { AppNavBar } from './components/layout';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <AppNavBar />
      <Container className="mt-3">
        <TopLevelRoutes />
      </Container>
    </Router>
  </div>
);

export default App;
