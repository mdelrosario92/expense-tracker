import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from '@react-navigation/native';


function ExpenseItem({ description, amount, date }) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense');
    }

    return (<Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}
    >
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>${amount}</Text>
            </View>
        </View>
    </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        padding: 13,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.expenses,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.text,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.text,
        left:20
    },
    description: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
        left: 20
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.expenses,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        right: 10
    },
    amount: {
        color: GlobalStyles.colors.text,
        fontWeight: 'bold',
        fontSize:20
    },
    
});