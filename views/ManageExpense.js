import { useContext, useLayoutEffect } from 'react';
import { TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import AddButton from '../components/ExpensesOutput/UI/AddButton';
import CommonButton from '../components/ExpensesOutput/UI/CommonButton';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ExpensesOutput/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const expenseContext = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

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

    function confirmHandler() {
        isEditing ? expenseContext.updateExpense(editedExpenseId, {description: 'testUpdate', amount: 29.99, date: new Date('2022-05-01')}) : expenseContext.addExpense({description: 'test', amount: 19.99, date: new Date('2022-01-01')});
        navigation.goBack();
     }

    return (
    <View style={styles.container}>
        <ExpenseForm/>
     <View style={styles.buttons}>
            <CommonButton style= {styles.button} mode="flat" onPress={cancelHandler}>Cancelar</CommonButton>
            <CommonButton onPress={confirmHandler}>{isEditing ? 'Actualizar' : 'Agregar'}</CommonButton>
    </View>
        { isEditing &&
            <View style={styles.deleteContainer}><AddButton
                icon="trash"
                color='red'
                size={36}
                onPress={deleteExpense} />
            </View> }
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        mindWidth: 120,
        marginHorizontal: 20,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.filter,
        alignItems: 'center',
    }
});