import { View, TextInput, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { GlobalStyles } from "../../../constants/styles";


function Input({ label, style, textInputConfig }) {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text>{label}</Text>
            <TextInput style={inputStyles}{...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.expenses,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.expenses,
        color: GlobalStyles.colors.text,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});