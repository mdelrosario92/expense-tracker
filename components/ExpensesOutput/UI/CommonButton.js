import { Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../constants/styles';


function CommonButton({children, onPress, mode, style}) {
    return <View style={style}>
        <Pressable onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
            <Text style = {[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}</Text>
        </View>
        </Pressable>
    </View>
}

export default CommonButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.background
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'centen'
    },
    flatText: {
        color: GlobalStyles.colors.text
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.background,
        borderRadius: 4
    }
});
