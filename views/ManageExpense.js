import { useLayoutEffect } from 'react';
import { View } from 'react-native'
import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import AddButton from '../components/ExpensesOutput/UI/AddButton';
import CommonButton from '../components/ExpensesOutput/UI/CommonButton';

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Editar Gasto' : 'Agregar Gasto'
        });
    }), [navigation, isEditing]

    function deleteExpense() { }
    function cancelHandler() { }
    function confirmHandler() { }

    return <View style={styles.container}>
     <View style={styles.buttons}>
            <CommonButton mode="flat" onPress={cancelHandler}>Cancelar</CommonButton>
            <CommonButton onPress = {confirmHandler}>{isEditing ? 'Update' : 'Add'}</CommonButton>
    </View>
        {isEditing &&
            <View style={styles.deleteContainer}><AddButton
                icon="trash"
                color='red'
                size={36}
                onPress={deleteExpense} />
            </View>}
    </View>;
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.background
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.filter,
        alignItems: 'center'
    }
});