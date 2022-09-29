import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import FeedFontEng from "../components/feedFontEng";
import FeedFontKor from "../components/feedFontKor";
import IconButton from "../components/iconButton";
import { AppContext } from "../context/app-context";
import { deleteFeed } from "../util/feed";
import globalStyles from "./stylesheet";
import Icon from "react-native-vector-icons/AntDesign"

function PlaceDetail({route}) {
    const place = route.params.item;
    const date = new Date(place.createdAt);
    const ctx = useContext(AppContext);
    const navigation = useNavigation();    
    console.log(place);
    const changeHandle = ()=>{
        navigation.navigate("placeChange",{idToken:ctx.auth.data.idToken,data:place})     
    }
    
    const deleteHandle = () =>{
        Alert.alert('Warning','Do you want delete??',[
            {text:'cancle',onPress:()=>{},style:"cancel"},
            {text: 'delete',onPress:()=>{deleteFeed(ctx.auth.data.idToken,place.id);navigation.navigate("placeScreen");},
            style: 'destructive'}
        ],{
            cancelable: true,
            onDismiss: () => {},
        })
    }


    return (
    <View style={globalStyles.detailContainer}> 
        <View style={styles.title}>
            <FeedFontKor style={{fontSize:48}}>{place.title}</FeedFontKor>
            <Icon name="hearto" size={23} color={'#3D3D3D'}></Icon>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:12}}>
            <FeedFontEng style={{fontSize:12}}>by. {place.writer}</FeedFontEng>
            <FeedFontEng style={{fontSize:12}}>{date.toISOString().slice(0,10)}</FeedFontEng>
        </View>
        <Image style={{width:100,height:100,marginVertical:12}} source={{uri:place.imageURL}} />
        <MapView
            initialRegion={{
                latitude: place.location.latitude,
                longitude: place.location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            style={[styles.map]}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
        >
        <Marker coordinate={place.location} title={place.address} />
        </MapView>
        {(ctx.auth.data.email??"")===place.email?<>
        <IconButton onPress={changeHandle}
                name="pencil-sharp" size={36} color={"#7648AD"} style={{ bottom: 80, right: 12, position: "absolute",backgroundColor:"#C69EFA",borderRadius:24,width:48,height:48, alignItems:"center", justifyContent:"center" }} />
        <IconButton onPress={deleteHandle}
                name="trash-outline" size={36} color={"#7648AD"} style={{ bottom: 24, right: 12, position: "absolute",backgroundColor:"#C69EFA",borderRadius:24,width:48,height:48, alignItems:"center", justifyContent:"center" }} /></>:<></>        
        }
    </View>  );
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300
    },
    title: {
        width: '90%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
});
export default PlaceDetail;