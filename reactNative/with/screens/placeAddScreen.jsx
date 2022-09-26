import { ScrollView, Text, TextInput, View } from "react-native";
import IconButton from "../components/iconButton";
import ImagePicker from "../components/imagePicker";
import LocationPicker from "../components/locationPicker";
import globalStyles from "./stylesheet";

export default function PlaceAddScreen() {
    return(
    <View style={globalStyles.root}>
        <View>
            <TextInput style={{
                padding:4, borderBottomColor:"#111111", borderBottomWidth:1}} 
                placeholder={"장소에 대해 설명해주세요."}/>
        </View>
        <ImagePicker />
        <LocationPicker />
    </View>
    )
}