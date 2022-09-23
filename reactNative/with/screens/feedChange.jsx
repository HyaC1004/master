import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import CustomButton from "../components/customButton";
import { AppContext } from "../context/app-context";
import { changeFeed } from "../util/feed";
import globalStyles from "./stylesheet";

function FeedChange({route}) {
    const data = route.params.data;    
    const ctx = useContext(AppContext);
    const navigation = useNavigation();
    const [feed, setFeed] = useState({ title: data.title, contents: data.contents });

    const changeHandle = () => {
        changeFeed(data.id,ctx.auth.data.idToken,feed);
        setFeed({title:"",contents:""});
        navigation.navigate("feedScreen");
    }

    return (
    <View style={globalStyles.root}> 
        <View style={[globalStyles.feedInputBox,{height:40}]}>
            <TextInput
                style={{padding:10}}
                placeholderTextColor="#003f3c"
                defaultValue={data.title}
                onChangeText={(text) => setFeed({...feed,title:text})}
            />
        </View>
        <View style={[globalStyles.feedInputBox,{height:200}]}>
            <TextInput
                style={{padding:10}}
                placeholderTextColor="#003f3c"
                defaultValue={data.contents}
                multiline ={true}
                onChangeText={(text) => setFeed({...feed,contents:text})}
            />
        </View>
        <CustomButton onPress={changeHandle}>수정</CustomButton>
    </View>  );
}

export default FeedChange;