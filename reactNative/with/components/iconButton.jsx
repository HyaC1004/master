import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default function IconButton({ onPress, style, size, name, color }) {
    return (<Pressable onPress={onPress}
        style={({ pressed }) => pressed ? [{ opacity: 0.6 }, style] : style} >
        <Ionicons name={name} size={size} color={color} />
    </Pressable>);
}

