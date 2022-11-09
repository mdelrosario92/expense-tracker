import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: GlobalStyles.colors.filter,
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 15,
        color: GlobalStyles.colors.text,
    },
    sum: {
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.text,

    }
});