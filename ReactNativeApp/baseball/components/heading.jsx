import { StyleSheet, Text, View } from "react-native";

function Heading({children, size}) {
    return (
    <View>
        <Text style={[styles.heading,{fontSize:size*8}]}>{children}</Text>
    </View>
     );
}
const styles = StyleSheet.create({
    heading:{
        fontWeight:"bold",
        color: "white",
        lineHeight: 84,
        textAlign: "center",
        backgroundColor: "#000000c0",
        borderRadius: 16
    }
})
export default Heading;