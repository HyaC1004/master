import { StyleSheet } from "react-native";

const globalStyles =  StyleSheet.create({
    root:{
        flex: 1,
        display:"flex",
        justifyContent: "space-around",
        paddingHorizontal: 8,
        backgroundColor: "#ffffff"
    },
    container:{
        flex:1,
        alignItems:"center",
        marginTop: 36
    },
    weatherContainer:{
        
    },
    feedContainer:{
        flex:1,
        marginTop: 12,
        paddingHorizontal: 16
    },
    detailContainer:{
        flex:1,
        paddingTop: 12,
        paddingHorizontal: 16,
        backgroundColor: "#E9DCFC",
    },
    inputBox: {
        backgroundColor: "#C7B7FA",
        borderRadius: 20,
        width: "70%",
        height: 45,
        marginBottom: 20
      },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    feedInputBox: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "80%",
        marginBottom: 20
    },
    
});

export default globalStyles;