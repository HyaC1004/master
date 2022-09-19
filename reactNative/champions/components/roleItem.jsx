import { Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import IconText from "./iconText";

function RoleItem({item, onClick}) {
    //console.log(item);
    const selectHandle = ()=>{      
        onClick(item.name,item.role);
    }

    return (
    <View style={styles.outerContainer}>
        <Pressable onPress={selectHandle} style={styles.layer} 
                android_ripple={{color:"#dddddd"}}>
            <ImageBackground source={item.src} resizeMode={"cover"} 
                style={styles.innerContainer} imageStyle={{opacity:0.5,borderRadius:10}}>                
                <IconText>{item.role}</IconText>
                <IconText>{item.name}</IconText>
            </ImageBackground>
        </Pressable>
    </View>);
}
const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 1,
        margin: 8,
        elevation: 2,
        flex: 1,
        height:150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10        
    },
    layer: {
        width:'100%',
        flex:1
    },
    innerContainer: {
        flex: 1,
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"flex-end"
    }
})
export default RoleItem;