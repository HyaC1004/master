import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, TextField, OutlinedInput, InputAdornment, FormHelperText } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HostingProgress from "../../../components/hosting/hostingProgress";

export default function Price() {
  // console.log(props);
    const router = useRouter();
    const [description, setDescription] = React.useState<string>("차분하면서도 스타일이 살아 있는 숙소에서 편안한 휴식을 즐기세요.");

    const handleDescription = (evt:any) => {
        setDescription(evt.target.value);
    }
 
    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addPrivacy",
        {
            method: "POST",
            body: JSON.stringify({  _id: itemId }),
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
            숙소 설명 작성하기
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
             숙소의 특징과 장점을 알려주세요.
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    height:"400px",
                    textAlign:"center",
                }}
            >
                <FormControl sx={{ m: 1, width: '100%',maxHeight:"400px" }} variant="outlined">
                    <TextField 
                        sx={{fontSize:"2rem"}}
                        aria-describedby="helper-text"
                        onChange={handleDescription}
                        color="secondary"
                        multiline
                        defaultValue="차분하면서도 스타일이 살아 있는 숙소에서 편안한 휴식을 즐기세요."                                                
                        rows={10}
                    />
                    <FormHelperText id="helper-text">{description.length}/500</FormHelperText>
                </FormControl>
            </Box>  
            
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
    </Grid>
  );
}


Price.isRaw = true;
