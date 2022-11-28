import { HostingData } from "../../lib/models/hosting";
import { Grid, Box, Typography, Avatar, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WifiIcon from '@mui/icons-material/Wifi';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DetailDatePicker from "./detailDatePicker";
import BookingSummary from "./parts/bookingSummary";
import CalendarFragment from "./calendar/caledar-fragment";

function DetailLeftContents({ hosting }: { hosting: HostingData }) {
    const host = hosting.owner.split("@");
  return (
    <>
     <Box sx={{width:"100%", mt:4}}>
      <Box>
        <Typography variant="h4">{host[0]} 님이 호스팅하는 숙소</Typography>
        <Typography variant="subtitle1">최대 인원 {hosting.floorPlan.guests}명 · 침실 {hosting.floorPlan.bedrooms}개 · 침대 {hosting.floorPlan.beds}개 · 욕실 {hosting.floorPlan.bathrooms}개</Typography>
      </Box>
      <Divider sx={{width:"100%", mt:2, mb:2}} />
      <Box>
        <Box sx={{display:"flex", mb:2}}>
          <Box sx={{mr:2}}>
            <WifiIcon sx={{fontSize:"3rem"}} />
          </Box>
          <Box>
            <Typography variant="h6">재택근무에 적합</Typography>
            <Typography variant="subtitle1">94Mbps의 초고속 와이파이가 제공되며, 개인실에 전용 업무 공간도 마련되어 있습니다.</Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex" , mb:2}}>
          <Box sx={{mr:2}}>
            <HowToRegIcon sx={{fontSize:"3rem"}} />
          </Box>
          <Box>
            <Typography variant="h6">셀프 체크인</Typography>
            <Typography variant="subtitle1">키패드를 이용해 체크인하세요.</Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex", mb:2}}>
          <Box sx={{mr:2}}>
            <LocalParkingIcon sx={{fontSize:"3rem"}} />
          </Box>
          <Box>
            <Typography variant="h6">무료 주차 혜택을 누리세요</Typography>
            <Typography variant="subtitle1">해당 지역에서 무료 주차가 가능한 몇 안 되는 숙소 중 하나입니다.</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{width:"100%", mt:2, mb:2}} />
      <Box>
        <Box sx={{display:"flex", mb:1}}>
          <Typography variant="h4" color="#E05F5F">에어</Typography>
          <Typography variant="h4">커버</Typography>
        </Box>
        <Box>
          <Typography variant="h6">모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</Typography>
          <Typography variant="subtitle1" sx={{mt:1, cursor:"pointer", textDecorationLine:"underline"}}>더 알아보기</Typography>
        </Box>
      </Box>
      <Divider sx={{width:"100%", mt:2, mb:2}} />
      <Box>
        <Typography variant="h4">숙소 소개</Typography>
        <Typography variant="subtitle1">
          {hosting.description}
        </Typography>
        <Typography variant="subtitle1" sx={{mt:1, cursor:"pointer", textDecorationLine:"underline"}}>더 보기</Typography>            
      </Box>
        <Divider sx={{width:"100%", mt:2, mb:2}} />
        <Box>
          <Typography variant="h4">숙소 편의시설</Typography>
          <Box sx={{display:"flex", flexWrap:"wrap"}}>
            {hosting.facilities.map((one:any)=>
              <Typography key={one} variant="h6" sx={{width:"50%"}} >{one}</Typography>
            )}
          </Box>
        </Box>
        <Divider sx={{width:"100%", mt:2, mb:2}} />
        <BookingSummary hosting={hosting} />
        <CalendarFragment />
      </Box>
    </>
  );
}

export default DetailLeftContents;
