import { StyleSheet, Text } from "react-native";


function FeedFontEng({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "Dangrek_eng"
    }
});

export default FeedFontEng;