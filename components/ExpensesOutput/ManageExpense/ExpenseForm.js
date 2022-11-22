import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import CommonButton from '../UI/CommonButton';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return { ...curInputValues, [inputIdentifier]: enteredValue };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        onSubmit(expenseData);
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
                    placeholder: 'yyyy-mm-dd',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>
            <Input label="Descripción" textInputConfig={{
                multiline: true,
                autoCorrect: true,
                autoCapitalize: 'sentences',
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
            <View style={styles.buttons}>
                <CommonButton style={styles.button} mode="flat" onPress={onCancel}>Cancelar</CommonButton>
                <CommonButton onPress={submitHandler}>{submitButtonLabel}</CommonButton>
            </View>
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
});
