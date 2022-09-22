import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CustomButton from "../components/customButton";
import { sendLoginReq } from "../util/accounts";
import globalStyles from "./stylesheet";

function LoginScreen() {
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({ title: "Login"});
    }, []);

    const moveRegisterHandle = () => {
        navigation.navigate("register");
    }
    
    const loginHandle = () =>{
        if(!email || !password){
            return Alert.alert("With","이메일이나 패스워드를 입력해주세요");
        }
        !async function () {
            setLoading(true);
            try{
                const recv = await sendLoginReq(email,password);            
                console.log("recv",recv);   
                if(recv===undefined){
                    return Alert.alert("With","로그인 실패");
                }
            }catch(e){
                Alert.alert("With","로그인이 처리되지 않았습니다.");
                console.log(e);
            }
            setLoading(false);                   
            navigation.navigate("home");
        }();
    }

    if(loading) {
        return (
        <View style={{flex:1,justifyContent:"center"}}>
            <ActivityIndicator size={48} color={"#C69EFA"} />
        </View>
        )
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
        <View style={globalStyles.inputBox}>
            <TextInput
                style={globalStyles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f3c"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                keyboardType="email-address"
            />
        </View>
        <View style={globalStyles.inputBox}>
            <TextInput
                style={globalStyles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>
        <CustomButton onPress={loginHandle}>Login</CustomButton>        
        <Pressable onPress={moveRegisterHandle}><Text>Regist New Account</Text></Pressable>
    </View></TouchableWithoutFeedback>  );
}
const styles = StyleSheet.create({
  
});
export default LoginScreen;