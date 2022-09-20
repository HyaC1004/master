import { FlatList, Image, View } from "react-native";
import { useSelector, useStore } from "react-redux";
import { champions } from "../data/data-dummy";

import FontText from "../components/fontText";
import Champion from "../components/champion";

function FavList({navigation}) {    
    const favorites = useSelector(state => state.favorite);

    const favChamps = champions.filter((one) => favorites.includes(one.id));
    const selectPage = (one) =>{
        navigation.navigate("champDetail",{data:one});
    }

    return (<View>
         <FlatList data={favChamps} renderItem={({index,item})=>{
            return <Champion item={item} onClick={selectPage}  />
        }} />
    </View>);
}

export default FavList;
