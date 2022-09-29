import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/app-context";
import { Ionicons } from '@expo/vector-icons';
import globalStyles from "./stylesheet";
import * as Location from "expo-location";
import axios from "axios";
import FeedFontKor from "../components/feedFontKor";
import { useIsFocused } from "@react-navigation/native";
import { recievePlace } from "../util/places";
import PlaceComponent from "../components/placeComponent";
import IconButton from "../components/iconButton";
import { getAddresses } from "../util/maps";

function HomeScreen() {
  console.disableYellowBox = true;
  const isFocused = useIsFocused();
  const [ok,setOk] = useState(true)
  const [address,setAddress] = useState(null);

  //날씨 데이터 상태관리 상태 생성!
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  });
    
  useEffect(()=>{
    getLocation();
    
  },[isFocused])

  
  const getLocation = async () => {
    try {
      
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      //권한 얻기
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if(!granted) {
        return setOk(false);
      }
     
      //현재 위치 정보 얻기
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']		// 위도
      const longitude = locationData['coords']['longitude']		// 경도
      // console.log(latitude,longitude);
      getAddresses(latitude,longitude).then(val=>{
          setAddress(val.formatted_address);
          // console.log("getloc");
      }).catch(e=>{console.log("get",e.message)})
      //날씨 정보 얻기
      const API_KEY = "63b6e793f406f518d735dd2a611ff147";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      // console.log(address);

      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main
      let icon = "";
      
      if(condition=="Clouds"){
        icon="cloud"
      }else if(condition=="Clear"){
        icon="sunny"
      }

      setWeather({
        temp,condition,icon
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
          <View style={{flexDirection:"row"}}>
            <FeedFontKor style={{fontSize:36,marginTop:24}}>오늘의 날씨</FeedFontKor>
            <Ionicons style={{marginLeft:24,paddingTop:12 }} name={weather.icon} size={48} color={"#C69EFA"} />
          </View>
            <FeedFontKor style={{fontSize:18,marginTop:24}}>{address}</FeedFontKor>
            <Text>기온: {weather.temp}˚c , 날씨: {weather.condition}</Text>
        </View>
        <Pressable onPressIn={()=>{setBlur(0);
          getLocation();
        }} onPressOut={()=>{setBlur(5)}}><Image style={{width:120,height:120}} blurRadius={blur} source={require('../assets/images/mokoko/mokoko_hi.png')} /></Pressable>
        <Pressable onPressIn={()=>setBlur2(0)} onPressOut={()=>setBlur2(5)}><Image style={{width:120,height:120}} blurRadius={blur2} source={require('../assets/images/mokoko/mokoko_hi2.png')} /></Pressable>
    </View>  );
}

export default HomeScreen;