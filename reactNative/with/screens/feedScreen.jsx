import { FlatList, Pressable, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import FeedComponenet from "../components/feedComponent";
import { recieveFeed } from "../util/accounts";
import globalStyles from "./stylesheet";
import axios from "axios";

function FeedScreen() {
    const[feeds,setFeeds] = useState([]);
    useEffect(()=>{
        !async function(){
            const recv = await recieveFeed();
            setFeeds(recv.data);
        }();
    },[])
    const recvHandle = async() => {
        const recv = await recieveFeed();
        setFeeds([recv.data]);
        console.log("recv",feeds);
    }

    return (
    <View style={globalStyles.feedContainer}>
        <Pressable onPress={recvHandle}><Text>눌러주세요</Text></Pressable>
        <FlatList data={feeds} renderItem={({index,item})=>{
            return <FeedComponenet item={item} />
        }}/>    
    </View>);
}

export default FeedScreen;