import { useState } from "react";
import { StyleSheet, Text,TextInput, View, Button } from "react-native";
import CustomButton from "./customButton"

function NumberInput({setHistory,target,setTarget}) {
    const [number, setNumber] = useState("");
    const changeHandle = (num) =>{
        setNumber(num);
    }

    const enterNumberHandle = () =>{
        if(!number){
            return alert("숫자입력")
        }
        const log = {
            number: number,
            strike: 0,
            ball: 0,
            out:0,
            win:false
        }
        let ar = number.split("").map((e)=>Number(e));
        if(ar.length<3){
            return alert("3개입력")
        }
        console.log("ar:",ar)
        console.log("target:",target)
        if(JSON.stringify(ar)===JSON.stringify(target)){
            console.log("굳");
            log.win=true;
            setHistory([]);
        }else{
            for(let i =0; i<3; i++){
                if (ar[i] === target[i]) {
                    log.strike ++;
                } else if (target.includes(ar[i])) {
                    log.ball ++;
                }else{
                    log.out ++;
                }
            }
            console.log("땡",log);
        }
        setHistory((current)=>{
            return [log,...current];
        });

        setNumber("");
    }
    const clearHandle = ()=>{
        setTarget(null);
    }
    return (
    <View style={styles.numberContainer}>
        <View style={{flexDirection:"column"}}>
            <Text style={{textAlign:"center"}}>숫자를 입력하세요</Text>
            <TextInput style={styles.numberInput} maxLength={3} 
                keyboardType="number-pad" onChangeText={changeHandle} value={number} returnKeyType="done"/>
        </View>
        <View style={{flexDirection:"row"}}>
            <CustomButton onPress={enterNumberHandle}>확인</CustomButton>
            <CustomButton onPress={clearHandle}>행복버튼</CustomButton>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    numberContainer: {
        marginTop: 40,
        backgroundColor:'white',
        alignItems:"center",
        borderRadius:8,
        marginHorizontal:16,
        marginVertical: 24
    },
    numberInput: {
        padding:12,
        borderBottomColor:"black",
        borderBottomWidth:4,
        fontSize:60,
        textAlign: "center",
        width:160,
        marginBottom:12
    }
});


export default NumberInput;