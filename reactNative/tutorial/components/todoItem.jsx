import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem({setTodoList,one}) {
    const deleteHandle = (id)=>{ 
        Alert.alert(
            "삭제",
            "삭제하실?",
            [
                {
                    text: "삭제",
                    onPress: () => setTodoList((current)=>{
                        return current.filter((e)=>e.id !== id);
                    }),
                    style:"default"
                },
                {
                    text: "취소",                    
                    style: "cancel",
                },
            ]
        )               
    }

    return (
    <Pressable onPress={()=>deleteHandle(one.item.id)}>
        <View style={styles.item}>
            <Text>{one.item.text}</Text>
        </View>
    </Pressable>
    );
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:"#ccc",
        marginBottom:8,
        padding:8,
        borderRadius:8
    }
})
export default TodoItem;