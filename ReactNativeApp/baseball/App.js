import { useState } from 'react';
import { Button, ImageBackground, KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';
import EndGame from './screens/endGame';
import PlayGame from './screens/playGame';
import ReadyToGame from './screens/readyToGame';

export default function App() {
  const [target,setTarget] = useState(null);
  const [startAt, setStartAt] = useState(0);
  const [count, setCount] = useState(0);
  const [onGame, setOnGame] = useState(false);
  

  const startHandle = () =>{
    const ar = [];
    while(ar.length<4) {
      let val = Math.floor(Math.random()*10);
      if(!ar.includes(val)){
        ar.push(val);
      }
    }
    setTarget(ar);
    setStartAt(Date.now());
    setOnGame(true);
    console.log(ar,target);
  }
  const endHandle = (tryCount) =>{
    setCount(tryCount);
    setOnGame(false);
  }
  const onRestart = ()=>{
    setTarget(null);    
  }
  let currentScreen = null;
 
  if(!target) {
    currentScreen = <ReadyToGame onStart={startHandle} />
  }else{
    if(onGame){
      currentScreen = <PlayGame target={target} setTarget={setTarget} onEnd={endHandle}/>
    }else{
      const elapsed = ((Date.now()- startAt)/1000).toFixed(1)
      currentScreen= <EndGame target={target} elapsed={elapsed} count={count} onRestart={onRestart}/>
    }
  }
  

  

  return (
    <>
    <KeyboardAvoidingView style={{flex:1}} behavior="">
    <View style={styles.container}>
      {target?<ImageBackground imageStyle={{opacity:0.8}} source={require("./assets/images/background2.png")} resizeMode="cover" style={styles.image}>
       {currentScreen}
      </ImageBackground>:<ImageBackground  imageStyle={{opacity:0.8}} source={require("./assets/images/background.png")} resizeMode="cover" style={styles.image}>
       {currentScreen}
      </ImageBackground>}
    </View>
    </KeyboardAvoidingView>
    </>
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
    
  }
});
