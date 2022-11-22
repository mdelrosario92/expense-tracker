
import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date > date7DaysAgo) && (expense.date <= today);
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Últimos 7 días"
      fallbackText="No hay gastos registrados en los últimos 7 días!"
    />
  );
}

export default RecentExpenses;