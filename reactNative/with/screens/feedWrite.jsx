import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import CustomButton from "../components/customButton";
import { AppContext } from "../context/app-context";
import { sendFeed } from "../util/feed";
import globalStyles from "./stylesheet";

function FeedWrite() {
    
    const ctx = useContext(AppContext);
    const navigation = useNavigation();
    const [feed, setFeed] = useState({ title: "", contents: "" });

    const feedHandle = () => {
        sendFeed(ctx.auth.data.idToken,ctx.auth.data.email,feed);
        setFeed({title:"",contents:""});
        navigation.navigate("feedScreen");
    }

    return (
    <View style={globalStyles.container}> 
        <View style={[globalStyles.feedInputBox,{height:40}]}>
            <TextInput
                style={{padding:10}}
                placeholderTextColor="#003f3c"
                placeholder="Title"                
                onChangeText={(text) => setFeed({...feed,title:text})}
            />
        </View>
        <View style={[globalStyles.feedInputBox,{height:200}]}>
            <TextInput
                style={{padding:10}}
                placeholderTextColor="#003f3c"
                placeholder="Contents"
                multiline ={true}
                onChangeText={(text) => setFeed({...feed,contents:text})}
            />
        </View>
        <CustomButton onPress={feedHandle}>등록</CustomButton>
    </View>  );
}

export default FeedWrite;