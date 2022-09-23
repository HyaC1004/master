import { StyleSheet, Text } from "react-native";


function FeedFontKor({ children, style }) {
    return (<Text style={[styles.default, style]}>{children}</Text>);
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "Nanumpen_kor"
    }
});

export default FeedFontKor;