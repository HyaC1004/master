import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RoleList from './screens/roleList';
import FavList from './screens/favList';
import ChampList from './screens/champList';
import ChampDetail from './screens/champDetail';
import Ionicons from '@expo/vector-icons/Ionicons';
import store from './redux/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Menu() {
  return (
    <Drawer.Navigator screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "#3760AD" },
      headerTitleStyle: { fontFamily: "DongleRegular", fontSize: 36 },
      drawerActiveBackgroundColor: "black",
      drawerActiveTintColor: "white"
    }}
    >
      <Drawer.Screen name="roleList" component={RoleList}
        options={{ title: "역할 분류", drawerIcon: ({ color }) => <Ionicons name="list" size={20} color={color} /> }} />
      <Drawer.Screen name="favorites" component={FavList}
        options={{ title: "즐겨찾기", drawerIcon: ({ color }) => <Ionicons name="star" size={20} color={color} /> }} />
    </Drawer.Navigator>
  );
}

export default function App() {  
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
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='roleList' screenOptions={{
          headerTintColor: '#fff',
          headerStyle:{backgroundColor:"#3760AD"},
          headerTitleStyle:{color:"#fff"}
        }}>
          <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }}/>
          <Stack.Screen name="champList" component={ChampList} />
          <Stack.Screen name="champDetail" component={ChampDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
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