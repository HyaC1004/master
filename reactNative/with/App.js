import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppContext, AppContextProvider } from './context/app-context';
import FeedChange from './screens/feedChange';
import FeedDetail from './screens/feedDetail';
import FeedScreen from './screens/feedScreen';
import FeedWrite from './screens/feedWrite';

import HomeScreen from './screens/homeScreen';
import InfoScreen from './screens/infoScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import PlaceAddScreen from './screens/placeAddScreen';
import SelectLocationScreen from './screens/selectLocationScreen';
import PlaceScreen from './screens/placeScreen';
import PlaceDetail from './screens/placeDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GuestStack() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"#C69EFA"}}>
      <Stack.Screen name='login' component={LoginScreen} options={{title:"Login"}} />
      <Stack.Screen name='register' component={RegisterScreen} options={{title:"Register"}}/>
    </Stack.Navigator>  )
}

function MemberStack() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"#C69EFA"}}>
      <Stack.Screen name='info' component={InfoScreen} options={{title:"Info"}} />
    </Stack.Navigator>  )
}

function FeedStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"#C69EFA"}}>
      <Stack.Screen name='feedScreen' component={FeedScreen} options={{title:"Feed"}} />
      <Stack.Screen name='feedWrite' component={FeedWrite} options={{title:"FeedWrite",presentation:"modal"}} />
      <Stack.Screen name='feedDetail' component={FeedDetail} options={{title:"FeedDetail"}}/>
      <Stack.Screen name='feedChange' component={FeedChange} options={{title:"FeedChange",presentation:"modal"}} />      
    </Stack.Navigator>  )
}

function PlaceStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"#C69EFA"}}>
      <Stack.Screen name='placeScreen' component={PlaceScreen} options={{title:"PlaceScreen"}} />
      <Stack.Screen name='placeAdd' component={PlaceAddScreen} options={{title:"PlaceAdd"}} />
      <Stack.Screen name='placeDetail' component={PlaceDetail} options={{title:"PlaceDetail"}}/>
      <Stack.Screen name='selectLocation' component={SelectLocationScreen} options={{title:"selectLocation",presentation:"modal"}} />
    </Stack.Navigator>  )
}

function AccountStackNavigator(){
  const ctx = useContext(AppContext);
  return(<>
      {ctx.auth ? <MemberStack /> : <GuestStack />}
      </>
  )
}

export default function App() {
  const [loaded] = useFonts({
    "Dangrek_eng":require("./assets/fonts/Dangrek-Regular.ttf"),
    "Nanumpen_kor" : require("./assets/fonts/NanumPenScript-Regular.ttf"),
    "Passions_eng" : require("./assets/fonts/PassionsConflict-Regular.ttf")
  });

  if(!loaded) {
    return <></>;
  }

  return (
    <>
      <StatusBar style="auto" />
      <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'feed') {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            } else if (route.name === 'place') {
              iconName = focused ? 'navigate-circle' : 'navigate-circle-outline';
            }
            return <Ionicons name={iconName} size={36} color={color} />;
          },
          headerTintColor:"#C69EFA",
          tabBarActiveTintColor: '#C69EFA',
          tabBarInactiveTintColor: '#C69EFA',          
        })}>
          <Tab.Screen name='home' component={HomeScreen} options={{tabBarShowLabel:false}}  />
          <Tab.Screen name='place' component={PlaceStackNavigator} options={{headerShown:false, tabBarShowLabel:false}} />
          <Tab.Screen name='feed' component={FeedStackNavigator} options={{headerShown:false, tabBarShowLabel:false}} />
          <Tab.Screen name='account' component={AccountStackNavigator} options={{headerShown:false, tabBarShowLabel:false}}/>          
        </Tab.Navigator>
      </NavigationContainer>
      </AppContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
