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

    function deleteExpense() {
        navigation.goBack();
     }

    function cancelHandler() { 
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
     }

    return (
    <View style={styles.container}>
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
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.filter,
        alignItems: 'center',
    }
});