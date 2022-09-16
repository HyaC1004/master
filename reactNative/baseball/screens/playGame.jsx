import { useEffect, useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CheckResult from "../components/checkResult";
import NumberInput from "../components/numberinput";
import EndGame from "./endGame";

function PlayGame({target,setTarget,onEnd}) {
    const [history,setHistory] = useState([]);
    //console.log("history",history);
    
    return ( 
    <View style={{flex:1}}>
        <NumberInput setHistory={setHistory} history={history} setTarget={setTarget} target={target} onEnd={onEnd} />       
        
        <FlatList style={styles.list} data={history} renderItem={(item)=>{
            return <CheckResult result={item} setTarget={setTarget} />
        }} />
    </View> );
}
const styles = StyleSheet.create({
    list:{
        backgroundColor:"white",
        paddingVertical: 8,
        marginHorizontal: 16,
        borderRadius:8
    }
})

export default PlayGame;