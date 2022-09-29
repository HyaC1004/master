import { useNavigation } from "@react-navigation/native";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {createStaticMapURI, getAddresses} from "../util/maps";
import IconButton from "./iconButton";


function LocationPicker({select,onPicked, placeLocation}) {
    const [mapURI, setMapURI] = useState(null);
    const [address, setAddress] = useState(null);
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const navigation = useNavigation();
    useEffect(()=>{
        if(select){
            const lat = select.coordinate.latitude;
            const lng = select.coordinate.longitude;
            const temp = createStaticMapURI(lat,lng);
            getAddresses(lat,lng).then(val=>{
                setAddress(val.formatted_address);
            }).catch(e=>{console.log(e.message)})
            onPicked({...select.coordinate,address:address});
            setMapURI(temp);
        }else{
            getCurrentPositionAsync().then(result=>{
                const lat = result.coords.latitude;
                const lng = result.coords.longitude;
                const temp = createStaticMapURI(lat,lng);
                setLocation({latitude:lat,longitude:lng});
                onPicked({latitude:lat,longitude:lng,address:address})
                getAddresses(lat,lng).then(val=>{
                    setAddress(val.formatted_address);
                }).catch(e=>{console.log(e.message)})
                setMapURI(temp);
            }).catch(e=>{
                console.log(e.message);
            });
        }
    },[select])
    

    const [locationPermission, requsetLocationPermission] = useForegroundPermissions();

    const verifyPermission = async() =>{
        if (locationPermission.status == PermissionStatus.UNDETERMINED ||
            locationPermission.status == PermissionStatus.DENIED) {
                const permission = await requsetLocationPermission();
                if(!permission.granted) {
                    Alert.alert("With","이 기능은 위치정보 접근권한이 필요합니다.");
                    return false;
                }
        }
        return true;
    }
    const takeFromLocation = async() => {
        const verified = await verifyPermission();
        if(!verified) {
            return;
        }
        getCurrentPositionAsync().then(result=>{
            console.log("take")
            const temp = createStaticMapURI(result.coords.latitude,result.coords.longitude);
            getAddresses(result.coords.latitude,result.coords.longitude).then(val=>{
                // console.log(val.formatted_address);
                setAddress(val.formatted_address);
            }).catch(e=>{console.log(e.message)})
           setMapURI(temp);
        }).catch(e=>{
            console.log(e.message);
        });
    }
    
    const moveSelectLocation = async() => {
        const verified = await verifyPermission();
        if(!verified) {
            return;
        }
        navigation.navigate("selectLocation",{location:location});
    }

    return (
    <>
        <View style={{flex:1, backgroundColor:"#ddddff"}}>
            {mapURI&&<Image style={{flex:1}} source={{uri:mapURI}} />}
            <Text>{address}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <IconButton name={"location-outline"} size={40} onPress={takeFromLocation} />
            <IconButton name={"map-outline"} size={40} onPress={moveSelectLocation} />
        </View>
    </>
    );
}

export default LocationPicker;