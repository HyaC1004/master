import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from "react-redux";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import DetailText from "../components/detailText";
import IconButton from "../components/iconButton";
import {champions} from "../data/data-dummy";
import favoriteSlice, { addFavorite } from '../redux/slices/favorite-slice';

function ChampDetail({navigation,route}) {
    const dispatch = useDispatch();
    const data = route.params.data;
    const favorites = useSelector(state => state.favorite)
    const champion = champions.find(one=>one.name==(data));

    const defaultValue = favorites.includes(champion.id);
    const [checked, setChecked] = useState(defaultValue);


    const pressHandle = () => {
        if (checked) {
            //dispatch({ type: "favorite/removeFavorite", value: champion.id });
            dispatch(favoriteSlice.actions.removeFavorite(champion.id));
            setChecked(false);
        } else {
            dispatch(favoriteSlice.actions.addFavorite(champion.id));
            // dispatch(addFavorite(champion.id));
            setChecked(true);
        }
    }

    useEffect(() => {
        navigation.setOptions({
            title: champion.name,
            headerRight: () => {
                return <IconButton
                    name={checked ? "star" : "star-outline"} onPress={pressHandle} />
            }
        });
    }, [champion, checked])




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
            <DetailText style={{fontSize:24}}>상세: {champion.blurb}</DetailText>
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