import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { addNotificationReceivedListener, addNotificationResponseReceivedListener, getPermissionsAsync, requestPermissionsAsync, scheduleNotificationAsync, setNotificationHandler } from 'expo-notifications';
import { useEffect } from 'react';

/* 알람처리를 어떻게 할건지 */
setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {


  useEffect(()=>{
    !async function() {
      const permission = await getPermissionsAsync();
      console.log(permission);
      if(permission.status !== "granted") {
        permission = await requestPermissionsAsync();
        console.log("2 ",permission);
        if(permission.status !== "granted") {
          Alert.alert("테스트", "알림을 받기위해서는 권한이 필요합니다.")
        }
      }
    }();

    const subscribe1 = addNotificationReceivedListener((evt)=>{
      // 앱이 가동중일때 알람을 받게 될때 작동하는 이벤트
      console.log("addNotificationReceivedListener...",evt.request.content.data);
    });

    const subscribe2 = addNotificationResponseReceivedListener((evt)=>{
      // 사용자가 알림을 누르고 들어왓을때 작동하는 이벤트 
      console.log("addNotificationResponseReceivedListener...")
      console.log(evt.notification.request.content.data);
      switch(data.type) {
        case "read":
          // navigation.navigate(); break;
      }
    });
    return () =>{
      subscribe1.remove();
      subscribe2.remove();
    }
  },[])

  function pressHandle() {
    console.log("PRESSED!");
    scheduleNotificationAsync({
      trigger:{
        seconds: 5
      },
      content:{
        title: "Test Push",
        body: "Notification Testing",
        data:{
          type: "read",
          target: 34
        }
      }
    }).then(rst=>{console.log(rst)}).catch(e=>console.log(e.message));
  }

  return (<>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Button title='테스트' onPress={pressHandle}/>
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
