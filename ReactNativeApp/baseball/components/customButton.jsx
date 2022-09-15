import { Pressable, StyleSheet, Text, View } from "react-native";

function CustomButton({children, onPress}) {
    
    return (
    <Pressable onPress={onPress} style={({pressed})=>pressed?[styles.buttonContainer,{opacity:0.8}]:styles.buttonContainer}>
        <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
    </Pressable>
    );
}
const styles = StyleSheet.create({
    buttonContainer : {        
        backgroundColor:"black",        
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,   
        marginBottom:12,
        marginLeft:12
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 1
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign:"center"
    }
})
export default CustomButton;