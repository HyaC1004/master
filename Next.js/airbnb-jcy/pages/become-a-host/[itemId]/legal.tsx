import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, TextField,InputLabel,Input, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HostingProgress from "../../../components/hosting/hostingProgress";

export default function Legal() {
  // console.log(props);
    const router = useRouter();
    const cctvRef = React.useRef<HTMLInputElement>(null);
    const weaponRef = React.useRef<HTMLInputElement>(null);
    const beastRef = React.useRef<HTMLInputElement>(null);

    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addLegal",
        {
            method: "POST",
            body: JSON.stringify({
              legal:{
                cctv: cctvRef.current?.checked,
                weapon: weaponRef.current?.checked,
                beast: beastRef.current?.checked,
              },  
              _id: itemId 
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
          마지막 단계입니다!
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={95} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 15,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
              숙소에 다음 물품이 있나요?
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    textAlign:"center",
                }}
            >              
              <InputLabel htmlFor="cctv" sx={{display:'flex', justifyContent:"space-between", mb:2}}>
                <Typography variant="h6">
                    보안 카메라
                </Typography>
                <Input sx={{width:'2rem'}} id="cctv" name="cctv" type="checkbox" color="secondary" ref={cctvRef} />
              </InputLabel>
              <InputLabel htmlFor="weapon" sx={{display:'flex', justifyContent:"space-between", mb:2}} >
                <Typography variant="h6">
                    무기류
                </Typography>
                <Input sx={{width:'2rem'}} id="weapon" name="weapon" type="checkbox" color="secondary" ref={weaponRef} />
              </InputLabel>
              <InputLabel htmlFor="beast" sx={{display:'flex', justifyContent:"space-between", mb:2}}>
                <Typography variant="h6">
                    위험동물
                </Typography>
                <Input sx={{width:'2rem'}} id="beast" name="beast" type="checkbox" color="secondary" ref={beastRef} />
              </InputLabel>
            </Box>  
            <Divider style={{width:'80%'}}/>
            <Box sx={{width:"80%"}}>
              <Typography variant="h4">중요사항</Typography>
              <Typography>호스팅 하는 지역의 현지 법규를 준수하고 에어비앤비의 차별 금지 정책과 게스트 및 호스트 수수료에 대해 숙지하세요.</Typography>
            </Box>
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
    </Grid>
  );
}


Legal.isRaw = true;
