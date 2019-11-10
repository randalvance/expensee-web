import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BudgetsPage, ExpensesPage, HomePage } from 'pages';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/expenses" component={ExpensesPage} />
    <Route exact path="/budgets" component={BudgetsPage} />
  </Switch>
);

export default TopLevelRoutes;
