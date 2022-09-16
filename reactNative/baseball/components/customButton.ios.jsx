import {
    View, Text, Platform,
    Pressable, StyleSheet
} from "react-native"

console.log(Platform.OS);

function CustomButton({ children, onPress }) {
    return (
        <View style={{ overflow: "hidden" }} >
            <Pressable onPress={onPress}
                style={({ pressed }) =>
                    pressed ?
                        [styles.buttonOuterContainer, { opacity: 0.8 }] :
                        styles.buttonOuterContainer
                } >
                <View style={styles.buttonInnerContainer}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: "#e67f25",
        borderRadius: 8,
        marginVertical: 8,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 1
    },
    buttonText: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "900"
    }
});

export default CustomButton;