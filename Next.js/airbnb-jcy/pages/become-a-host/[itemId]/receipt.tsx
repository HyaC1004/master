import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia, Card, CardContent, Modal, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import HostingProgress from "../../../components/hosting/hostingProgress";
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Receipt({
  hosting
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(hosting.facilities);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const host = hosting.owner.split("@");
  const facilities:Array<String> = hosting.facilities;
  const nextStepHandle = async () => {
      const { itemId } = router.query;
      const response = await fetch(
        "/api/hosting/updateStepData?opertion=receipt",
        {
          method: "POST",
          body: JSON.stringify({
            _id: itemId,
            receipt: new Date(),
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const json = await response.json();
  
      if (response.status === 200) {
        router.push("/become-a-host/" + json?.data._id + "/publish-celebration");
      } else {
      }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 7,
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          숙소 검토하기
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={90} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 7,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
              게스트에게 표시되는 정보는 다음과 같습니다. 모든 정보가 정확한지 확인하세요.
            </Typography>
            <Box>
              <Card
                sx={{ height: "400px", display: 'flex', flexDirection: 'column', mb:2, cursor:"pointer" }}
                onClick={handleOpen}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height:"300px"
                  }}
                  image={hosting.photos[0].extraUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {hosting.title}
                  </Typography>
                  {
                    hosting.sale?
                    <Box sx={{display:"flex"}}>
                      <Typography sx={{textDecoration:"line-through",fontFamily:"sans-serif", color:"#aaa", mr:1}}>₩{hosting.price}</Typography>
                      <Typography sx={{fontFamily:"sans-serif"}}>₩{(hosting.price)*0.8} 박</Typography>
                    </Box> : 
                    <Typography>₩{hosting.price} 박</Typography>
                  }
                </CardContent>
              </Card>
              <Box>
                <Typography variant="h5" sx={{mb:2}}>다음 단계</Typography>
                <Box sx={{mb:1}}>
                  <Typography variant="h6"><FactCheckOutlinedIcon /> 세부 정보를 확인하고 숙소를 등록하세요</Typography>
                  <Typography>본인 인증이 필요하거나 현지 정부에 등록해야 하는 경우 안내해드리겠습니다.</Typography>
                </Box>
                <Box sx={{mb:1}}>
                  <Typography variant="h6"><CalendarMonthIcon /> 달력 설정하기</Typography>
                  <Typography>숙소 예약 가능일을 선택해주세요. 숙소는 등록 완료 후 24시간이 지나면 일반에 공개됩니다.</Typography>
                </Box>
                <Box sx={{mb:1}}>
                  <Typography variant="h6"><CreateOutlinedIcon /> 설정 변경하기</Typography>
                  <Typography>숙소 이용규칙 설정, 환불 정책 선택, 게스트의 예약 방식 선택 등 필요한 작업을 하세요.</Typography>
                </Box>
              </Box>
            </Box>            
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} sx={{cursor:"pointer", position:"absolute", top:20, left:20}} />
          <Typography id="modal-modal-title" variant="h6" sx={{textAlign:"center", mb:2}}>
            미리보기 전체
          </Typography>
          <Divider sx={{width:"100%"}} />
          <Box sx={{display:"flex", mt:2}}>
            <Box sx={{width:"50%"}}>
              <img src={hosting.photos[0].extraUrl} width="400px" />
            </Box>
            <Box sx={{overflowY:"scroll",height:"400px", flexGrow:1, pb:4}}>
              <Typography variant="h4">{hosting.title}</Typography>
              <Typography variant="h5">{host[0]} 님이 호스팅하는 저택의 개인실</Typography>
              <Typography variant="h6">최대 인원 {hosting.floorPlan.guests}명 · 침실 {hosting.floorPlan.bedrooms}개 · 침대 {hosting.floorPlan.beds}개 · 욕실 {hosting.floorPlan.bathrooms}개</Typography>
              <Divider sx={{width:"100%", mb:2, mt:2}} />
              <Typography variant="h6" sx={{width:"80%"}}>{hosting.description}</Typography>
              <Divider sx={{width:"100%", mb:2, mt:2}} />
              <Typography variant="h6">편의시설</Typography>
              <Box sx={{display:"flex", flexDirection:"column"}}>
                {hosting.facilities && hosting.facilities.map((one:string)=>               
                  <Typography variant="subtitle1" key={one}>{one}</Typography>  
                )}
              </Box>
              <Divider sx={{width:"100%", mb:2, mt:2}} />
              <Typography variant="h6">위치</Typography>
              <Typography variant="h6">{hosting.location.state} {hosting.location.city} {hosting.location.street}</Typography>
              <Typography variant="subtitle2">숙소 주소는 여행마렵다 개인정보 처리방침에 따라 예약을 완료한 게스트에게만 공개됩니다.</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findById(itemId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};

Receipt.isRaw = true;
