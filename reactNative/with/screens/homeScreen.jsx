import { useContext, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/app-context";
import globalStyles from "./stylesheet";

function HomeScreen() {
    const ctx = useContext(AppContext);
    //console.log(ctx.auth.data.email);
    const [blur,setBlur] = useState(5);
    const [blur2,setBlur2] = useState(5);    
    return (
    <View style={globalStyles.root}>
        <TextInput style={{height:50}} />
        <Pressable onPressIn={()=>setBlur(0)} onPressOut={()=>{setBlur(5)}}><Image blurRadius={blur} source={require('../assets/images/mokoko/mokoko_hi.png')} /></Pressable>
        <Pressable onPressIn={()=>setBlur2(0)} onPressOut={()=>setBlur2(5)}><Image blurRadius={blur2} source={require('../assets/images/mokoko/mokoko_hi2.png')} /></Pressable>
    </View>  );
}

export default HomeScreen;