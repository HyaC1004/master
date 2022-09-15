import { useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CheckResult from "../components/checkResult";
import NumberInput from "../components/numberinput";

function PlayGame({target,setTarget}) {
    const [history,setHistory] = useState([]);
    //console.log("history",history);
    
    return ( 
    <View>
        <NumberInput setHistory={setHistory} setTarget={setTarget} target={target} />        
        <FlatList style={styles.list} data={history} renderItem={(item)=>{
            return <CheckResult result={item} setTarget={setTarget} />
        }} />
    </View> );
}
const styles = StyleSheet.create({
    list:{
        backgroundColor:"white",
        paddingVertical: 16,
        marginHorizontal: 16,
        borderRadius:8
    }
})

export default PlayGame;