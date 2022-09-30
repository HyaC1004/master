import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, View } from 'react-native';
import * as Notifications from "expo-notifications";
import { useEffect } from 'react';


/* 알람처리를 어떻게 할껀지 */
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: true,
      shouldShowAlert: true
    }
  }
});

export default function App() {
  //============================================================================
  useEffect(() => {
    !async function () {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('Failed to get push token for push notification!');
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);

    }();
  }, [])














  //============================================================================
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title='테스트' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
