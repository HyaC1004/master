import { launchCameraAsync, launchImageLibraryAsync, PermissionStatus, useCameraPermissions, useMediaLibraryPermissions } from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, View } from "react-native";
import IconButton from "./iconButton";

function ImagePicker({onPicked}) {
    const [imageUri,setImageUri] = useState(null);
    const [cmaeraPermission, requestCameraPermission] = useCameraPermissions();
    const [albumPermission, requestAlbumPermission] = useMediaLibraryPermissions();

    const takeFromCamera = async() =>{
        if(!cmaeraPermission.status === PermissionStatus.UNDETERMINED ||
            cmaeraPermission.status === PermissionStatus.DENIED) {
            const resp = await requestCameraPermission();
            if(!resp.granted) {
                Alert.alert("With","이 기능은 카메라 접근권한이 필요합니다.");
                return;
            }
        }

        const rst = await launchCameraAsync({
            quality: 0.5,
            allowsEditing: true,
            aspect: [16,9],
            exif: true,
            base64: true
        })
        //console.log(rst);
        if(!rst.cancelled){
            setImageUri(rst.uri);
            // console.log(rst);
            const lat = rst.exif.GPSLatitude;
            const lng = rst.exif.GPSLongitude;
            console.log("photo",lat,lng);
            if (lat && lng) {
                onPicked(rst.uri, rst.base64,
                    { latitude: lat, logitude: lng }
                );
            } else {
                onPicked(rst.uri, rst.base64);
            }
        }
    }

    const takeFromAlbum = async() =>{
        if(!albumPermission.status === PermissionStatus.UNDETERMINED ||
            albumPermission.status === PermissionStatus.DENIED) {
            const resp = await requestAlbumPermission();
            if(!resp.granted) {
                Alert.alert("With","이 기능은 앨범 접근권한이 필요합니다.");
                return;
            }
        }

        const rst = await launchImageLibraryAsync({
            quality: 0.5,
            allowsEditing: true,
            aspect: [16,9],
            exif: true,
            base64: true
        });
        
        if(!rst.cancelled){
            setImageUri(rst.uri);
            // console.log(rst);
            const lat = rst.exif.GPSLatitude;
            const lng = rst.exif.GPSLongitude;
            console.log("photo",lat,lng);
            if (lat && lng) {
                onPicked(rst.uri, rst.base64,
                    { latitude: lat, logitude: lng }
                );
            } else {
                onPicked(rst.uri, rst.base64);
            }
        }
    }

    return (
    <>
        <View style={{height:200, backgroundColor:"#ddddff"}}>
            {imageUri && <Image source={{uri:imageUri}} style={{flex:1}} />}
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-around", padding:8}}>
            <IconButton name={"camera-outline"} size={36} onPress={takeFromCamera} />
            <IconButton name={"albums-outline"} size={36} onPress={takeFromAlbum} />
        </View>
    </>
    );
}

export default ImagePicker;