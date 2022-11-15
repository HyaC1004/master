import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Property, { PropertyData } from "../../../lib/models/property";
import PropertyButton from "../../../components/hosting/propertyButton";
import Hosting from "../../../lib/models/hosting";
const sample = ["공간 전체", "개인실", "다인실"];
export default function PrivacyType() {
    const router = useRouter();
    const [value, setValue] = React.useState<string>(""); 
    // console.log("props", props.groupItems.types);
    // console.log("쿼리",router.query);
    const nextStepHandle = () => {
      const { itemId } = router.query;
      fetch("/api/hosting", {
        method: "post",
        body: JSON.stringify({privacy: value, _id: itemId}),
        headers: {
            "Content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.result === true) {
          router.push("/become-a-host/" + data?.data._id + "/location");
        } else {
        }
      });
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
          {sample.map((one)=>(
            <PropertyButton
              onClick={(nValue) => setValue(nValue)}
              value={one}
              compare={value}
              key={one}
            />
          ))}
            
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
                <Button onClick={nextStepHandle}>다음</Button>          
            </Box>  
                    
      </Grid>
    </Grid>
  );
}

