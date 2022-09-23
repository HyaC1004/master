import { useContext, useEffect, useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/app-context";
import globalStyles from "./stylesheet";
import * as Location from "expo-location";
import axios from "axios";
import FeedFontKor from "../components/feedFontKor";

function HomeScreen() {
console.disableYellowBox = true;

  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])
  const [ok,setOk] = useState(true)

  //날씨 데이터 상태관리 상태 생성!
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  })
  const [location, setLocation] = useState();
    
  useEffect(()=>{
    getLocation() 
  },[])

  const getLocation = async () => {
    try {
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      //권한 얻기
      const {granted} = await Location.requestPermissionsAsync();
      if(!granted) {
        return setOk(false);
      }
      
      //현재 위치 정보 얻기
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']		// 위도
      const longitude = locationData['coords']['longitude']		// 경도
      
      //날씨 정보 얻기
      const API_KEY = "63b6e793f406f518d735dd2a611ff147";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main
      
      console.log(temp)
      console.log(condition)

      setWeather({
        temp,condition
      })

    } catch (error) {
        console.log(error.message);
        Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }

    const ctx = useContext(AppContext);
    //console.log(ctx.auth.data.email);
    const [blur,setBlur] = useState(5);
    const [blur2,setBlur2] = useState(5);    
    return (
    <View style={globalStyles.container}>
        <View style={globalStyles.weatherContainer}>
            <FeedFontKor style={{fontSize:36,marginTop:24}}>오늘의 날씨</FeedFontKor>
            <Text>{weather.temp}</Text>
        </View>
        <Pressable onPressIn={()=>setBlur(0)} onPressOut={()=>{setBlur(5)}}><Image style={{width:120,height:120}} blurRadius={blur} source={require('../assets/images/mokoko/mokoko_hi.png')} /></Pressable>
        <Pressable onPressIn={()=>setBlur2(0)} onPressOut={()=>setBlur2(5)}><Image style={{width:120,height:120}} blurRadius={blur2} source={require('../assets/images/mokoko/mokoko_hi2.png')} /></Pressable>
    </View>  );
}

export default HomeScreen;