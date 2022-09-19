import { StyleSheet, Text } from "react-native";


function IconText({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "DongleBold",       
        zIndex:99,
        fontSize:24,
        marginBottom:4
    }
});

export default IconText;