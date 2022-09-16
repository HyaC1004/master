import { StyleSheet, View } from "react-native";

function Card({children}) {
    return (<View style={style.card}>{children}</View>);
}

const style=StyleSheet.create({
    card : {
        padding : 8,
        borderColor : "black",
        elevation : 2,
        borderWidth : 2,
        backgroundColor : "white",
        opacity : 0.95
    }
})
export default Card;