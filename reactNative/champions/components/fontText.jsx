import { StyleSheet, Text } from "react-native";


function FontText({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "GowunDodum"
    }
});

export default FontText;