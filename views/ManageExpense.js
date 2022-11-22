import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import AddButton from '../components/ExpensesOutput/UI/AddButton';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ExpensesOutput/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expenseContext = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expenseContext.expenses.find(expense => expense.id === editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Editar Gasto' : 'Agregar Gasto'
        });
    }), [navigation, isEditing]

    function deleteExpense() {
        expenseContext.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        isEditing ? expenseContext.updateExpense(editedExpenseId, expenseData) : expenseContext.addExpense(expenseData);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm submitButtonLabel={isEditing ? 'Actualizar' : 'Agregar'} onSubmit={confirmHandler} onCancel={cancelHandler} defaultValues={selectedExpense} />
            {isEditing &&
                <View style={styles.deleteContainer}><AddButton
                    icon="trash"
                    color='red'
                    size={36}
                    onPress={deleteExpense} />
                </View>}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.background,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.filter,
        alignItems: 'center',
    }
});