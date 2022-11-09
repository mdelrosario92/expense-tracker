import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const dummy_test = [{
    id: 'e1',
    description: 'tv',
    amount: 1000,
    date: new Date('2022-01-01')
},
{
    id: 'e2',
    description: 'book',
    amount: 2000,
    date: new Date('2022-02-01')
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
        backgroundColor: GlobalStyles.colors.background,
    }
});
