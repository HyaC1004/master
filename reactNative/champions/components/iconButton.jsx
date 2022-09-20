import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({ onPress, name }) {

    return (<Pressable onPress={onPress} style={
        ({ pressed }) => pressed ? { opacity: 0.7 } : null
    }>
        <Ionicons name={name} color={"white"} size={22} />
    </Pressable>);
}



