import { FlatList, Pressable, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import FeedComponenet from "../components/feedComponent";
import globalStyles from "./stylesheet";
import IconButton from "../components/iconButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/app-context";
import { recievePlace } from "../util/places";
import PlaceComponent from "../components/placeComponent";

function PlaceScreen() {
    const [places,setPlaces] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const ctx = useContext(AppContext);

    useEffect(()=>{
        !async function(){
            const recv = await recievePlace();
            const arr = [];
            for(let objKey in recv.data) {
                if(recv.data.hasOwnProperty(objKey)){
                    recv.data[objKey].id=objKey
                    arr.push(recv.data[objKey]);                    
                }
            }
            setPlaces(arr.reverse());
            // console.log("recv",feeds);
        }(); 
    },[isFocused])

    const onAddItemHandle = () => {
        navigation.navigate("placeAdd");
    }

    return (
    <View style={globalStyles.feedContainer}>
        <FlatList data={places} renderItem={({index,item})=>{
            return <PlaceComponent item={item} />
        }}/>    
        {ctx.auth?<IconButton onPress={onAddItemHandle}
                name="add-circle" size={48} color={"#C69EFA"} style={{ bottom: 12, right: 12, position: "absolute" }} />:<></>}
    </View>);
}

export default PlaceScreen;