import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function IconButton({icon, size, color, onPress}) {
    return (
    <Pressable onPress = {onPress} styles = {(pressed) => pressed && styles.pressed}>
        <View style = {styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color} />
        </View>
    </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 13,
        marginVertical: 6
    },
    pressed: {
        opacity: 0.75
    }
});