import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FeedFontEng from "./feedFontEng";
import FeedFontKor from "./feedFontKor";

function PlaceComponent({item}) {
    const navigation = useNavigation();
    const detailHandle = () =>{
        navigation.navigate("feedDetail",{item});
    }
    const date = new Date(item.createdAt);
    //console.log(date);
    console.log(item);

    return ( 
    <Pressable style={styles.feedWrap}>
        <View>
            <FeedFontKor style={{fontSize:36}}>{item.title}</FeedFontKor>
            <Text style={{fontSize:10}}>{date.toISOString().slice(0,10)}</Text>
        </View>
        <View style={{flexDirection:"row",width:'100%'}}>
            <Image style={styles.images} source={{uri:item.imageURL}} />
        </View>
    </Pressable>
     );
}
const styles = StyleSheet.create({
    feedWrap:{
        marginBottom:16,
        backgroundColor: "#E9DCFC",
        padding:16,
        borderRadius: 20
    },
    images:{
        width:'100%',
        height:200
    }
})

export default PlaceComponent;