import { Text } from 'react-native'
import ExpenseItem from '../components/ExpensesOutput/ExpenseItem';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses () {
    
   var fechaActual = Date.now

   
    
    return <ExpensesOutput expensesPeriod= "Last 7 days" />;
}

export default RecentExpenses;