import { useContext } from 'react';
import { ExpensesContext } from "../store/expenses-context";
import ConversorOutput from '../components/ConversorOutput/ConversorOutput';

function Conversor() {
  const expensesContext = useContext(ExpensesContext);

  return (
    <ConversorOutput
      expenses={expensesContext.expenses}
    />
  );
}

export default Conversor;