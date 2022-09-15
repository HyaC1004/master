import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/customButton";
import Heading from "../components/heading";

function ReadyToGame({onStart}) {
    return (
    <View style={styles.readyContainer}>
        <View style={styles.buttonWrap}>
            <Heading size="5">숫 자 야 구</Heading>
        </View>
        <View style={styles.buttonWrap}>
            <CustomButton onPress={onStart}>시작하기</CustomButton>
        </View>
    </View>  );
}
const styles = StyleSheet.create({
    readyContainer:{
        flex:1,
        justifyContent: "space-between",
    },
    buttonWrap:{
        width:'100%',
        paddingHorizontal:24
    }
});

export default ReadyToGame;