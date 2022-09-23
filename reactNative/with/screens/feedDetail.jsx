import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import FeedFontEng from "../components/feedFontEng";
import FeedFontKor from "../components/feedFontKor";
import IconButton from "../components/iconButton";
import { AppContext } from "../context/app-context";
import { deleteFeed } from "../util/feed";
import globalStyles from "./stylesheet";

function FeedDetail({route}) {
    const feed = route.params.item;
    const date = new Date(feed.createdAt);
    const ctx = useContext(AppContext);
    const navigation = useNavigation();

    const changeHandle = ()=>{
        navigation.navigate("feedChange",{idToken:ctx.auth.data.idToken,data:feed})     
    }
    
    const deleteHandle = () =>{
        Alert.alert('Warning','Do you want delete??',[
            {text:'cancle',onPress:()=>{},style:"cancel"},
            {text: 'delete',onPress:()=>{deleteFeed(ctx.auth.data.idToken,feed.id);navigation.navigate("feedScreen");},
            style: 'destructive'}
        ],{
            cancelable: true,
            onDismiss: () => {},
        })
    }


    return (
    <View style={globalStyles.detailContainer}> 
        <FeedFontKor style={{fontSize:48}}>{feed.title}</FeedFontKor>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:12}}>
            <FeedFontEng style={{fontSize:12}}>by. {feed.email}</FeedFontEng>
            <FeedFontEng style={{fontSize:12}}>{date.toISOString().slice(0,10)}</FeedFontEng>
        </View>
        <FeedFontKor style={{fontSize:36,marginTop:24}}>{feed.contents}</FeedFontKor>
        {(ctx.auth.data.email??"")===feed.email?<>
        <IconButton onPress={changeHandle}
                name="pencil-sharp" size={36} color={"#7648AD"} style={{ bottom: 80, right: 12, position: "absolute",backgroundColor:"#C69EFA",borderRadius:24,width:48,height:48, alignItems:"center", justifyContent:"center" }} />
        <IconButton onPress={deleteHandle}
                name="trash-outline" size={36} color={"#7648AD"} style={{ bottom: 24, right: 12, position: "absolute",backgroundColor:"#C69EFA",borderRadius:24,width:48,height:48, alignItems:"center", justifyContent:"center" }} /></>:<></>        
        }
    </View>  );
}

export default FeedDetail;