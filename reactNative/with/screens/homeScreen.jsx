import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import globalStyles from "./stylesheet";

function HomeScreen() {
    const [blur,setBlur] = useState(5);
    const [blur2,setBlur2] = useState(5);
    return (
    <View style={globalStyles.root}>
        <Pressable onPressIn={()=>setBlur(0)} onPressOut={()=>setBlur(5)}><Image blurRadius={blur} source={require('../assets/images/mokoko/mokoko_hi.png')} /></Pressable>
        <Pressable onPressIn={()=>setBlur2(0)} onPressOut={()=>setBlur2(5)}><Image blurRadius={blur2} source={require('../assets/images/mokoko/mokoko_hi2.png')} /></Pressable>
    </View>  );
}

export default HomeScreen;