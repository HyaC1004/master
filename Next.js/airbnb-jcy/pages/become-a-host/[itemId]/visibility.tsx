import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, TextField, OutlinedInput, InputAdornment, FormHelperText, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HostingProgress from "../../../components/hosting/hostingProgress";

export default function Visibility() {
  // console.log(props);
    const router = useRouter();
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

 
    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addVisibility",
        {
            method: "POST",
            body: JSON.stringify({ visibility:value, _id: itemId }),
            headers: { "Content-type": "application/json" },
        }
        );
        const json = await response.json();

        if (response.status === 200) {
        router.push("/become-a-host/" + json?.data._id + "/price");
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
          첫 예약의 게스트 조건을 선⁠택⁠해⁠주⁠세⁠요
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={85} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 10,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
              첫 번째 게스트의 예약을 받은 후에는 누구나 숙소를 예약할 수 있습니다.
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    height:"400px",
                    textAlign:"center",
                }}
            >
                <FormControl>
                  <RadioGroup                    
                    value={value}
                    onChange={handleChange}
                  >
                    <Box sx={{display:'flex', flexDirection:"column", mb:4}}>
                      <FormControlLabel value="allGuest" control={<Radio color="secondary" />} label="모든 에어비엔비 게스트" />
                      <FormHelperText>모든 여행마렵다 게스트를 맞이하겠다고 설정하면 예약을 더 빨리 받으실 수 있습니다.</FormHelperText>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:"column", mb:4}}>
                      <FormControlLabel value="authorizedGuest" control={<Radio color="secondary" />} label="경험이 풍부한 게스트" />
                      <FormHelperText>여행마렵다 이용 실적이 우수하며, 유용한 호스팅 팁도 제공할 수 있는 사람을 첫 번째 게스트로 수락하세요.</FormHelperText>
                    </Box>
                  </RadioGroup>
                </FormControl>
            </Box>  
            
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
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

Visibility.isRaw = true;
