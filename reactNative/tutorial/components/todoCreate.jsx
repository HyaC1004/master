import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function TodoCreate({visible,setModal, setTodoList}) {
    const [todo, setTodo] = useState("");

    const changeHandle = (txt) =>{
        //console.log(txt);
        setTodo(txt);
    }
    const pressHandle = () =>{
        // 상태 업데이트 할때 기존의 상태를 활용하는 경우 직접 제어를 하게 되는 경우
        // 상태제어가 비동기적으로 일어나다 보니 원하는 결과가 안나올 가능성이 존재
        // settodoList([...todoList,{text:todo, id:Date.now()}]);
        setTodoList((current)=>{
            return [...current,{id:Date.now(), text: todo}];
        });
        setTodo("");
        setModal(false);
    }
    const cancleHandle =()=>setModal(false);

    return (
    <Modal visible={visible} animationType="slide" transparent={true} style={styles.modal} onBackdropPress={() => this.closeModal()}>
        <View style={styles.inputContainer}>
            <View>
            <TextInput style={styles.inputText} placeholder="등록할 목표.." keyboardType="default"
                onChangeText={changeHandle} value={todo}/>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={cancleHandle}><Text style={styles.text}>취소</Text></Pressable>
                <Pressable style={styles.button} onPress={pressHandle}><Text style={styles.text}>추가</Text></Pressable>
            </View>
        </View>
    </Modal>
    );
}
const styles = StyleSheet.create({
    inputContainer: {     
        backgroundColor:"#78EBD3", 
        borderRadius: 32,
        justifyContent:"center",
        padding:16,
        height:200,
        width:'90%',
        marginTop:200,
        marginHorizontal:20
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 3,
        marginRight:16,
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#2e2e2e',
    },
    inputText:{
        borderBottomWidth:1,
        padding:4,
        marginBottom:12,
        borderColor:"black"
    }
})

export default TodoCreate;