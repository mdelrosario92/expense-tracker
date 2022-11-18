import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

var dummy_test = [{
    id: 'e1',
    description: 'Super',
    amount: 3720,
    date: new Date('2022-12-12')
},
{
    id: 'e2',
    description: 'Libro',
    amount: 2150,
    date: new Date('2022-10-12')
},
{
    id: 'e3',
    description: 'ORT',
    amount: 10700,
    date: new Date('2022-09-12')
},
{
    id: 'e4',
    description: 'Kiosco',
    amount: 810,
    date: new Date('2022-06-12')
},
{
    id: 'e5',
    description: 'Ropa',
    amount: 7400,
    date: new Date('2022-02-12')
}]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={dummy_test} periodName={expensesPeriod} />
            <ExpensesList expenses={dummy_test} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.background
    }
});
