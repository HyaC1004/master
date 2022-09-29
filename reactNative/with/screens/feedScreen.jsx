import { FlatList, Pressable, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import FeedComponenet from "../components/feedComponent";
import { recieveFeed } from "../util/feed";
import globalStyles from "./stylesheet";
import IconButton from "../components/iconButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/app-context";

function FeedScreen() {
    const[feeds,setFeeds] = useState([]);
    const [refresh,setRefresh] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const ctx = useContext(AppContext);

    useEffect(()=>{
        !async function(){
            const recv = await recieveFeed();
            const arr = [];
            for(let objKey in recv.data) {
                if(recv.data.hasOwnProperty(objKey)){
                    recv.data[objKey].id=objKey
                    arr.push(recv.data[objKey]);                    
                }
            }
            setFeeds(arr.reverse());
            // console.log("recv",feeds);
        }();
    },[isFocused])
    const onAddItemHandle = () => {
        navigation.navigate("feedWrite");
    }

    return (
    <View style={globalStyles.feedContainer}>
        <FlatList data={feeds} renderItem={({index,item})=>{
            return <FeedComponenet item={item} />
        }} refreshing={false} onRefresh={()=>{
            setRefresh(true);
            console.log("refresh");
            setTimeout(()=>{
                setRefresh(false);
            },2000)
        }}/>    
        {ctx.auth?<IconButton onPress={onAddItemHandle}
                name="add-circle" size={48} color={"#C69EFA"} style={{ bottom: 12, right: 12, position: "absolute" }} />:<></>}
    </View>);
}

export default FeedScreen;