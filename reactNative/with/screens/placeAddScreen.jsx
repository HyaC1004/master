import { useIsFocused } from "@react-navigation/native";
import { getCurrentPositionAsync } from "expo-location";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import IconButton from "../components/iconButton";
import ImagePicker from "../components/imagePicker";
import LocationPicker from "../components/locationPicker";
import { createStaticMapURI, getAddresses } from "../util/maps";
import globalStyles from "./stylesheet";

export default function PlaceAddScreen({route}) {
    const isFocused = useIsFocused();

    // 데이터 등록할때 필요한 값들을 state로 설정
    const [placeInfo, setPlaceInfo] = useState("");         // 장소설명
    const [placeImage, setPlaceImage] = useState(null);     // 장소이미지
    const [placeLocation, setPlaceLocation] = useState(null); // 장소위치

    useEffect(()=>{
        console.log(placeInfo);
        console.log(placeImage);
        console.log(placeLocation);
    },[placeInfo,placeImage,placeLocation])

    useEffect(()=>{
    },[isFocused])

    const imagePickedHandle = async(uri)=>{
        setPlaceImage(uri);
    }
    const loactionPickedHandle = (coord) => {
        setPlaceLocation(coord);
    }
    
    return(
    <View style={globalStyles.root}>
        <View>
            <TextInput style={{
                padding:4, borderBottomColor:"#111111", borderBottomWidth:1, marginBottom:4}} 
                placeholder={"장소에 대해 설명해주세요."} value={placeInfo} onChangeText={setPlaceInfo} />
        </View>
        <ImagePicker onPicked={imagePickedHandle} />
        <LocationPicker onPicked={loactionPickedHandle} select={route.params}/>
    </View>
    )
}