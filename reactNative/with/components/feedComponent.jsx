import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FeedFontEng from "./feedFontEng";
import FeedFontKor from "./feedFontKor";

function FeedComponenet({item}) {
    const navigation = useNavigation();

    const detailHandle = () =>{
        navigation.navigate("feedDetail",{item});
    }
    const date = new Date(item.createdAt);
    //console.log(date);
    

    return ( 
    <Pressable onPress={detailHandle} style={styles.feedWrap}>
        <View>
            <FeedFontKor style={{fontSize:36}}>{item.title}</FeedFontKor>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <FeedFontEng style={{fontSize:12}}>{item.email}</FeedFontEng>
            <Text style={{fontSize:10}}>{date.toISOString().slice(0,10)}</Text>
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
        width:60,
        height:60
    }
})

export default FeedComponenet;