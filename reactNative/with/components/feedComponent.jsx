import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function FeedComponenet({item}) {
    console.log(item);
    return ( 
    <Pressable style={styles.feedWrap}>
        <View>
            <Text>{item.email}</Text>
            <Text>2022-08-22</Text>
        </View>
        <View>
            <Text>{item.text}</Text>
            <Image style={styles.images} source={require("../assets/images/ebichu/ebichu_cry.gif")}/>
        </View>
    </Pressable>
     );
}
const styles = StyleSheet.create({
    feedWrap:{
        marginBottom:16    
    },
    images:{
        width:60,
        height:60
    }
})

export default FeedComponenet;