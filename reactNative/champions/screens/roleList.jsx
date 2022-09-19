import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontText from '../components/fontText';
import { categories} from "../data/data-dummy";
import RoleItem from '../components/roleItem';


function RoleList({navigation,route}) {
    const selectPage = (tag,role) =>{
        //console.log(one);
        navigation.navigate("champList",{tag,role});
    }
    
    return ( 
    <>
    <View>        
        <FlatList data={categories} keyExtractor={(one)=>one.id} renderItem={({index,item})=>{
            return <RoleItem item={item} onClick={selectPage} />
        }} numColumns={2} style={styles.list}/>
    </View>
    </> );
}

const styles = StyleSheet.create({
    image:{
      width:'100%',
      flex: 1,
      paddingVertical: 48,
      alignItems: 'center',
    },
    list:{
    }
});
export default RoleList;