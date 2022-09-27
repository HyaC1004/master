import { useNavigation } from "@react-navigation/native";
import { getCurrentPositionAsync } from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import IconButton from "../components/iconButton";
import { getAddresses } from "../util/maps";
import globalStyles from "./stylesheet";

function SelectLocationScreen({route,navigation}) {
    const coords = route.params.location;
    const [address, setAddress] = useState(null);
    const [coordinate, setCoordinate] = useState(coords);

    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return (
                    <View style={{justifyContent:"flex-end", marginRight:8}}>
                        <IconButton name={"checkmark"} size={24} color={"#C69EFA"} onPress={confirm}/>
                    </View>
                )
            }
        })
    },[coordinate])

    const confirm = ()=>{
        navigation.navigate("placeAdd",{coordinate: coordinate});
    }

    const pressHandle = ({nativeEvent}) =>{
        setCoordinate(nativeEvent.coordinate);
        getAddresses(nativeEvent.coordinate.latitude,nativeEvent.coordinate.longitude).then(val=>{
            setAddress(val.formatted_address);
        }).catch(e=>{console.log(e.message)})
        // console.log(coordinate);
        // console.log(nativeEvent.coordinate);
    }
    return (
    <View style={globalStyles.root}>
        <MapView
            initialRegion={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            style={[styles.map]}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            onPress={pressHandle}
        >
        <Marker coordinate={coordinate} title={address} />
        </MapView>
    </View>  );
}
const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
export default SelectLocationScreen;