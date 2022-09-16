import { Button, StyleSheet, View } from "react-native";

function App() {
    return (
    <>
    <View style={styles.root}>
        <Button title="One"/>        
        <Button title="Two"/>
        <Button title="Three"/>
    </View>
    <View style={styles.main}>
        <Button title="One"/>    
    </View>
    </>
     );
}
const styles = {
    root : {
        flexDirection : "column",
        flex : 1,
        alignItems : "flex-end",
        justifyContent: "space-between",
        backgroundColor : "#e2e2e2"
    },
    main : {
        flex : 4,
        backgroundColor : "#2e2e2e",
        justifyContent: "center"
    }
}


export default App;