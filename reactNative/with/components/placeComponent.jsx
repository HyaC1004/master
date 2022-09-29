import { useNavigation } from "@react-navigation/native";
import { Animated, Easing, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import FeedFontKor from "./feedFontKor";
import Icon from "react-native-vector-icons/AntDesign"
import { useRef, useState } from "react";

function PlaceComponent({item}) {
    const [heart, setHeart] = useState(false);
    const [lastTap, setLastTap] = useState(null);
    const opacity = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const detailHandle = () =>{
        navigation.navigate("placeDetail",{item});
    }
    const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        //두번째 tap이 지난 tap을 한지 0.03초 이내에 이뤄졌을 때 -> Double tap
        if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
            toggleHeart();
        }
        else {
            setLastTap(now);
        }
    }
    const date = new Date(item.createdAt);
    const fillHeart = () => {
        Animated.sequence([
                Animated.timing(opacity, {
                toValue: 1,
                duration: 400,
                easing: Easing.quad,
                useNativeDriver: true,
            }),
                Animated.delay(600),
                Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }
    const toggleHeart = () => {
        setHeart(previousState => !previousState);
        fillHeart();
    }
    return ( 
    <Pressable onPress={detailHandle} style={styles.feedWrap}>
        <View>
            <View style={styles.title}>
                <FeedFontKor style={{fontSize:36}}>{item.title}</FeedFontKor>     
                <TouchableOpacity onPress={toggleHeart} style={{width: 25, height: 25}}  >
                    {heart ? <Icon name="heart" size={23} color={'#3D3D3D'}></Icon> : <Icon name="hearto" size={23} color={'#595959'}></Icon>}
                </TouchableOpacity>           
            </View>
            <View style={{flexDirection:"row"}}>
                <FeedFontKor style={{fontSize:18, marginLeft:24}}>{item.range.toString().slice(0,3)}km</FeedFontKor>
                <Text style={{fontSize:10}}>{date.toISOString().slice(0,10)}</Text>
            </View>
        </View>
        <View style={{flexDirection:"row",width:'100%'}}>
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                <ImageBackground resizeMode='contain' source={{uri:item.imageURL}}
                    style={styles.images} />
            </TouchableWithoutFeedback>
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
    },
    title: {
        width: '90%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
})

export default PlaceComponent;