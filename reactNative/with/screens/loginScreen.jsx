import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CustomButton from "../components/customButton";
import { AppContext } from "../context/app-context";
import { sendLoginReq } from "../util/accounts";
import globalStyles from "./stylesheet";

function LoginScreen() {
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const ctx = useContext(AppContext);

    useEffect(() => {
        navigation.setOptions({ title: "Login"});
    }, []);

    const moveRegisterHandle = () => {
        navigation.navigate("register");
    }
    
    const loginHandle = async() =>{
        console.log(email,password)
        if(!email || !password){
            return Alert.alert("With","이메일이나 패스워드를 입력해주세요");
        }
        setLoading(true);
        try{
            const recv = await sendLoginReq(email,password);     
            ctx.dispatch({ type: "login", payload: recv });
            setLoading(false);                   
            navigation.navigate("home");
        }catch(e){
            Alert.alert("With","로그인이 처리되지 않았습니다.");
            setLoading(false);
            console.log(e);
        }
        setEmail("");
        setPassword("");
    }

    if(loading) {
        return (
        <View style={{flex:1,justifyContent:"center"}}>
            <ActivityIndicator size={48} color={"#C69EFA"} />
        </View>
        )
    }

    return (
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
        <Pressable onPress={moveRegisterHandle}><Text>Register New Account</Text></Pressable>
    </View>  );
}
const styles = StyleSheet.create({
  
});
export default LoginScreen;