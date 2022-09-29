import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getCurrentPositionAsync } from "expo-location";
import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import IconButton from "../components/iconButton";
import ImagePicker from "../components/imagePicker";
import LocationPicker from "../components/locationPicker";
import { AppContext } from "../context/app-context";
import { createStaticMapURI, getAddresses } from "../util/maps";
import { sendAddPlaceRequest } from "../util/places";
import globalStyles from "./stylesheet";

export default function PlaceAddScreen({route}) {
    const ctx = useContext(AppContext);
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    // 데이터 등록할때 필요한 값들을 state로 설정
    const [placeInfo, setPlaceInfo] = useState("");         // 장소설명
    const [placeImage, setPlaceImage] = useState(null);     // 장소이미지
    const [placeImageBase64, setPlaceImageBase64] = useState(null);     // 장소이미지 데이터
    const [placeLocation, setPlaceLocation] = useState(null); // 장소위치

    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return (
                    <View style={{justifyContent:"flex-end", marginRight:8}}>
                        <IconButton name={"share"} onPress={confirm} size={24} style={{marginRight:12}} color={"#C69EFA"}/>
                    </View>
                )
            }
        })
    },[placeInfo,placeImage,placeLocation,placeImageBase64])

    const confirm = ()=>{
        const data = {
            title: placeInfo,
            location: placeLocation,
            createdAt: new Date()
        }
        sendAddPlaceRequest(data , placeImageBase64, placeImage, ctx.auth.data);
        navigation.navigate("placeScreen");
    }

    useEffect(()=>{
        // console.log(placeInfo);
        // console.log(placeImage);
        // console.log(placeLocation);
    },[isFocused,placeInfo,placeImage,placeLocation])

    const imagePickedHandle = async(uri, base64, coordinate)=>{
        setPlaceImage(uri);
        setPlaceImageBase64(base64);

        console.log("coor",coordinate);
        if(coordinate){
            setPlaceLocation(coordinate)
        }
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
        <LocationPicker onPicked={loactionPickedHandle} placeLocation={placeLocation} select={route.params}/>
    </View>
    )
}