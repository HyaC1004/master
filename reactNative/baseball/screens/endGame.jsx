import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/customButton";

function EndGame({target,count,elapsed,onRestart}) {
    const restartHandle = ()=>{
        onRestart();
    }

    return (
    <View style={styles.endContainer}>
        <View style={styles.targetContainer}>
            <Text>축하합니다!</Text>
            <Text>{target}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/images/victory.png")} />
        </View>
        <View style={styles.scoreContainer}>
            <View style={styles.score}>
                <Text>시도횟수</Text>
                <Text>{count}</Text>
            </View>
            <View style={styles.score}>
                <Text>걸린시간</Text>
                <Text>{elapsed} sec</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton onPress={restartHandle}>메인으로</CustomButton>
        </View>
    </View>    
    );
}
const styles = StyleSheet.create({
    endContainer: {
        flex: 1,
        paddingHorizontal: 48
        
    },
    targetContainer: {
        backgroundColor: "#efefef",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        backgroundColor:"#f0faff"
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1
    },
    scoreContainer:{
        backgroundColor:"#efefef",
        padding:16,
        marginBottom:12
    },
    score:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 8
    },
    buttonContainer:{
        alignItems:"center"
    }
})
export default EndGame;