import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RoleList from './screens/roleList';
import { NavigationContainer } from '@react-navigation/native';
import ChampList from './screens/champList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChampDetail from './screens/champDetail';

const Stack = createNativeStackNavigator();
console.log(Stack);

export default function App() {  
  const [role,setRole] = useState([]);
  const [loaded] = useFonts({
    "Gamja":require("./assets/fonts/GamjaFlower-Regular.ttf"),
    "DongleBold" : require("./assets/fonts/Dongle-Bold.ttf"),
    "DongleLight" : require("./assets/fonts/Dongle-Light.ttf"),
    "DongleRegular" : require("./assets/fonts/Dongle-Regular.ttf"),
    "Cute" : require("./assets/fonts/CuteFont.ttf"),
    "Jua" : require("./assets/fonts/Jua-Regular.ttf"),    
    "GowunDodum" : require("./assets/fonts/GowunDodum.ttf")
  });
  if(!loaded) {
    return <></>;
  }

  
  return (
    <>    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor: '#fff',headerStyle:{backgroundColor:"#3760AD"},headerTitleStyle:{color:"#fff"}}}>
          <Stack.Screen name="roleList" component={RoleList} options={{title:"역할 목록"}}/>
          <Stack.Screen name="champList" component={ChampList} />
          <Stack.Screen name="champDetail" component={ChampDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});

/*
  npx expo install expo-font 폰트 설치
  asset/fonts/[적용시킬 font 파일]
*/
/*
  원활한 navigation 효과를 위해 react native앱에서는
  third party library를 활용하는데 React Navigation 이라는걸 사용해보자
*/