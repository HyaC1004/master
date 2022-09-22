import { Pressable, StyleSheet, Text, View } from "react-native";

function CustomButton({children, onPress}) {
    
    return (
    <Pressable onPress={onPress} android_ripple={{color:"#000"}} style={({pressed})=>pressed?[styles.buttonContainer,{opacity:0.8}]:styles.buttonContainer}>
        <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
    </Pressable>
    );
}
const styles = StyleSheet.create({
    buttonContainer : {        
        backgroundColor:"#B36BDF",        
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,   
        marginBottom:12,
        marginLeft:12,
        width: '60%'
    },
    buttonInnerContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        elevation: 1
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign:"center"
    }
})
export default CustomButton;