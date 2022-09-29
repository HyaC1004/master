import { FlatList, Pressable, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import globalStyles from "./stylesheet";
import IconButton from "../components/iconButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/app-context";
import { recievePlace } from "../util/places";
import PlaceComponent from "../components/placeComponent";

function addRangeFieldAndSort(arr, lat , lng) {
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    const cvt = arr.map((one)=>{
        const targetLatitude = one.location.latitude;
        const targetLongitude = one.location.longitude;

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(targetLatitude-lat);  // deg2rad below
        var dLon = deg2rad(targetLongitude-lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(targetLatitude)) * Math.cos(deg2rad(lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return {...one, range: d}
    });
    console.log("cvt:",cvt);
    return cvt.reverse();
};


function PlaceScreen() {
    const [places,setPlaces] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const ctx = useContext(AppContext);
    const [sort,setSort] = useState(true);
    // console.log(ctx);

    useEffect(()=>{
        updatePlaces();
        sortFunc();
        console.log(places)
    },[isFocused])
    
    useEffect(()=>{
        sortFunc();
        console.log(places)
    },[sort])
    
    const updatePlaces = async() =>{
        const recv = await recievePlace();
        setPlaces(addRangeFieldAndSort(recv, 35.1653428, 126.9092003));
    }
    const sortFunc= async()=>{
        const recv = await recievePlace();
        setPlaces(addRangeFieldAndSort(recv, 35.1653428, 126.9092003));
        if(!sort) {
            const sortTime = places.sort((a,b)=>{
                return b.createdAt - a.createdAt; 
            })         
            // console.log(sortTime)   
            setPlaces(sortTime);
        }else{
            const sortRange = places.sort((a,b)=>{
                return a.range - b.range; 
            })
            setPlaces(sortRange);
        }
        // console.log(places);
    }
    const onSortByRange = () =>{
        console.log("Range");
        setSort(true);
    }

    const onSortByTime = () => {
        console.log("time");
        setSort(false);
    }
    
    const onAddItemHandle = () => {
        navigation.navigate("placeAdd");
    }

    return (
    <View style={globalStyles.feedContainer}>
        <View style={{flexDirection:"row",marginBottom:12, justifyContent:"space-around"}}>
            <Pressable onPress={onSortByRange}><Text>거리순</Text></Pressable>
            <Pressable onPress={onSortByTime}><Text>최신순</Text></Pressable>
        </View>
        <FlatList data={places} renderItem={({index,item})=>{
            return <PlaceComponent item={item} />
        }}  />    
        {ctx.auth?<IconButton onPress={onAddItemHandle}
                name="add-circle" size={48} color={"#C69EFA"} style={{ bottom: 12, right: 12, position: "absolute" }} />:<></>}
    </View>);
}

export default PlaceScreen;