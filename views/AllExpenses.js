import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

function AllExpenses() {
    return <ExpensesOutput expensesPeriod="Last 30 days" />;
}

export default AllExpenses;