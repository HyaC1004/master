import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ChampText from "../components/champText";
import DetailText from "../components/detailText";
import {champoions} from "../data/data-dummy";
import { useEffect } from 'react';

function ChampDetail({navigation,route}) {
    const data = route.params.data;
    const champion = champoions.find(one=>one.name==(data))

    useEffect(()=>{
        navigation.setOptions({title:data});
    },[data])
    return (
    <> 
    <ScrollView>
    <View style={styles.outerContainer}>
        <View style={styles.title}>
        <DetailText style={{fontSize:32,textAlign:"center"}}>{champion.name}, {champion.title}</DetailText>
        <DetailText style={{fontSize:24,textAlign:"center"}}>{champion.id}</DetailText>
        </View>
        <Image style={styles.image} source={{uri : champion.fullImage}} resizeMode="contain" />
        <View style={styles.content}>
            <DetailText style={{fontSize:24}}>소모 자원: {champion.partype}</DetailText>
        </View>
    </View>
    </ScrollView>
    </>  );
}
const styles = StyleSheet.create({   
    outerContainer:{
        flex:1,
        backgroundColor:"#223C6B",
        alignItems:"center"
    },
    title:{
        paddingVertical:8,      
        width:'100%'
    },
    image:{
        width:'100%',
        height:400,
        marginBottom:8
    },
    content:{
        paddingBottom:20
    },
})
export default ChampDetail;