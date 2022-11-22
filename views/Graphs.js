import { useContext } from 'react';

import GraphsOutput from "../components/GraphsOutput/GraphsOutput";
import { ExpensesContext } from "../store/expenses-context";

function Graphs() {
  const expensesContext = useContext(ExpensesContext);

  return (
    <GraphsOutput
      expenses={expensesContext.expenses}
    />
  );
}

export default Graphs;