import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function ExpenseItem({ description, amount, date }) {
    return <Pressable>
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{date.toString()}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.expenses,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.text,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.text,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.expenses,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyles.colors.text,
        fontWeight: 'bold'
    }
});