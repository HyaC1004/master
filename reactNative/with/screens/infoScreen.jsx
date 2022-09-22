import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/app-context";
import globalStyles from "./stylesheet";
import CustomButton from "../components/customButton";
import { sendFeed } from "../util/accounts";

function InfoScreen() {    
    const navigation = useNavigation();
    const ctx = useContext(AppContext);
    const [feed,setFeed] = useState();

    const logoutHandle = () =>{
        ctx.dispatch({type:"logout"});
        AsyncStorage.removeItem("userAuth");
        navigation.navigate("home");
        //console.log(ctx.data.email);
    }

    const feedHandle = () => {
        sendFeed(ctx.auth.data.idToken,ctx.auth.data.email,feed);
        setFeed("");
    }
    return (
    <ScrollView>
    <View style={globalStyles.container}> 
        <View style={globalStyles.inputBox}>
            <TextInput
                style={globalStyles.TextInput}
                placeholderTextColor="#003f3c"
                onChangeText={(feed) => setFeed(feed)}
            />
        </View>
        <CustomButton onPress={feedHandle}>등록</CustomButton>
        <Text style={{fontSize:24,marginBottom:16}}>{ctx.auth.data.email}</Text>  
        <Pressable onPress={logoutHandle}><Image style={{width:100,height:100}} source={require('../assets/images/ebichu/ebichu_cry.gif')} /></Pressable>
        <Text style={{fontSize:24,marginBottom:16}}>{ctx.auth.data.idToken}</Text>         
    </View>
    </ScrollView>     );
}
export default InfoScreen;