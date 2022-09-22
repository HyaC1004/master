import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "./stylesheet";

function InfoScreen() {
    return (
    <View style={globalStyles.root}>
        <Pressable><Image source={require('../assets/images/ebichu/ebichu_cry.gif')} /></Pressable>
    </View>  );
}
const styles = StyleSheet.create({
  
});
export default InfoScreen;