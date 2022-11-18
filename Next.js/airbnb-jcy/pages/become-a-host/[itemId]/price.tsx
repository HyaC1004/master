import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputLabel, OutlinedInput, Input, InputAdornment, FormHelperText } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HostingProgress from "../../../components/hosting/hostingProgress";
import { useRef } from "react";

export default function Price() {
  // console.log(props);
    const router = useRouter();
    const [price, setPrice] = React.useState(30000);
    const ref = useRef<HTMLInputElement>(null);
    const handlePrice = (evt:any) => {
      setPrice(evt.target.value);      
    }
    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addPrice",
        {
            method: "POST",
            body: JSON.stringify({ price:price<10000?10000:price, sale:ref.current!.checked, _id: itemId }),
            headers: { "Content-type": "application/json" },
        }
        );
        const json = await response.json();

        if (response.status === 200) {
        router.push("/become-a-host/" + json?.data._id + "/legal");
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
          width:'100%'
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          이제 요금을 설정하세요
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
              pt: 15,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
              이제 요금을 설정하세요
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    textAlign:"center",
                }}
            >
              <Box sx={{display:'flex',padding:2,mb:4, flexDirection:"column", border:"1px solid #ccc", borderRadius:"1rem", backgroundColor:"#E3E3E3"}}>
                <Box sx={{display:'flex', flexDirection:"row", mb:4, justifyContent:"space-around"}}>
                <Button onClick={() => setPrice((c) => c - 1000)} disabled={price <= 10000} color="secondary">
                    <RemoveCircleOutlineOutlinedIcon  />
                </Button>
                <OutlinedInput  
                  type="number"
                  className="priceText"
                  color="secondary" sx={{alignItems:"center", orderRadius:"0.5rem", backgroundColor:"white"}} 
                  value={price<10000 ? 10000 : price} 
                  onChange={handlePrice}
                />
                <Button onClick={() => setPrice((c) => c*1 + 1000)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                </Box>
                <Typography variant="subtitle1">이 지역에서 비슷한 숙소의 요금은 보통 ₩29,857~₩49,761 사이입니다.</Typography>
              </Box>
              
                <InputLabel htmlFor="how" sx={{display:'flex',padding:"1rem",flexWrap:"wrap", border:"1px solid #ccc", borderRadius:"1rem", backgroundColor:"#E3E3E3"}} >
                  <Typography variant="h5" sx={{width:'90%', textAlign:'left'}}>단기간에 예약률을 높이는 법</Typography>
                  <Input type="checkbox" name="how" id="how" color="secondary" ref={ref} />
                  <Typography variant="subtitle1" sx={{color:"#333", mt:1}}>첫 게스트 3명에게 20% 할인 혜택을 제공하여 더 빨리 예약을 받아보세요.</Typography>
                </InputLabel>
            </Box>  
            
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
    </Grid>
  );
}


Price.isRaw = true;
