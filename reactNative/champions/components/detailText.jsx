import { StyleSheet, Text } from "react-native";


function DetailText({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily:"Jua",  
        color:"white",
    }
});

export default DetailText;