import { FlatList, StyleSheet, View } from "react-native";
import Champion from "../components/champion";
import {champions} from "../data/data-dummy";
import { useEffect } from 'react';

function ChampList({navigation,route}) {    
    const {tag,role} = route.params;
    
    const selectPage = (one) =>{
        navigation.navigate("champDetail",{data:one});
    }

    
    useEffect(()=>{
        navigation.setOptions({title:role});
    },[role])


    const filterChampions = champions.filter(one=>one.tags.includes(tag))

    return (
    <>
    <View>
        <FlatList data={filterChampions} renderItem={({index,item})=>{
            return <Champion item={item} onClick={selectPage}  />
        }} style={styles.list}/>
    </View>
    </>);
}
const styles = StyleSheet.create({
});

export default ChampList;