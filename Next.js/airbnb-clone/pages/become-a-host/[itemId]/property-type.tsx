import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
const example = [0,1,2]

export default function PropertyType() {
    const router = useRouter();
    const [group, setGroup] = React.useState<string>("");    
    const nextStepHandle = () => {
        // 데이터 생성 fetch...===>  생성된 데이터의 ID를 얻어와야 함
        const itemId = Date.now();
        console.log(group);
        // router.push("/become-a-host/" + itemId + "/property-type");
    };
  
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 12,
        }}
      >
        <Typography component="h1" variant="h4" color={"white"} >
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
            <Button>나가기</Button>          
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
          {example.map((one)=>{
            return(
              <ToggleButton
                sx={{ width: "70%", height: "5rem", px: 2, mb:5 }}
                value={"아파트"}             
                onClick={() => setGroup("아파트")}
                selected={group === "아파트"}
              >
              <Box
                  sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  flexDirection:"column"
                  }}
              >
                  <Typography variant="h6">아파트</Typography>                
              </Box>
              </ToggleButton>
            )
          })}
            <ToggleButton
                sx={{ width: "70%", height: "5rem", px: 2, mb:5 }}
                value={"아파트"}             
                onClick={() => setGroup("아파트")}
                selected={group === "아파트"}
            >
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection:"column"
                }}
            >
                <Typography variant="h6">아파트</Typography>                
            </Box>
            </ToggleButton>
            <ToggleButton
            sx={{ width: "70%", height: "5rem", px: 2, mb:5 }}             
            value={"주택"}
            onClick={() => setGroup("주택")}
            selected={group === "주택"}
            >
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection:"column"
                }}
            >
                <Typography variant="h6">주택</Typography>                
            </Box>
            </ToggleButton>
            <ToggleButton
            sx={{ width: "70%", height: "5rem", px: 2, mb:5 }}
            value={"별채"}             
            onClick={() => setGroup("별채")}
            selected={group === "별채"}
            >
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection:"column"
                }}
            >
                <Typography variant="h6">별채</Typography>
                
            </Box>
            </ToggleButton>
            <ToggleButton
            sx={{ width: "70%", height: "5rem", px: 2, mb:5 }}             
            value="부티크 호텔"
            onClick={() => setGroup("부티크 호텔")}
            selected={group === "부티크 호텔"}
            >
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection:"column"
                }}
            >
                <Typography variant="h6">부티크 호텔</Typography>
                
            </Box>
            </ToggleButton>
            </Box>
            <Box
                sx={{
                    my: 2,
                    mx: 4,
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: 'space-between'
                }}
            >          
                <Button onClick={()=>router.back()}>뒤로</Button>
                <Button onClick={nextStepHandle}>시작하기</Button>          
            </Box>  
                    
      </Grid>
    </Grid>
  );
}
