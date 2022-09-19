import { Image, Pressable, StyleSheet, View } from "react-native";
import ChampText from "./champText";

function Champion({item, onClick}) {
    //console.log(item);
    const selectHandle = ()=>{   
        //console.log(item.key);
        onClick(item.name);
    }

    return ( 
    <View style={styles.outerContainer}>
        <Pressable style={styles.layer} onPress={selectHandle}
            android_ripple={{color:"#dddddd"}}>
            <Image style={styles.image} source={{uri : item.simpleImage}} />
            <View style={styles.innerContainer}>
                <ChampText style={{fontSize:24}}>{item.name} <ChampText style={{fontSize:16}}>- {item.title}</ChampText></ChampText> 
                <ChampText>{item.id}</ChampText>               
                <ChampText>{item.tags[0]} {item.tags[1]??""}</ChampText>
            </View>
        </Pressable>
    </View> );
}
const styles = StyleSheet.create({
    outerContainer: {
        margin: 4,
        flex: 1,
        height:100,
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        width:100,
        height:100
    },
    layer: {
        width:'100%',
        flex:1,  
        flexDirection:"row"
    },
    innerContainer: {
        borderRadius: 1,
        paddingHorizontal:8,
        elevation: 2,
        flex: 1,
        zIndex: 1,
        justifyContent: "center",
    }
})
export default Champion;