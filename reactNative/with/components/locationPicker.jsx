import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import createStaticMapURI from "../util/maps";
import IconButton from "./iconButton";


function LocationPicker() {
    const [mapURI, setMapURI] = useState(null);
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    useEffect(()=>{
        getCurrentPositionAsync().then(result=>{
            const temp = createStaticMapURI(result.coords.latitude,result.coords.longitude);
            setMapURI(temp);
            setLocation({latitude:result.coords.latitude,longitude:result.coords.longitude});
        }).catch(e=>{
            console.log(e.message);
        });
    },[])
    

    const [locationPermission, requsetLocationPermission] = useForegroundPermissions();

    const takeFromLocation = async() => {
        if (locationPermission.status == PermissionStatus.UNDETERMINED ||
            locationPermission.status == PermissionStatus.DENIED) {
                const permission = await requsetLocationPermission();
                if(!permission.granted) {
                    Alert.alert("With","이 기능은 위치정보 접근권한이 필요합니다.");
                    return;
                }
        }
        getCurrentPositionAsync().then(result=>{
            console.log("take")
           const temp = createStaticMapURI(result.coords.latitude,result.coords.longitude);
           setMapURI(temp);
        }).catch(e=>{
            console.log(e.message);
        });
    }
    const takeMapLocation = () =>{
        getCurrentPositionAsync().then(result=>{
            console.log("dynamic")
            setMapURI(null);
            setLocation({latitude:result.coords.latitude,longitude:result.coords.longitude});
        }).catch(e=>{
            console.log(e.message);
        });
    }
    
    return (
    <>
        <View style={{flex:1, backgroundColor:"#ddddff"}}>
            {mapURI ? <Image style={{flex:1}} source={{uri:mapURI}} />:
                <MapView
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                style={[styles.map]}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />}
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <IconButton name={"location-outline"} size={40} onPress={takeFromLocation} />
            <IconButton name={"map-outline"} size={40} onPress={takeMapLocation} />
        </View>
    </>
    );
}
const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
  });
export default LocationPicker;