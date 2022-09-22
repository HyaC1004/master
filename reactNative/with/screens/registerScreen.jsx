import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CustomButton from "../components/customButton";
import { sendRegisterReq } from "../util/accounts";
import globalStyles from "./stylesheet";

function RegisterScreen() {
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    useEffect(()=>{
        navigation.setOptions({
            title: "Register"
        });
    })
    function validEmail() {
        const rst = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        console.log(rst);
        return rst;
    }
    const registerHandle = () =>{
        if(!validEmail()){
            return Alert.alert("Error","Email is invalid");
        }else if(password.length<6){
            return Alert.alert("Error","Password must be 6 or more characters");
        }else if(password!==confirmPassword) {
            return Alert.alert("Error","Passwords inconsistency");
        }
        setLoading(true);
        !async function () {            
            try{
                const recv = await sendRegisterReq(email,password);            
                console.log(recv);
            }catch(e){
                Alert.alert("With","회원 가입이 처리되지 않았습니다.");
                console.log(e);
            }
            setLoading(false);                   
            navigation.navigate("login"); 
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
                placeholderTextColor="#003f5c"
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
        <View style={globalStyles.inputBox}>
            <TextInput
                style={globalStyles.TextInput}
                placeholder="Password Confirm."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            />
        </View>
        <CustomButton onPress={validEmail}>valid</CustomButton>
        <CustomButton onPress={registerHandle}>Register</CustomButton>
    </View>
    </TouchableWithoutFeedback>  );
}
export default RegisterScreen;