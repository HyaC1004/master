import { useState } from 'react';
import { Button, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import PlayGame from './screens/playGame';
import ReadyToGame from './screens/readyToGame';

export default function App() {
  const [target,setTarget] = useState(null);
  const [startAt, setStartAt] = useState(0);
  

  const startHandle = () =>{
    const ar = [];
    while(ar.length<3) {
      let val = Math.floor(Math.random()*10);
      if(!ar.includes(val)){
        ar.push(val);
      }
    }
    setTarget(ar);
    setStartAt(Date.now());
    console.log(ar,target);
  }
  let currentScreen = <ReadyToGame onStart={startHandle} />
 
  if(target) {
    currentScreen = <PlayGame target={target} setTarget={setTarget}/>
  }

  return (
    <View style={styles.container}>
      {target?<ImageBackground source={require("./assets/images/background2.png")} resizeMode="cover" style={styles.image}>
       {currentScreen}
      </ImageBackground>:<ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" style={styles.image}>
       {currentScreen}
      </ImageBackground>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:'100%',
    flex: 1,
    paddingVertical: 48,
    opacity:0.7,
    
  }
});
