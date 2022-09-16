import { Dimensions, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CustomButton from "../components/customButton";
import Heading from "../components/heading";
import Ionicons from "@expo/vector-icons/Ionicons"
// Dimensions - window (실제 뷰 영역), screen
// orientation을 landscape 혹은 portrait하나로 고정을 해두었으면 이것만 해도댐
const {height,width} = Dimensions.get("screen");
console.log(height, width);
// 만일 orientation설정을 default로 해두었다면 
// 동적으로 변경을 시켜줘야댐

function ReadyToGame({onStart}) {
    const current = useWindowDimensions();
    console.log(current);


    return (
    <View style={[styles.readyContainer,{paddingHorizontal:current.width/10}]}>
        <View style={styles.titleWrap}>
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
    titleWrap:{
        width:'100%',
        paddingHorizontal:24
    },
    buttonWrap:{
        width:'100%',
        paddingHorizontal:24
    }
});

export default ReadyToGame;