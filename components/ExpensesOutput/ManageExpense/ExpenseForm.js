import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';

function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        description: '',
        amount: '',
        date: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return { ...curInputValues, [inputIdentifier]: enteredValue };
        });
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Tu gasto</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label="Monto" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }} />
                <Input style={styles.rowInput} label="Fecha" textInputConfig={{
                    placeholder: 'dd/mm/yyyy',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>
            <Input label="Descripción" textInputConfig={{
                multiline: true,
                autoCorrect: false,
                autoCapitalize: 'none',
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1
    }
});
