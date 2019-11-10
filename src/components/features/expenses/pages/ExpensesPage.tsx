import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { ContentPage } from 'components/layout';
import { ExpensesListPage } from './ExpensesListPage';
import { ExpensesEditPage } from './ExpensesEditPage';

export const ExpensesPage: React.FC = () => {
  const { path } = useRouteMatch()!;

  return (
    <ContentPage pageHeading="Expenses">
      <Switch>
        <Route exact path={path} component={ExpensesListPage} />
        <Route path={`${path}/:action`} component={ExpensesEditPage} />
      </Switch>
    </ContentPage>
  );
};
