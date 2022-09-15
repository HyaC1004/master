import { StyleSheet, Button,  Text, View } from "react-native";

function CheckResult({result, setTarget}) {
    const clearHandle = ()=>{
        setTarget(null);
    }
    //console.log("check",result)
    return (
    <View style={styles.resultWrap}>
        {result.item.win?<View><Text style={styles.victory}>{result.item.number}    승리</Text><Button title='메인메뉴로' onPress={clearHandle} /></View>:
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={styles.number}>{result.item.number}</Text>
            {result.item.strike!=0?<Text style={[styles.result,{backgroundColor:"#1947E6"}]}>{result.item.strike}S</Text>:<></>}
            {result.item.ball!=0?<Text style={[styles.result,{backgroundColor:"#19E60D"}]}>{result.item.ball}B</Text>:<></>}
            {result.item.out!=0?<Text style={[styles.result,{backgroundColor:"#E61700"}]}>{result.item.out}O</Text>:<></>}
        </View>}        
        
    </View> );
}
const styles = StyleSheet.create({
    resultWrap:{
        paddingHorizontal:12,   
        
    },
    victory:{
        fontSize:96,
        backgroundColor:"green",
        marginBottom:12,
        width:'100%',
        textAlign:"center",
        borderRadius:12,
    },
    number: {
        fontSize:24,
        backgroundColor:"yellow",
        marginBottom:12,
        width:'40%',
        textAlign:"center",
        borderRadius:12,
    },
    result:{
        fontSize:24,
        marginBottom:12,
        width:'15%',
        textAlign:"center",
        borderRadius:12,
    }

})
export default CheckResult;