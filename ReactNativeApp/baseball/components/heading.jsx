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
        color: "yellow",
        lineHeight: 84,
        textAlign: "center",
        backgroundColor: "green",
        borderRadius: 16
    }
})
export default Heading;