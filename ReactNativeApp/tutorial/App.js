import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TodoCreate from "./components/todoCreate";
import TodoItem from "./components/todoItem";

function App() {
    const [todoList,setTodoList] = useState([]);
    const [modal,setModal] = useState(false);

    return (
    <View style={styles.root}>
        <Button title="할 일 설정" onPress={()=>{setModal(true)}}/>
        <TodoCreate setTodoList={setTodoList} setModal={setModal} visible={modal}/>
        <FlatList style={styles.list} data={todoList} renderItem={(one)=>{
            return <TodoItem one={one} setTodoList={setTodoList}/>;
        }}/>
    </View>);
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 48,
        paddingHorizontal: 16        
    },
    list:{
        marginTop:16
    }
})

export default App;