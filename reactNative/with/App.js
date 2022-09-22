import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext, AppContextProvider } from './context/app-context';
import FeedScreen from './screens/feedScreen';

import HomeScreen from './screens/homeScreen';
import InfoScreen from './screens/infoScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';

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

function AccountStackNavigator(){
  const ctx = useContext(AppContext);
  return(<>
      {ctx.auth ? <MemberStack /> : <GuestStack />}
      </>
  )
}

export default function App() {
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
            }
            return <Ionicons name={iconName} size={36} color={color} />;
          },
          headerTintColor:"#C69EFA",
          tabBarActiveTintColor: '#C69EFA',
          tabBarInactiveTintColor: '#C69EFA',
        })}>
          <Tab.Screen name='home' component={HomeScreen} />
          <Tab.Screen name='feed' component={FeedScreen} />
          <Tab.Screen name='account' component={AccountStackNavigator} options={{headerShown:false}}/>          
        </Tab.Navigator>
      </NavigationContainer>
      </AppContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
