import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";

type hostingContextType = {
  email:String
};
export const HostingContext = React.createContext<hostingContextType | null>(null);

export default function BecomeAHost() {
    const router = useRouter();
    const nextStepHandle = () => {
        // 데이터 생성 fetch...===>  생성된 데이터의 ID를 얻어와야 함
        router.push("/become-a-host/property-type-group");
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
          p: 12,
        }}
      >
        <Typography component="h1" variant="h4" color={"white"}>
          호스팅할 숙소 유형을 알려주세요
        </Typography>
      </Grid>
      <Grid item md={6} sx={{display:"flex", flexDirection: "column"}}>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display:"flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >          
            <Button onClick={() => router.back()}>나가기</Button>          
        </Box>
        <Box
          sx={{
            mx: 4,
            display:"flex",
            flexGrow:1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center"
          }}
        >          
            <Typography component="h1" variant="h4" fontFamily={'GangwonEdu'} >간단한 10단계로 호스팅 시작하기
            </Typography>    
            <Typography component="h1" variant="subtitle1" >
                에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든 과정을 도와드립니다.
            </Typography>     
        </Box>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display:"flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >          
            <Button onClick={nextStepHandle}>시작하기</Button>          
        </Box>
      </Grid>
    </Grid>
  );
}

