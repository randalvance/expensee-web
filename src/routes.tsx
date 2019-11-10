import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BudgetsPage, ExpensesPage, HomePage } from 'pages';

export const TopLevelRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/expenses" component={ExpensesPage} />
    <Route path="/budgets" component={BudgetsPage} />
  </Switch>
);
