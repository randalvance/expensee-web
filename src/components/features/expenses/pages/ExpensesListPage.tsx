import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const ExpensesListPage: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch()!;
  const onEditItemClicked = useCallback(() => {
    history.push(`${match.url}/edit`);
  }, [history, match.url]);
  return (
    <>
      <Button bsPrefix="danger" onClick={onEditItemClicked}>Edit Expense</Button>
    </>
  );
};
