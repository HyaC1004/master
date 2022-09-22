import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/homeScreen';
import InfoScreen from './screens/infoScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AccountStackNavigator(){
  return(
    <Stack.Navigator screenOptions={{headerTintColor:"#C69EFA"}}>
      <Stack.Screen name='login' component={LoginScreen} options={{title:"Login"}} />
      <Stack.Screen name='register' component={RegisterScreen} options={{title:"Register"}}/>
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'info') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={36} color={color} />;
          },
          headerTintColor:"#C69EFA",
          tabBarActiveTintColor: '#C69EFA',
          tabBarInactiveTintColor: '#C69EFA',
        })}>
          <Tab.Screen name='home' component={HomeScreen} />
          <Tab.Screen name='account' component={AccountStackNavigator} options={{headerShown:false}}/>          
          <Tab.Screen name='info' component={InfoScreen} />          
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
