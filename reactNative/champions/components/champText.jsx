import { StyleSheet, Text } from "react-native";


function ChampText({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily:"Jua",  
    }
});

export default ChampText;